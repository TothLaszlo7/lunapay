export function calcSavings(incomeAmount, expensesAmount) {
  return Number(incomeAmount || 0) - Number(expensesAmount || 0);
}

export function calcMonthsToGoal(targetAmount, monthlySavings) {
  const target = Number(targetAmount || 0);
  const savings = Number(monthlySavings || 0);

  if (target <= 0) return null;
  if (savings <= 0) return null;

  return Math.ceil(target / savings);
}

export function formatFt(amount) {
  const n = Number(amount || 0);
  return n.toLocaleString("hu-HU");
}