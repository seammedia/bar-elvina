export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-brand">
          <img src="/logos/elvina-mermaid-sundial.svg" alt="Elvina" className="nav-logo" />
        </a>
        <nav className="nav-links">
          <a href="/menu">Menu</a>
          <a href="/happenings">Happenings</a>
          <a href="/bottomless-lunch">Bottomless</a>
          <a href="/about">About</a>
          <a href="/contact">Visit</a>
        </nav>
        <a href="/contact" className="btn btn-tan nav-cta">
          Book
        </a>
      </div>
    </header>
  );
}
