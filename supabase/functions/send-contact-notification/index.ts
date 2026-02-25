import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const RECIPIENTS = [
  "admin@purpleraincs.com",
  "kela@purpleraincs.com",
  "nicholas@purpleraincs.com",
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { firstName, lastName, email, phone, city, serviceType, message, source } = await req.json();

    const serviceLabels: Record<string, string> = {
      "deck": "Deck Building",
      "deck-repair": "Deck Repair",
      "remodel-kitchen": "Kitchen Remodel",
      "remodel-bath": "Bathroom Remodel",
      "remodel-whole": "Whole Home Remodel",
      "new-construction": "New Construction",
      "snow-removal": "Snow Removal",
      "other": "Other",
    };

    const serviceLabel = serviceLabels[serviceType] || serviceType;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${firstName} ${lastName}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">City:</td><td>${city}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td>${serviceLabel}</td></tr>
          ${source ? `<tr><td style="padding: 8px 0; font-weight: bold;">Source:</td><td>${source}</td></tr>` : ""}
        </table>
        <div style="margin-top: 16px; padding: 12px; background: #f4f4f5; border-radius: 8px;">
          <p style="font-weight: bold; margin: 0 0 8px 0;">Project Details:</p>
          <p style="margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #888; font-size: 12px; margin-top: 20px;">
          This message was sent via the Purple Rain Construction website contact form.
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Purple Rain Construction <notifications@purpleraincs.com>",
        to: RECIPIENTS,
        subject: `New Quote Request: ${serviceLabel} — ${firstName} ${lastName}`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", result);
      return new Response(JSON.stringify({ error: "Failed to send email", details: result }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending notification:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
