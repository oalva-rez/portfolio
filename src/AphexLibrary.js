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
