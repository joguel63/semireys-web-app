export const formatMoney = (amount: number | undefined) => {
  if (amount) {
    return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }
  return 0;
};
