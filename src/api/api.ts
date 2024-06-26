import axios from "axios";

export async function getProducts() {
  const URL = "http://localhost:3000/products";

  const products = await axios.get(URL);

  return products.data;
}
