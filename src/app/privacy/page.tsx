import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { BUSINESS } from "@/lib/config";

// Privacy notice, 28 Oct 2026. Meta's Business Tools Terms expect one wherever the pixel runs.
// If a tracker, form provider or booking system changes, update the matching section here.
export const metadata: Metadata = {
  title: "Privacy Policy | Elvina",
  description:
    "How Elvina in Avalon Beach collects, uses and looks after your personal information, including cookies, analytics and advertising.",
};

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function PrivacyPage() {
  const email = <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>;

  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Privacy"
        title="Privacy policy"
        description="How we collect, use and look after your personal information. Last updated 28 October 2026."
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="legal-prose">
            <h2>Who we are</h2>
            <p>
              Elvina (also known as Bar Elvina) is a restaurant and bar at {BUSINESS.address}. In
              this policy, &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; mean Elvina. If
              you have a question about your personal information, email {email} or call{" "}
              <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a>.
            </p>

            <h2>What we collect</h2>
            <ul>
              <li>
                <strong>Enquiries.</strong>{" "}When you send an enquiry through our website, we collect
                what you enter, such as your name, email address, phone number, event date, number of
                guests and your message.
              </li>
              <li>
                <strong>Bookings.</strong>{" "}Table and event bookings are made through SevenRooms, our
                booking system. It collects the details you enter when you book, such as your name,
                contact details, party size and any dietary or special requests.
              </li>
              <li>
                <strong>Gift vouchers.</strong>{" "}Vouchers are bought through Square, which handles your
                payment. We don&apos;t see your full card details.
              </li>
              <li>
                <strong>Calls and emails.</strong>{" "}If you call or email us, we keep the details you
                give us so we can help.
              </li>
              <li>
                <strong>Website visits.</strong>{" "}When you visit our website, we and our analytics and
                advertising partners collect information about your visit, such as the pages you view,
                the site that referred you, your device and browser, and your approximate location. See
                &ldquo;Cookies, analytics and advertising&rdquo; below.
              </li>
            </ul>

            <h2>How we use it</h2>
            <p>
              We use your personal information to reply to your enquiries, take and manage bookings and
              events, run the venue, improve our website, and measure and improve our advertising. If
              you&apos;ve agreed to hear from us, we may also send you news and offers, and every
              message includes a way to unsubscribe. We don&apos;t sell your personal information.
            </p>

            <h2>Cookies, analytics and advertising</h2>
            <p>
              Our website uses Google Analytics and Google Ads conversion tracking (provided by Google)
              and the Meta Pixel (provided by Meta, which runs Facebook and Instagram). These tools use
              cookies and similar technologies to show us how people find and use our website, to count
              the enquiries and booking clicks that come from our ads, and to show our ads to people who
              have visited our website. They may collect information such as your IP address, device
              identifiers and the pages you visit. Google and Meta handle this information under their
              own privacy policies.
            </p>
            <p>You can control this:</p>
            <ul>
              <li>Block or delete cookies in your browser settings.</li>
              <li>
                Opt out of Google Analytics with{" "}
                <External href="https://tools.google.com/dlpage/gaoptout">
                  Google&apos;s browser add-on
                </External>
                .
              </li>
              <li>
                Manage the ads Google shows you in{" "}
                <External href="https://myadcenter.google.com">My Ad Center</External>.
              </li>
              <li>Manage the ads Meta shows you in your Facebook or Instagram ad preferences.</li>
            </ul>
            <p>
              Our website also uses your browser&apos;s storage to remember that you&apos;ve closed our
              pop-up and to confirm that an enquiry has been sent. This information stays in your
              browser.
            </p>

            <h2>Who we share it with</h2>
            <p>
              We share personal information only with the providers that help us run the venue and this
              website: SevenRooms (bookings), FormSubmit (delivers website enquiries to our inbox),
              Square (gift vouchers), Google and Meta (analytics and advertising), Vercel (website
              hosting) and the agency that manages our website and advertising. Some of these providers
              store or process information outside Australia, including in the United States. We may
              also share information where the law requires it.
            </p>

            <h2>Keeping it safe</h2>
            <p>
              We take reasonable steps to protect your personal information from misuse, loss and
              unauthorised access, and we keep it only for as long as we need it.
            </p>

            <h2>Access and correction</h2>
            <p>
              You can ask to see or correct the personal information we hold about you by emailing{" "}
              {email}.
            </p>

            <h2>Questions and complaints</h2>
            <p>
              If you have a concern about how we&apos;ve handled your personal information, please
              contact us first and we&apos;ll do our best to put it right. If you&apos;re not satisfied
              with our response, you can contact the{" "}
              <External href="https://www.oaic.gov.au">
                Office of the Australian Information Commissioner
              </External>
              .
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The date at the top of this page shows when
              it last changed.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
