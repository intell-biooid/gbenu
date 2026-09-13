import { SITE } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="pattern-strip" aria-hidden="true" />
      <div className="container footer__inner">
        <span>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </span>
        <span>{SITE.tagline}</span>
      </div>
    </footer>
  );
}
