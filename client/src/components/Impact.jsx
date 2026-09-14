import { MARKET, GROWTH } from "../data";

export default function Impact() {
  return (
    <section id="impact" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Market Opportunity & Impact</h2>

        <div className="stat-bento">
          <div className="stat-bento__highlight">
            <div className="stat-card__value">{MARKET.tam.value}</div>
            <p className="stat-card__label">{MARKET.tam.label}</p>
            <span className="stat-card__source">{MARKET.tam.detail}</span>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">{MARKET.sam.value}</div>
            <p className="stat-card__label">{MARKET.sam.label}</p>
            <span className="stat-card__source">{MARKET.sam.detail}</span>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">{MARKET.som.value}</div>
            <p className="stat-card__label">{MARKET.som.label}</p>
            <span className="stat-card__source">{MARKET.som.detail}</span>
          </div>
        </div>

        <h3 className="section__subtitle">
          Year 1 Addressable Students 2 Countries
        </h3>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Primary</th>
                <th>Secondary</th>
                <th>Independent</th>
              </tr>
            </thead>
            <tbody>
              {MARKET.countries.map((c) => (
                <tr key={c.country}>
                  <td>{c.country}</td>
                  <td>{c.primary}</td>
                  <td>{c.secondary}</td>
                  <td>{c.independent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="section__subtitle">Projected Growth</h3>
        <div className="growth-bento">
          {GROWTH.map((g, i) => (
            <div
              key={g.year}
              className={`growth-card ${i === 2 ? "growth-card--highlight" : ""}`}
            >
              <h4>{g.year}</h4>
              <p>
                <strong>{g.learners}</strong> learners
              </p>
              <p>
                <strong>{g.schools}</strong> schools
              </p>
              <p>
                <strong>{g.revenue}</strong>
              </p>
            </div>
          ))}
        </div>
        <p className="section__note">
          Figures are projections based on the pilot model, not measured
          results.
        </p>
      </div>
    </section>
  );
}
