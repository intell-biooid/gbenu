import {
  Languages,
  ListChecks,
  BarChart3,
  CalendarClock,
  Wallet,
  MessageCircle,
  Keyboard,
  Bot,
  Award,
} from "lucide-react";
import { FEATURES, CURRICULUM, IMAGES } from "../data";

const ICONS = {
  languages: Languages,
  "list-checks": ListChecks,
  "bar-chart": BarChart3,
  calendar: CalendarClock,
  wallet: Wallet,
  message: MessageCircle,
  keyboard: Keyboard,
  bot: Bot,
  award: Award,
};

export default function Solution() {
  return (
    <section id="solution" className="section">
      <div className="container">
        <h2 className="section__title">The Solution</h2>
        <p className="section__lead">
          Gbénu is an AI-powered digital literacy platform not just a course
          library. Where a single teacher can't mentor thousands of learners
          individually, Gbénu's AI adapts content to each learner, detects
          difficulties, answers in real time, and guides progressive mastery of
          essential digital skills.
        </p>

        <div className="bento">
          <div className="bento__cell bento__cell--image">
            <img
              src={IMAGES.solution}
              alt="A learner chatting with the Gbénu AI tutor"
            />
          </div>
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon];
            const wide = f.icon === "bot";
            const accent = f.icon === "languages";
            return (
              <div
                key={f.title}
                className={`feature-tile ${wide ? "feature-tile--wide" : ""} ${accent ? "feature-tile--accent" : ""}`}
              >
                <span className="feature-tile__icon">
                  {Icon && <Icon size={22} strokeWidth={1.75} />}
                </span>
                <h3 className="feature-tile__title">{f.title}</h3>
                <p className="feature-tile__text">{f.text}</p>
              </div>
            );
          })}
        </div>

        <h3 className="section__subtitle">Curriculum Path</h3>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Main Content</th>
              </tr>
            </thead>
            <tbody>
              {CURRICULUM.map((row) => (
                <tr key={row.level}>
                  <td>{row.level}</td>
                  <td>{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
