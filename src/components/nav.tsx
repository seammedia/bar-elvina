import { BOOKING_URL } from "@/lib/config";

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-brand">
          <img src="/logos/elvina-mermaid-sundial.svg" alt="Elvina" className="nav-logo" />
        </a>
        <nav className="nav-links">
          <a href="/menu">Menu</a>
          <span className="nav-sep">/</span>
          <a href="/functions">Functions</a>
          <span className="nav-sep">/</span>
          <a href="/whats-on">What&apos;s On</a>
          <span className="nav-sep">/</span>
          <a href="/bottomless">Bottomless</a>
          <span className="nav-sep">/</span>
          <a href="/about">About</a>
        </nav>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-tan nav-cta"
        >
          Book
        </a>
      </div>
    </header>
  );
}
