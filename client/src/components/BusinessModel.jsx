import { PRICING, FINANCIAL_SUMMARY } from "../data";

export default function BusinessModel() {
  return (
    <section id="business-model" className="section">
      <div className="container">
        <h2 className="section__title">Business Model</h2>
        <p className="section__lead">
          Gbénu is a term based subscription model priced for African
          households, schools, and independent learners paid via Mobile Money,
          Orange Money, MTN MoMo, Airtel Money, Moov Money, or card.
        </p>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {PRICING.map((p) => (
                <tr key={p.tier}>
                  <td>{p.tier}</td>
                  <td>{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="section__subtitle">3-Year Forecast (FCFA)</h3>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Revenue</th>
                <th>Expenses</th>
                <th>Net Profit</th>
              </tr>
            </thead>
            <tbody>
              {FINANCIAL_SUMMARY.map((f) => (
                <tr key={f.year}>
                  <th>{f.year}</th>
                  <td>{f.revenue}</td>
                  <td>{f.expenses}</td>
                  <td>{f.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="section__note">
          Current stage: pre-revenue prototype. Figures above are projections,
          not measured results.
        </p>
      </div>
    </section>
  );
}
