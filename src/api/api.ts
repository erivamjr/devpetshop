import axios from "axios";

export async function getProducts() {
  const URL = "http://localhost:3000/products";

  const products = await axios.get(URL);

  return products.data;
}

export async function getProductById(id: number) {
  const URL = `http://localhost:3000/products/${id}`;

  const product = await axios.get(URL);

  return product.data;
}
