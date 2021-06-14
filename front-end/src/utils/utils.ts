export const calcPercentage = (borrowed: number, lended: number) => {
  const range = borrowed + lended;

  const borrowedPercentage = borrowed / range;
  const lendedPercentage = lended / range;
};
