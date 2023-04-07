export const orderArrayBy = (array, by) =>
  [...array].sort((a, b) => b[by] - a[by]);
