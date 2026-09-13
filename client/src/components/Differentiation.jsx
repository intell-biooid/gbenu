import { COMPETITORS } from "../data";

const ICONS = {
  full: (
    <span className="dot dot--full" title="Fully satisfied">
      ●
    </span>
  ),
  partial: (
    <span className="dot dot--partial" title="Partially satisfied">
      ●
    </span>
  ),
  none: (
    <span className="dot dot--none" title="Not satisfied">
      ✕
    </span>
  ),
};

export default function Differentiation() {
  return (
    <section id="differentiation" className="section">
      <div className="container">
        <h2 className="section__title">Why Gbénu Is Different</h2>
        <p className="section__lead">
          Unlike international platforms built for already connected,
          already-literate users, Gbénu starts at true zero and guides learners
          to full digital mastery with content built for African realities.
        </p>

        <div className="table-wrap">
          <table className="table table--compare">
            <thead>
              <tr>
                <th>Criteria</th>
                {COMPETITORS.competitors.map((c) => (
                  <th
                    key={c.name}
                    className={c.highlight ? "is-highlight" : ""}
                  >
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPETITORS.criteria.map((criterion, i) => (
                <tr key={criterion}>
                  <td>{criterion}</td>
                  {COMPETITORS.competitors.map((c) => (
                    <td
                      key={c.name + criterion}
                      className={c.highlight ? "is-highlight" : ""}
                    >
                      {ICONS[c.scores[i]]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <h3 className="section__subtitle">Where We Stand Today</h3>
        <div className="swot-grid">
          <div className="swot-card swot-card--strength">
            <h4>Strengths</h4>
            <ul>
              {SWOT.strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="swot-card swot-card--weakness">
            <h4>Weaknesses</h4>
            <ul>
              {SWOT.weaknesses.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="swot-card swot-card--opportunity">
            <h4>Opportunities</h4>
            <ul>
              {SWOT.opportunities.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="swot-card swot-card--threat">
            <h4>Threats</h4>
            <ul>
              {SWOT.threats.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>*/}
      </div>
    </section>
  );
}
