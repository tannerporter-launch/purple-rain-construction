import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import AnimatedCheckmark from "@/components/ui/AnimatedCheckmark";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  city: z.string().min(1, "Please select your city"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Please provide more details about your project").max(1000),
  source: z.string().optional(),
  // Hidden UTM tracking fields
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  landing_page: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  defaultService?: string;
  className?: string;
}

// Helper to get UTM params from URL
const getUtmParams = () => {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
    landing_page: window.location.pathname,
  };
};

const ContactForm = ({ defaultService, className = "" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const utmParams = getUtmParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serviceType: defaultService || "",
      ...utmParams,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
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

  if (isSubmitted) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="flex justify-center mb-6">
          <AnimatedCheckmark size={80} />
        </div>
        <h3 className="text-2xl font-bold mb-2 animate-fade-in">Thank You!</h3>
        <p className="text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          We've received your request and will contact you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          variant="outline"
          className="animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            {...register("firstName")}
            placeholder="John"
            className={errors.firstName ? "border-destructive" : ""}
          />
          {errors.firstName && (
            <p className="text-sm text-destructive">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            {...register("lastName")}
            placeholder="Smith"
            className={errors.lastName ? "border-destructive" : ""}
          />
          {errors.lastName && (
            <p className="text-sm text-destructive">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john@example.com"
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="(541) 555-0123"
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Select onValueChange={(value) => setValue("city", value)}>
            <SelectTrigger className={errors.city ? "border-destructive" : ""}>
              <SelectValue placeholder="Select your city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sunriver">Sunriver</SelectItem>
              <SelectItem value="bend">Bend</SelectItem>
              <SelectItem value="redmond">Redmond</SelectItem>
              <SelectItem value="la-pine">La Pine</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.city && (
            <p className="text-sm text-destructive">{errors.city.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type *</Label>
          <Select
            defaultValue={defaultService}
            onValueChange={(value) => setValue("serviceType", value)}
          >
            <SelectTrigger className={errors.serviceType ? "border-destructive" : ""}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="deck">Deck Building</SelectItem>
              <SelectItem value="deck-repair">Deck Repair</SelectItem>
              <SelectItem value="remodel-kitchen">Kitchen Remodel</SelectItem>
              <SelectItem value="remodel-bath">Bathroom Remodel</SelectItem>
              <SelectItem value="remodel-whole">Whole Home Remodel</SelectItem>
              <SelectItem value="new-construction">New Construction</SelectItem>
              <SelectItem value="snow-removal">Snow Removal</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.serviceType && (
            <p className="text-sm text-destructive">{errors.serviceType.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your project - size, timeline, any specific requirements..."
          rows={5}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="source">How did you hear about us?</Label>
        <Select onValueChange={(value) => setValue("source", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="google">Google Search</SelectItem>
            <SelectItem value="referral">Referral</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="drive-by">Saw Your Work</SelectItem>
            <SelectItem value="repeat">Previous Customer</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Request a Quote"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </a>
        . We'll respond within 24 hours.
      </p>
    </form>
  );
};

export default ContactForm;
