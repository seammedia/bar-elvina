"use client";

import { useEffect, useRef, useState } from "react";
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

  return (
    <div className="site-popup" onMouseDown={(e) => e.target === e.currentTarget && dismiss("popup_close")}>
      <div
        className={`site-popup-panel${POPUP.image ? " has-image" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-popup-title"
      >
        <button ref={closeRef} type="button" className="site-popup-close" onClick={() => dismiss("popup_close")}>
          Close
        </button>
        {POPUP.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="site-popup-image" src={POPUP.image} alt={POPUP.imageAlt} />
        )}
        <div className="site-popup-body">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="site-popup-mermaid" src="/logos/elvina-mermaid-white.svg" alt="" aria-hidden="true" />
          {POPUP.eyebrow && <span className="site-popup-eyebrow">{POPUP.eyebrow}</span>}
          <h2 id="site-popup-title">{POPUP.title}</h2>
          <p>{POPUP.body}</p>
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
        </div>
      </div>
    </div>
  );
}
