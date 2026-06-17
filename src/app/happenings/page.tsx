import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Happenings } from "@/components/happenings";
import { Arrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Happenings — Elvina",
  description:
    "What's on this week at Elvina. Happy hours, family dinners, lamb shoulders, Sunday chook.",
};

export default function HappeningsPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="What's On"
        title="Weekly happenings."
        description="A reason for every night of the week. Pull up a chair, find your spot."
      />
      <Happenings />

      <section className="cta-strip">
        <div className="container">
          <h2>Lock in a sitting.</h2>
          <p>
            Most nights have walk-ins at the bar. For tables, the booking
            form is the fastest way in.
          </p>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-tan">Book a Table <Arrow /></a>
            <a href="/menu" className="btn btn-outline-light">View Menu</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
