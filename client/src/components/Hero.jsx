import { MapPin, Users, Globe, Sparkles } from "lucide-react";
import { IMAGES } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            Digital platform for African learners.
          </h1>
          <p className="hero__subtitle">
            Gbénu gives learners of any age from complete beginners to job
            seekers personalized, AI powered digital literacy training in over 8
            African languages, accessible offline from any phone, tablet, or
            computer.
          </p>
        </div>

        <div className="hero__image">
          <div className="hero__blob" aria-hidden="true" />
          <img src={IMAGES.hero} alt="A Gbénu learner working on her laptop" />
        </div>
      </div>

      <div className="container">
        <div className="hero-stats">
          <div className="hero-stats__item">
            <MapPin size={20} strokeWidth={1.75} />
            <div>
              <strong>2</strong>
              <span>Pilot countries</span>
            </div>
          </div>
          <div className="hero-stats__item">
            <Users size={20} strokeWidth={1.75} />
            <div>
              <strong>16M+</strong>
              <span>Addressable learners, Year 1</span>
            </div>
          </div>
          <div className="hero-stats__item">
            <Globe size={20} strokeWidth={1.75} />
            <div>
              <strong>8+</strong>
              <span>Languages</span>
            </div>
          </div>
          <div className="hero-stats__item">
            <Sparkles size={20} strokeWidth={1.75} />
            <div>
              <strong>MVP</strong>
              <span>Live &amp; field-tested</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pattern-strip" aria-hidden="true" />
    </section>
  );
}
