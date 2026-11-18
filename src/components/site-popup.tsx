"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING_URL, POPUP } from "@/lib/config";
import { trackPopup } from "@/lib/tracking";

// Site-wide pop-up, like the Merci Group "Dunes" page Lucas pointed to: opens shortly after the page loads,
// closes with the Close button, Escape or a click outside, and stays hidden for POPUP.hideForDays once closed.
const STORAGE_KEY = `elvina_popup:${POPUP.id}`;
const HIDDEN_ON = ["/thanks"];

export function SitePopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<Element | null>(null);

  useEffect(() => {
    if (!POPUP.enabled || HIDDEN_ON.includes(pathname)) return;
    try {
      const closedAt = Number(localStorage.getItem(STORAGE_KEY) || 0);
      if (closedAt && Date.now() - closedAt < POPUP.hideForDays * 86400000) return;
    } catch {}
    const timer = window.setTimeout(() => {
      lastFocus.current = document.activeElement;
      setOpen(true);
      trackPopup("popup_view", POPUP.id);
    }, POPUP.delayMs);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss("popup_close");
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  });

  function dismiss(action: "popup_close" | "popup_book" | "popup_whats_on") {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
    trackPopup(action, POPUP.id);
    setOpen(false);
    (lastFocus.current as HTMLElement | null)?.focus?.();
  }

  if (!open) return null;

  // The close button sits on the dialog, outside the scrolling panel, so it never scrolls away on a phone
  // (Lucas, 18 Nov 2026: "the pop up is hard to close on mobile"). onClick, not onMouseDown, because iOS
  // doesn't send mouse events to a plain div unless it is clickable (cursor: pointer in the CSS).
  return (
    <div className="site-popup" onClick={(e) => e.target === e.currentTarget && dismiss("popup_close")}>
      <div className="site-popup-dialog" role="dialog" aria-modal="true" aria-labelledby="site-popup-title">
        <button
          ref={closeRef}
          type="button"
          className="site-popup-close"
          aria-label="Close"
          onClick={() => dismiss("popup_close")}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className={`site-popup-panel${POPUP.image ? " has-image" : ""}`}>
        {POPUP.image && (
          <Image
            className="site-popup-image"
            src={POPUP.image}
            alt={POPUP.imageAlt}
            width={2000}
            height={1333}
            sizes="(max-width: 600px) 100vw, 440px"
          />
        )}
        <div className="site-popup-body">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="site-popup-mermaid" src="/logos/elvina-mermaid-white.svg" alt="" aria-hidden="true" />
          {POPUP.eyebrow && <span className="site-popup-eyebrow">{POPUP.eyebrow}</span>}
          {POPUP.features
            .filter((f) => Date.now() < new Date(f.until).getTime())
            .map((f) => (
              <div className="site-popup-feature" key={f.title}>
                <span className="site-popup-feature-label">{f.label}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn site-popup-book"
                  onClick={() => dismiss("popup_book")}
                >
                  {f.cta}
                </a>
              </div>
            ))}
          <h2 id="site-popup-title">{POPUP.title}</h2>
          {POPUP.body && <p>{POPUP.body}</p>}
          {POPUP.days.length > 0 && (
            <ul className="site-popup-days" aria-label="What's on this week">
              {POPUP.days.map((d) => (
                <li key={d.day}>
                  <span className="site-popup-day">{d.day}</span>
                  <span className="site-popup-items">
                    {d.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </span>
                  <em>{d.open}</em>
                </li>
              ))}
            </ul>
          )}
          <div className="site-popup-actions">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn site-popup-book"
              onClick={() => dismiss("popup_book")}
            >
              Book a Table
            </a>
            <Link href="/whats-on" className="btn btn-outline-light" onClick={() => dismiss("popup_whats_on")}>
              What&apos;s On
            </Link>
          </div>
          {/* Second way out at the bottom, where a thumb reaches on a phone (Lucas, 18 Nov: the X sits too high). */}
          <button type="button" className="site-popup-dismiss" onClick={() => dismiss("popup_close")}>
            No thanks, close
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
