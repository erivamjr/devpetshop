import { Handbag, Heart } from "@phosphor-icons/react";
import { useContext } from "react";
import { ProductContext } from "../../../../context/ProductsContext";
import { parseCurrency } from "../../../../utils/utils";

export function Store() {
  const { products, addProductToCart } = useContext(ProductContext);

  return (
    <section className="bg-dogFootprint bg-cover flex items-center flex-col  max-w-7xl mx-auto">
      <h1 className=" text-5xl pt-4 text-gray flex justify-center items-center  mb-10 sm:font-bold">
        Nossa<span className="text-orange ml-2">Loja</span>
      </h1>

      <div className="sm:flex sm:flex-row sm:gap-4 sm:flex-wrap justify-center items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white rounded-lg mb-10 shadow-md w-[270px] p-4"
          >
            <img
              className="object-cover w-250 h-300"
              src={product.cover}
              alt="Ração pedigree adulto"
            />
            <h1 className="text-center text-gray">{product.title}</h1>
            <p className="text-center text-gray font-bold my-2">
              {parseCurrency(product.price)}
            </p>
            <div className="flex justify-center gap-8 text-gray">
              <button>
                <Heart size={28} />
              </button>
              <button type="button" onClick={() => addProductToCart(product)}>
                <Handbag size={28} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
