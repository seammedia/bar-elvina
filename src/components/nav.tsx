export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-brand">
          <span className="nav-brand-name">BAR ELVINA</span>
        </a>
        <nav className="nav-links">
          <a href="/menu">Menu</a>
          <a href="/bottomless-lunch">Bottomless Lunch</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <a href="/contact" className="btn btn-tan nav-cta">
          Book a Table
        </a>
      </div>
    </header>
  );
}
