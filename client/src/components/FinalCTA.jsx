import { SITE } from "../data";

export default function FinalCTA() {
  return (
    <section className="cta">
      <div className="pattern-strip" aria-hidden="true" />
      <div className="container cta__inner">
        <h2>Join us in closing Africa's digital literacy gap.</h2>
        <p>
          Whether you're a school, an NGO, an investor, or a future Gbénu Mentor
          — there's a place for you.
        </p>
        <div className="cta__actions">
          <a
            className="btn btn--primary"
            href={SITE.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try the Prototype
          </a>
          <a className="btn btn--ghost btn--on-dark" href="#contact">
            Contact the Team
          </a>
        </div>
      </div>
    </section>
  );
}
