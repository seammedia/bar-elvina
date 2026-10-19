"use client";

import { useEffect } from "react";
import { ENQUIRY_FLAG, trackEnquiry } from "@/lib/tracking";

// Counts the enquiry conversion on /thanks, once, and only when this tab submitted a form.
// The Google tag and Meta pixel load after hydration, so wait for both (up to 10 seconds) before
// firing; if one is blocked, the other still counts once the wait runs out.
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
      const w = window as unknown as { gtag?: unknown; fbq?: unknown };
      if ((w.gtag && w.fbq) || tries > 50) {
        window.clearInterval(timer);
        try {
          sessionStorage.removeItem(ENQUIRY_FLAG);
        } catch {}
        trackEnquiry(form as string);
      }
    }, 200);
    return () => window.clearInterval(timer);
  }, []);
  return null;
}
