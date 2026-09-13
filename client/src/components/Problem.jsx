import { PROBLEM_STATS } from "../data";

export default function Problem() {
  const [highlight, ...rest] = PROBLEM_STATS;
  return (
    <section id="problem" className="section">
      <div className="container">
        <h2 className="section__title">The Problem</h2>
        <p className="section__lead">
          Millions of children, youth, and adults across Sub-Saharan Africa
          finish school or never had the chance to without basic digital
          literacy. Even with a smartphone in hand, most can't write a
          professional email, build a CV, spot a phishing attempt, or use AI
          with a critical mind.
        </p>

        <div className="stat-bento">
          <div className="stat-bento__highlight">
            <div className="stat-card__value">{highlight.value}</div>
            <p className="stat-card__label">{highlight.label}</p>
            <span className="stat-card__source">{highlight.source}</span>
          </div>
          {rest.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-card__value">{stat.value}</div>
              <p className="stat-card__label">{stat.label}</p>
              <span className="stat-card__source">{stat.source}</span>
            </div>
          ))}
        </div>

        <p className="section__note">
          NGOs, foundations, and governments (UNICEF, UNESCO, MIT, Room to Read,
          Orange, MasterCard Foundation) are already moving but institutional
          rollout is slow. Learners outside those programs, out-of-system
          adults, and parents who don't want to wait are left behind. That's the
          gap Gbénu fills.
        </p>
      </div>
    </section>
  );
}
