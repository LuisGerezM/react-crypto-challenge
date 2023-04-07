export const handlerDates = {
  parse: date => Date.parse(date),
  toLocaleString: date => new Date(date).toLocaleString()
};
