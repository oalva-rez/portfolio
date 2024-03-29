// const API_BASE_URL = "https://aphex-api.onrender.com";
const API_BASE_URL = "http://localhost:3005";

export const getAllProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  const data = await response.json();
  return data;
};

export const getSaleProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products/sale`);
  const data = await response.json();
  return data;
};

export const getSingleProduct = async (slug) => {
  const response = await fetch(`${API_BASE_URL}/products/${slug}`);
  const data = await response.json();
  return data;
};
