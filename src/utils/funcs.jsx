export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalPrice = 0;

  for (const { amount, price } of cart.values()) {
    totalAmount += amount;
    totalPrice += amount * price;
  }

  return { totalAmount, totalPrice };
};
