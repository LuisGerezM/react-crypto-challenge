const { VITE_API_BASE_URL: BASE_URL } = import.meta.env;

const URLs = {
  allCryptos: `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500d&sparkline=false&price_change_percentage=24h&locale=en`
};

export default URLs;
