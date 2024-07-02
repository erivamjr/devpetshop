import { ProductProps } from "../context/ProductsContext";

export function parseCurrency(value: number) {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

export function sumCart(cart: ProductProps[]) {
  return cart.reduce((acc, item) => {
    if (item.quantity) {
      return acc + item.price * item.quantity;
    }
    return acc + item.price;
  }, 0);
}
