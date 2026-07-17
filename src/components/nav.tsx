"use client";

import { useState } from "react";
import { BOOKING_URL, GIFT_VOUCHER_URL } from "@/lib/config";

const LINKS = [
  { href: "/menu", label: "Menu" },
  { href: "/functions", label: "Events & Weddings" },
  { href: "/whats-on", label: "What's On" },
  { href: "/about", label: "Our Story" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <img src="/logos/elvina-mermaid-sundial.svg" alt="Elvina" className="nav-logo" />
        </a>

        <nav className="nav-links">
          <a href="/menu">Menu</a>
          <span className="nav-sep">/</span>
          <a href="/functions">Events &amp; Weddings</a>
          <span className="nav-sep">/</span>
          <a href="/whats-on">What&apos;s On</a>
          <span className="nav-sep">/</span>
          <a href="/about">Our Story</a>
          <span className="nav-sep">/</span>
          <a
            href={GIFT_VOUCHER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-gift"
          >
            Gift Vouchers
          </a>
        </nav>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-tan nav-cta"
        >
          Book
        </a>

        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile${open ? " is-open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href={GIFT_VOUCHER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-mobile-gift"
          onClick={() => setOpen(false)}
        >
          Gift Vouchers
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-tan nav-mobile-cta"
          onClick={() => setOpen(false)}
        >
          Book a Table
        </a>
      </div>
    </header>
  );
}
