export default function GoalCard({ category, targetText, months }) {
  return (
    <section className="card">
      <h2>Aim</h2>

      <div className="row">
        <span>Target</span>
        <strong>{category || "—"}</strong>
      </div>

      <div className="row">
        <span>Desired amount</span>
        <strong>{targetText}</strong>
      </div>

      <div className="row">
        <span>Projected time</span>
        <strong>{months ? `~${months} months` : "—"}</strong>
      </div>
    </section>
  );
}