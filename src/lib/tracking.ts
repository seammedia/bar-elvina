// Google tag for elvina.com.au: Google Ads account 884-525-7356 (AW-18374239337) and
// GA4 property "Elvina Website" (559035682, Seam's GA account 318706947), web stream 16132420235.
// Added 15 Oct 2026. Both Ads conversion actions below were created as Secondary, so they are
// reported but not used for bidding until the plan is agreed with Lucas.
export const ADS_ID = "AW-18374239337";
export const GA4_ID = "G-05MV2W8KZ8";
export const ENQUIRY_LABEL = "-kBMCOr5wJ0dEOnIwrlE"; // "Enquiry form - elvina.com.au (Seam)"
export const BOOK_CLICK_LABEL = "OXWtCO35wJ0dEOnIwrlE"; // "Book click to SevenRooms - elvina.com.au (Seam)"

// Set when an enquiry form is submitted; read once on /thanks so the conversion only counts a
// submission that FormSubmit accepted and redirected back, never a direct visit to /thanks.
export const ENQUIRY_FLAG = "elvina_enquiry";

type Gtag = (...args: unknown[]) => void;
const gtag = (): Gtag | undefined =>
  typeof window !== "undefined" ? (window as unknown as { gtag?: Gtag }).gtag : undefined;

export function trackEnquiry(form: string) {
  const g = gtag();
  if (!g) return;
  g("event", "generate_lead", { form });
  g("event", "conversion", { send_to: `${ADS_ID}/${ENQUIRY_LABEL}`, value: 1.0, currency: "AUD" });
}

export function trackBookClick(page: string) {
  const g = gtag();
  if (!g) return;
  g("event", "book_click", { page });
  g("event", "conversion", { send_to: `${ADS_ID}/${BOOK_CLICK_LABEL}`, value: 1.0, currency: "AUD" });
}

export function trackContactClick(kind: "phone" | "email") {
  gtag()?.("event", kind === "phone" ? "phone_click" : "email_click");
}
