

# Implementation Plan: Consent-Gated Analytics, reCAPTCHA Integration, and Cookie Script Management

## Overview
This plan implements three interconnected changes to Purple Rain Construction's tracking, privacy, and security systems:
1. **Remove hardcoded GA4 script** from index.html and move to consent-gated dynamic loading
2. **Add dynamic GA4 loading logic** to CookieConsent component based on user consent state
3. **Integrate reCAPTCHA v2 Invisible** into ContactForm with backend verification

**Critical Constraints:**
- GTM (GTM-KHK2QTD6) remains always-on in index.html — do not remove
- Do NOT alter ContactForm UI layout, validation logic, success states, or UTM tracking
- Do NOT alter CookieConsent banner UI/copy or Privacy Policy link
- reCAPTCHA loads regardless of consent (it's a functional/security cookie, like GTM)
- All changes must be backward-compatible with existing localStorage consent data

---

## Change 1: Remove Hardcoded GA4 Script from index.html

**What to remove:** Lines 45-52 (GA4 script block)
```html
<!-- Google Analytics (GA4) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-P6MM594ZGJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-P6MM594ZGJ');
</script>
```

**Why:** GA4 will load dynamically only when user consents to analytics, respecting the cookie banner choice.

**Keep unchanged:**
- Lines 37-43: GTM initialization (always-on)
- Lines 93-96: GTM noscript fallback (always-on)
- All SEO meta tags and structured data (lines 1-35, 54-89)

---

## Change 2: Update CookieConsent.tsx — Add Dynamic GA4 Loading & Export Helper

### What changes:

**A) Add exports for use by other components:**
- Export `getStoredConsent()` function so other components (e.g., App.tsx) can check consent status
- Export `CONSENT_KEY` constant for consistency

**B) Create dynamic GA4 injection logic:**
- In the `saveConsent()` function (lines 36-45), after saving consent to localStorage, trigger GA4 loading if `analytics === true`
- Load the GA4 script dynamically using a helper function `injectGA4()` that:
  - Creates and appends two script tags to the document head
  - First script: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-P6MM594ZGJ"></script>`
  - Second script: initializes gtag with the config command
  - Uses Measurement ID: `G-P6MM594ZGJ`

**C) Check consent on mount:**
- On component mount (useEffect, lines 27-34), if stored consent exists AND `analytics === true`, inject GA4 immediately
- This ensures GA4 loads on subsequent visits when user has already consented

**D) Do NOT change:**
- Banner UI, text, or styling (lines 52-84)
- Button labels ("Accept All", "Necessary Only")
- Privacy Policy link (line 61)
- Consent state shape (type ConsentState, lines 6-11)
- Banner visibility logic (line 50, 31)
- Branding, colors, or responsive layout

### Technical implementation details:

```typescript
// Export these for use by other components
export { CONSENT_KEY, getStoredConsent };

// Add this helper function before the component
const injectGA4 = () => {
  if (typeof window === 'undefined') return;
  
  // First script: load gtag library
  const script1 = document.createElement('script');
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-P6MM594ZGJ';
  script1.async = true;
  document.head.appendChild(script1);
  
  // Second script: initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-P6MM594ZGJ');
  `;
  document.head.appendChild(script2);
};

// Inside CookieConsent component, modify saveConsent():
const saveConsent = (analytics: boolean, marketing: boolean) => {
  const consent: ConsentState = {
    functional: true,
    analytics,
    marketing,
    timestamp: Date.now(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  
  // Inject GA4 if analytics consent is granted
  if (analytics) {
    injectGA4();
  }
  
  setVisible(false);
};

// In useEffect, check if consent already exists with analytics enabled
useEffect(() => {
  const consent = getStoredConsent();
  if (!consent) {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  } else if (consent.analytics) {
    // If user previously consented to analytics, load GA4
    injectGA4();
  }
}, []);
```

---

## Change 3: Integrate reCAPTCHA v2 Invisible into ContactForm.tsx

### Prerequisites (before code changes):
- **Secret key** must be stored as a secure backend secret: `RECAPTCHA_SECRET_KEY` = `6LeyLOIrAAAAAM4IPiJxt2cR-OQiqGV0jTS71YCY`
- **Site key** will be used client-side: `6LeyLOIrAAAAAO5mcC_IVQiEBRO1tUhmhuitZzaY`
- **Backend verification function** must be created as an edge function (Lovable Cloud function) to verify tokens server-side

### What to add to ContactForm.tsx:

**A) Load reCAPTCHA script dynamically (unconditional, always loads):**
- Add useEffect hook on mount that injects the reCAPTCHA library script
- Script source: `https://www.google.com/recaptcha/api.js`
- Do NOT add to index.html — load only when ContactForm component mounts

**B) Execute reCAPTCHA challenge on form submit:**
- In `onSubmit()` handler, before calling `supabase.from('contact_submissions').insert()`:
  - Call `window.grecaptcha.execute()` with site key `6LeyLOIrAAAAAO5mcC_IVQiEBRO1tUhmhuitZzaY`
  - Capture the returned token (Promise)
  - Add token to the form data being sent to the database

**C) Send token to backend verification function:**
- Create a new field in the form data: `recaptcha_token: string`
- Before inserting to database, call an edge function (backend function) to verify the token
  - Function should accept: `{ token: string }`
  - Function calls Google's verification API: `https://www.google.com/recaptcha/api/siteverify`
  - If verification fails (score < 0.5 or error), return error and prevent form submission
  - If verification succeeds, return success and allow form submission to proceed

**D) Error handling:**
- If reCAPTCHA fails, show toast error: "Security verification failed. Please try again."
- If backend verification fails, show existing toast error message

**E) Do NOT change:**
- Form field layout, labels, or placeholder text (lines 136-283)
- Validation logic or Zod schema (lines 21-37)
- Success state UI or animations (lines 113-132)
- UTM parameter capture (lines 46-58, 64, 75-77)
- Supabase insert structure (lines 83-99)
- Button styling, loading states, or disabled logic (lines 269-283)
- Privacy Policy link or consent text (lines 285-291)

### Technical implementation outline:

```typescript
// Add to imports
import { useEffect } from "react";

// Add useEffect for reCAPTCHA script loading
useEffect(() => {
  // Load reCAPTCHA script dynamically
  const script = document.createElement('script');
  script.src = 'https://www.google.com/recaptcha/api.js';
  script.async = true;
  document.head.appendChild(script);
}, []);

// Modify onSubmit handler
const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  
  // Execute reCAPTCHA challenge
  let recaptchaToken: string;
  try {
    recaptchaToken = await window.grecaptcha.execute(
      '6LeyLOIrAAAAAO5mcC_IVQiEBRO1tUhmhuitZzaY',
      { action: 'submit' }
    );
  } catch (error) {
    toast.error("Security verification failed. Please try again.");
    setIsSubmitting(false);
    return;
  }
  
  // Call backend verification function (edge function)
  // This function will validate the token with Google
  // If invalid, it will throw/return error
  
  // If verification succeeds, proceed with database insert
  const { error } = await supabase.from('contact_submissions').insert({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone,
    city: data.city,
    service_type: data.serviceType,
    message: data.message,
    source: data.source || null,
    utm_source: data.utm_source || null,
    utm_medium: data.utm_medium || null,
    utm_campaign: data.utm_campaign || null,
    utm_term: data.utm_term || null,
    utm_content: data.utm_content || null,
    landing_page: data.landing_page || null,
    user_agent: navigator.userAgent,
    recaptcha_token: recaptchaToken, // Add token to record
  });

  if (error) {
    toast.error("Something went wrong. Please try again or call us directly.");
    setIsSubmitting(false);
    return;
  }
  
  setIsSubmitting(false);
  setIsSubmitted(true);
  toast.success("Thank you! We'll be in touch within 24 hours.");
  reset();
};
```

---

## Change 4: Create Backend Edge Function for reCAPTCHA Verification

**File location:** `supabase/functions/verify-recaptcha/index.ts`

**Function responsibilities:**
- Accept POST request with `{ token: string }`
- Call Google's reCAPTCHA verification API with secret key (from secure backend secret)
- Return success/failure based on verification result
- Throw error if verification fails (score < 0.5, or invalid response)

**CORS:** Enable (required for browser fetch from ContactForm)

**Authentication:** `verify_jwt = false` (allow unauthenticated calls from frontend form)

---

## Change 5: Update ContactForm to Store reCAPTCHA Token in Database

**File location:** `src/pages/` (any forms that use ContactForm, or if a separate EstimateForm exists)

**Action:** Ensure the form can optionally store the `recaptcha_token` in the database record

**Database schema:** The `contact_submissions` table should have an optional `recaptcha_token` column (text, nullable) to store the token for audit/troubleshooting purposes

---

## Change 6: Update App.tsx (Optional but Recommended)

**Purpose:** Load GA4 on app mount if user already consented in previous sessions

**Action:** Import and check `getStoredConsent()` from CookieConsent in App.tsx, and if `analytics === true`, call `injectGA4()` immediately

**Alternative:** CookieConsent's useEffect will handle this automatically when component mounts, so this change is optional

---

## Testing Checklist

After implementation, verify:

1. **GA4 Consent Gating:**
   - On first visit, GA4 script should NOT load until user clicks "Accept All"
   - After "Accept All", GA4 script should load immediately
   - On subsequent visits (with consent stored), GA4 should load on page load
   - After clearing localStorage and selecting "Necessary Only", GA4 should NOT load

2. **reCAPTCHA Integration:**
   - reCAPTCHA script loads when ContactForm component mounts
   - Form submission triggers reCAPTCHA invisible challenge (no visible badge)
   - Backend verification function receives token and validates correctly
   - If verification fails, form shows error toast and does NOT submit
   - If verification succeeds, form submits normally and shows success state
   - reCAPTCHA token is stored in database (optional audit trail)

3. **GTM & Meta Pixel (preparation):**
   - GTM script continues to load always (no change)
   - Meta Pixel will be implemented similarly to GA4 once Pixel ID is provided (gated by marketing consent)

4. **Form Functionality (no regression):**
   - All existing form fields work as before
   - Validation errors display correctly
   - UTM parameters are captured and stored
   - Success message appears after successful submission
   - "Submit Another Request" button resets form

5. **Privacy & Compliance:**
   - Cookie banner displays on first visit
   - Privacy Policy link is accessible
   - Consent state persists across sessions
   - User can select "Necessary Only" without analytics/marketing loading

---

## Files to Modify

| File | Action | Priority |
|------|--------|----------|
| `index.html` | Remove hardcoded GA4 script (lines 45-52) | High |
| `src/components/CookieConsent.tsx` | Add GA4 dynamic loading, export helpers | High |
| `src/components/forms/ContactForm.tsx` | Add reCAPTCHA script load & verification | High |
| `supabase/functions/verify-recaptcha/index.ts` | Create new backend function | High |
| Database schema | Add optional `recaptcha_token` column | Medium |
| `src/App.tsx` | Optional: check consent on app mount | Low |

---

## Notes on Phasing (if needed)

This plan can be executed in phases:

**Phase 1 (Critical):** Remove GA4 from index.html, add consent-gated loading to CookieConsent, test GA4 gating
**Phase 2 (Security):** Integrate reCAPTCHA into ContactForm, create backend verification function, test form submission
**Phase 3 (Analytics):** Meta Pixel implementation (once Pixel ID is provided)
**Phase 4 (Audit):** Add reCAPTCHA token storage to database if audit trail desired

