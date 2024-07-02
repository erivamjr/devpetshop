import { Handbag, Heart } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
import { parseCurrency } from "../../utils/utils";

import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";

export function Details() {
  const { id } = useParams<{ id: string }>();
  const { isFavorite, products, cart, addProductToCart } =
    useContext(ProductContext);

  const product = products.find((product) => Number(product.id) === Number(id));

  if (!product) return <h1>Carregando...</h1>;

  return (
    <section className="flex items-center justify-center min-h-[80vh] flex-col max-w-4xl mx-auto max-sm:mt-[100px] shadow-xl mb-4">
      <h2 className="text-gray font-bold text-2xl text-center">
        {product?.title}
      </h2>

      <img
        className="h-48 w-48 object-cover rounded-full my-4"
        src={product?.cover}
        alt={product?.title}
      />
      <p className="text-gray mx-2 sm:mx-20">{product?.description}</p>
      <div className="flex justify-center items-center gap-4 border-blue border-2 mt-4 rounded-lg p-2">
        <p className="text-gray text-2xl font-bold">
          {product?.price && parseCurrency(product.price)}
        </p>
        <button
          className="text-gray h-10 w-10"
          type="button"
          onClick={() => isFavorite(product.id)}
        >
          {product?.isFavorite ? (
            <Heart size={28} className="text-red" weight="fill" />
          ) : (
            <Heart size={28} />
          )}
        </button>

        <button type="button" onClick={() => addProductToCart(product)}>
          {cart.find((item) => item.id === product.id) ? (
            <Handbag size={28} className="text-orange" weight="fill" />
          ) : (
            <Handbag size={28} className="text-gray my-4" />
          )}
        </button>
      </div>
    </section>
  );
}
