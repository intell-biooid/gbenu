import { Smartphone, ListChecks, Bot, Award } from "lucide-react";
import { HOW_IT_WORKS } from "../data";

const ICONS = {
  smartphone: Smartphone,
  "list-checks": ListChecks,
  bot: Bot,
  award: Award,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section section--alt">
      <div className="container">
        <h2 className="section__title">How It Works</h2>
        <div className="steps">
          {HOW_IT_WORKS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <div key={s.step} className="step">
                <span className="step__number">{s.step}</span>
                <span className="step__icon">
                  {Icon && <Icon size={22} strokeWidth={1.75} />}
                </span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
