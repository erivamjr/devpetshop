import axios from "axios";

export async function getProducts() {
  const API_URL =
    "http://localhost:3000/products" || process.env.REACT_APP_API_URL;
  const response = await axios.get(API_URL);
  return response.data;
}

export async function getProductById(id: number) {
  const URL = `http://localhost:3000/products/${id}`;

  const product = await axios.get(URL);

  return product.data;
}
