const arrayFilterBy = (arrayToFilter, by, compareWith) =>
  arrayToFilter.filter(item => item[by] !== compareWith);

const findInArrayBy = (arrayToUse, by, compareWith) =>
  arrayToUse.find(item => item[by] === compareWith);

export { arrayFilterBy, findInArrayBy };
