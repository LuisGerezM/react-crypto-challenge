const persistLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const clearLocalStorage = key => localStorage.removeItem(key);

const getItemLocalStorage = key => JSON.parse(localStorage.getItem(key));

export { getItemLocalStorage, persistLocalStorage, clearLocalStorage };
