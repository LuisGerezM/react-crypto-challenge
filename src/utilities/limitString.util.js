export const limitString = (str, lng = 8) => {
  const isPhone = window.innerWidth < 550;
  const isDesktop = window.innerWidth > 900;

  if (isDesktop) return str;

  return str.length > lng
    ? str.slice(0, isPhone ? lng - 3 : lng).concat("...")
    : str;
};
