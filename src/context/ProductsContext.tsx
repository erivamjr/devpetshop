import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/api";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}
interface ProductContextData {
  products: ProductProps[];
  addProduct: (product: ProductProps) => void;
}

interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  function addProduct(product: ProductProps) {
    setProducts([...products, product]);
  }

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
