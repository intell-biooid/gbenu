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
        <div>
          <button
            className="header__logo"
            onClick={() => handleNavClick("home")}
          >
            <img
              src="https://res.cloudinary.com/jit57goy/image/upload/v1789331287/yem.jpg"
              alt={SITE.name}
              className="header__logo-img"
            />
          </button>
        </div>

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
