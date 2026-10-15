import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { EnquiryConversion } from "@/components/enquiry-conversion";
import { BOOKING_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Thank you | Elvina",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Thank you"
        title="We've got your enquiry."
        description="The team will be in touch soon. If you'd like to lock in a table in the meantime, you can book online or give us a call on 02 8926 2340."
      />
      <section>
        <div className="container" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-tan">
            Book a Table
          </a>
          <Link href="/" className="btn btn-dark">
            Back to home
          </Link>
        </div>
      </section>
      <EnquiryConversion />
      <Footer />
    </>
  );
}
