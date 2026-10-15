"use client";

import { BUSINESS } from "@/lib/config";
import { ENQUIRY_FLAG } from "@/lib/tracking";

type Props = {
  subjects?: string[];
  defaultSubject?: string;
  eventFields?: boolean;
};

export function ContactForm({
  subjects = ["Booking enquiry", "Function enquiry", "Bottomless", "Press", "General enquiry"],
  defaultSubject = "Booking enquiry",
  eventFields = false,
}: Props) {
  // FormSubmit sends the visitor back to /thanks after it accepts the enquiry; the flag lets
  // that page count the conversion once, only for a real submission.
  const formName = eventFields ? "functions" : "contact";
  return (
    <form
      className="contact-form"
      action={`https://formsubmit.co/${BUSINESS.email}`}
      method="POST"
      onSubmit={() => {
        try {
          sessionStorage.setItem(ENQUIRY_FLAG, formName);
        } catch {}
      }}
    >
      <input type="hidden" name="_next" value={`https://elvina.com.au/thanks?form=${formName}`} />
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@email.com" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="phone">Mobile Number</label>
          <input
            id="phone"
            name="phone"
            type="text"
            inputMode="tel"
            required
            pattern="\+?[0-9 \(\)\-]{8,}"
            placeholder="04XX XXX XXX"
          />
        </div>
        {eventFields ? (
          <div className="field">
            <label htmlFor="event-date">Preferred Event Date</label>
            <input id="event-date" name="event_date" type="date" required />
          </div>
        ) : (
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" defaultValue={defaultSubject}>
              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      {eventFields && (
        <div className="field-row">
          <div className="field">
            <label htmlFor="guest-count">Guest Count</label>
            <input id="guest-count" name="guest_count" type="number" min="2" required placeholder="Number of guests" />
          </div>
          <div className="field">
            <label htmlFor="event-type">Event Type</label>
            <select id="event-type" name="event_type" defaultValue={defaultSubject}>
              {subjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required placeholder="Date, headcount, and anything we should know..." />
      </div>
      <button type="submit" className="btn btn-tan" style={{ alignSelf: "flex-start" }}>
        Send Message
      </button>
    </form>
  );
}
