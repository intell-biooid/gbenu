import { useState } from "react";
import { NAV_LINKS, SITE } from "../data";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner container">
        <button className="header__logo" onClick={() => handleNavClick("home")}>
          {SITE.name}
        </button>

        <nav className={`header__nav ${open ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="header__link"
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="header__actions">
          <a
            className="btn btn--primary btn--sm"
            href={SITE.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the Prototype
          </a>
          <button
            className="header__burger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
