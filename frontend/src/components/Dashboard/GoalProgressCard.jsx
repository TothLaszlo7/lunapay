export default function GoalProgressCard({
  category,
  savedAmount,
  targetAmount,
  progressPct,
  currency,
}) {
  return (
    <section className="card goal-progress">
      <div className="goal-progress-top">
        <div>
          <h2 className="goal-progress-title">Goal progress</h2>
          <div className="goal-progress-sub">{category || "—"}</div>
        </div>

        <div className="goal-progress-amounts">
          <div className="goal-progress-main">
            {savedAmount} {currency}
          </div>
          <div className="goal-progress-target">
            / {targetAmount} {currency}
          </div>
        </div>
      </div>

      <div className="goal-progress-bar">
        <div className="goal-progress-track">
          <div
            className="goal-progress-fill"
            style={{ width: `${Math.min(100, Math.max(0, progressPct))}%` }}
          />
        </div>
        <div className="goal-progress-meta">{progressPct}%</div>
      </div>

      <div className="goal-progress-footer">
        <span className="muted">This month</span>
        <strong>{savedAmount > 0 ? `+${savedAmount} ${currency}` : "—"}</strong>
      </div>
    </section>
  );
}