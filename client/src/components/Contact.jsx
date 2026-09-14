import { Mail, MapPin } from "lucide-react";
import { SITE } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">Contact</h2>
        <p className="section__lead">
          Have a question, want to partner, or thinking about a pilot? Reach
          out.
        </p>
        <div className="contact-grid">
          <a className="contact-card" href={`mailto:${SITE.email}`}>
            <span className="contact-card__icon">
              <Mail size={20} strokeWidth={1.75} />
            </span>
            <div>
              <span className="contact-card__label">Email</span>
              <span className="contact-card__value">{SITE.email}</span>
            </div>
          </a>

          {/* <a
            className="contact-card"
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__icon">
              <Link2 size={20} strokeWidth={1.75} />
            </span>
            <div>
              <span className="contact-card__label">LinkedIn</span>
              <span className="contact-card__value">Gbénu</span>
            </div>
          </a>*/}
          <div className="contact-card">
            <span className="contact-card__icon">
              <MapPin size={20} strokeWidth={1.75} />
            </span>
            <div>
              <span className="contact-card__label">Location</span>
              <span className="contact-card__value">{SITE.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
