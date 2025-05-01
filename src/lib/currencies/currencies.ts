export const fetchExchangeRates = async () => {
  const baseUrl = "https://v6.exchangerate-api.com/v6/";
  const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_API;
  const url = `${baseUrl}${API_KEY}/latest/USD`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.result === "success") {
      return data.conversion_rates;
    } else {
      console.error("Failed to fetch exchange rates:", data["error-type"]);
      return null;
    }
  } catch (error) {
    console.error("Failed to fetch exchange rates:", error);
    return null;
  }
};
