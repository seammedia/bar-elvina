import { BUSINESS } from "@/lib/config";

type Props = {
  subjects?: string[];
  defaultSubject?: string;
};

export function ContactForm({
  subjects = ["Booking enquiry", "Function enquiry", "Bottomless", "Press", "General enquiry"],
  defaultSubject = "Booking enquiry",
}: Props) {
  return (
    <form
      className="contact-form"
      action={`https://formsubmit.co/${BUSINESS.email}`}
      method="POST"
    >
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
      <div className="field">
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" defaultValue={defaultSubject}>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
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
