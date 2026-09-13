import { TARGET_SEGMENTS } from "../data";

export default function TargetUsers() {
  return (
    <section id="target-users" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Who Gbénu Serves</h2>
        <p className="section__lead">
          Gbénu's initial Serviceable Obtainable Market targets young people
          aged 7–35 across Francophone and East Africa, starting in Benin and
          Burkina Faso.
        </p>
        <div className="table-wrap">
          <table className="table">
            <tbody>
              {TARGET_SEGMENTS.map((row) => (
                <tr key={row.label}>
                  <th>{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
