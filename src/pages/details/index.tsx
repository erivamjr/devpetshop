import { Heart } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";
import { parseCurrency } from "../../utils/utils";
import { getProductById } from "../../api/api";
import { useEffect, useState } from "react";
import { ProductProps } from "../../context/ProductsContext";

export function Details() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductProps | null>(null);

  useEffect(() => {
    getProductById(Number(id)).then((product) => setProduct(product));
  }, [id]);

  return (
    <section className="flex items-center min-h-[60vh] flex-col max-w-7xl mx-auto max-sm:mt-[100px]">
      <h2 className="text-gray font-bold text-2xl text-center">
        {product?.title}
      </h2>

      <img
        className="h-48 w-48 object-cover rounded-full my-4"
        src={product?.cover}
        alt={product?.title}
      />
      <p className="text-gray mx-2 sm:mx-20">{product?.description}</p>
      <div className="flex justify-center items-center gap-4">
        <p className="text-gray">
          {product?.price && parseCurrency(product.price)}
        </p>
        <button className="text-gray h-10 w-10">
          <Heart size={32} weight="fill" />
        </button>
        <button className="bg-green text-white p-2 rounded-lg my-4">
          Comprar
        </button>
      </div>
    </section>
  );
}
