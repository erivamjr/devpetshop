import { ReactNode, createContext, useEffect, useState } from "react";
//import { getProducts } from "../api/api";
import { products as mockProducts } from "../api/vercel.json";
import toast from "react-hot-toast";

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
  toCleanCart: () => void;
}

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [cart, setCart] = useState<ProductProps[]>([]);

  useEffect(() => {
    //getProducts().then((data) => setProducts(data));
    setProducts(mockProducts);
  }, []);

  function addProductToCart(product: ProductProps) {
    toast.success("Produto adicionado ao carrinho");
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
      item.id === productId
        ? { ...item, quantity: item.quantity === 1 ? 1 : item.quantity! - 1 }
        : item
    );
    setCart(newCart);
  }

  function removeProductFromCart(productId: number) {
    toast.error("Produto removido do carrinho");
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  }

  function isFavorite(productId: number) {
    const newCart = products.map((item) =>
      item.id === productId ? { ...item, isFavorite: !item.isFavorite } : item
    );

    const newCartCart = cart.map((item) =>
      item.id === productId ? { ...item, isFavorite: !item.isFavorite } : item
    );

    setCart(newCartCart);

    setProducts(newCart);
  }

  function toCleanCart() {
    alert("Compra realizada com sucesso!");
    setCart([]);
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
        toCleanCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
