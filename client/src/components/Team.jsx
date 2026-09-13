import { TEAM } from "../data";

export default function Team() {
  return (
    <section id="team" className="section">
      <div className="container">
        <h2 className="section__title">Team</h2>
        <div className="team-grid">
          {TEAM.map((member) => {
            const initials = member.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("");
            return (
              <div key={member.name} className="team-card">
                {/* Real photo available on member.photo — swap in when ready:
                <img className="team-card__avatar" src={member.photo} alt={member.name} style={{ objectFit: "cover" }} />
                */}
                <div className="team-card__avatar">{initials}</div>
                <div className="team-card__body">
                  <h3>{member.name}</h3>
                  <span className="team-card__role">{member.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
