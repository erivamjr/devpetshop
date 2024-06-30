import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/api";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  quantity?: number;
  isFavorite?: boolean;
}
interface ProductContextData {
  products: ProductProps[];
  cart: ProductProps[];
  addProductToCart: (product: ProductProps) => void;
  minusProductFromCart: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
  isFavorite: (productId: number) => void;
}

interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [cart, setCart] = useState<ProductProps[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  function addProductToCart(product: ProductProps) {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      const newCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity! + 1 }
          : item
      );
      setCart(newCart);

      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  }

  function minusProductFromCart(productId: number) {
    const newCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity! - 1 } : item
    );
    setCart(newCart);
  }

  function removeProductFromCart(productId: number) {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  }

  function isFavorite(productId: number) {
    const newCart = products.map((item) =>
      item.id === productId ? { ...item, isFavorite: !item.isFavorite } : item
    );

    setProducts(newCart);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        addProductToCart,
        minusProductFromCart,
        removeProductFromCart,
        cart,
        isFavorite,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
