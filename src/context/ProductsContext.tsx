import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/api";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  quantity?: number;
}
interface ProductContextData {
  products: ProductProps[];
  cart: ProductProps[];
  addProductToCart: (product: ProductProps) => void;
  minusProductFromCart: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
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
    // Verifica se o produto já está no carrinho
    const productInCart = cart.find((item) => item.id === product.id);

    // Se o produto já estiver no carrinho, incrementa a quantidade
    if (productInCart) {
      const newCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity! + 1 }
          : item
      );
      setCart(newCart);
      console.log("Carrinho de compras", cart);
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
    console.log("Carrinho de compras", cart);
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

  return (
    <ProductContext.Provider
      value={{
        products,
        addProductToCart,
        minusProductFromCart,
        removeProductFromCart,
        cart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
