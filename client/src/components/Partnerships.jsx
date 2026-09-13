import { Handshake, Landmark } from "lucide-react";
import { PARTNERS } from "../data";

export default function Partnerships() {
  return (
    <section id="partnerships" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Partnerships & Ecosystem</h2>

        <h3 className="section__subtitle">Strategic Partners</h3>
        <div className="partner-grid">
          {PARTNERS.strategic.map((p) => (
            <div key={p.name} className="partner-card">
              <span className="partner-card__icon">
                <Handshake size={20} strokeWidth={1.75} />
              </span>
              <div>
                <h4>{p.name}</h4>
                <p>{p.role}</p>
                <span className="tag">{p.status}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section__subtitle">Financial Partners</h3>
        <div className="partner-grid">
          {PARTNERS.financial.map((p) => (
            <div key={p.name} className="partner-card">
              <span className="partner-card__icon">
                <Landmark size={20} strokeWidth={1.75} />
              </span>
              <div>
                <h4>{p.name}</h4>
                <p>{p.role}</p>
                <span className="tag">Potential</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
