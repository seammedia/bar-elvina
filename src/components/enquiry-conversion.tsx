"use client";

import { useEffect } from "react";
import { ENQUIRY_FLAG, trackEnquiry } from "@/lib/tracking";

// Counts the enquiry conversion on /thanks, once, and only when this tab submitted a form.
// The Google tag loads after hydration, so wait for gtag before firing.
export function EnquiryConversion() {
  useEffect(() => {
    let form: string | null = null;
    try {
      form = sessionStorage.getItem(ENQUIRY_FLAG);
    } catch {}
    if (!form) return;
    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      if ((window as unknown as { gtag?: unknown }).gtag) {
        window.clearInterval(timer);
        try {
          sessionStorage.removeItem(ENQUIRY_FLAG);
        } catch {}
        trackEnquiry(form as string);
      } else if (tries > 50) {
        window.clearInterval(timer);
      }
    }, 200);
    return () => window.clearInterval(timer);
  }, []);
  return null;
}
