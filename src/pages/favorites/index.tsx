import { Handbag, Heart } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";

export function Favorites() {
  const { products, isFavorite, cart, addProductToCart } =
    useContext(ProductContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col  items-center min-h-[55vh]  max-w-7xl mx-auto max-sm:mt-[100px]">
      <h1 className="mx-auto text-gray font-bold text-2xl my-6">Favoritos</h1>

      <div className="flex flex-wrap justify-center  mb-10">
        {products.filter((product) => product.isFavorite).length === 0 ? (
          <h1 className="text-gray font-bold text-xl mt-10 text-center">
            Nenhum produto favoritado... &#128532;
            <br /> Adicione produtos aos favoritos na seção de produtos!
            <br />
          </h1>
        ) : (
          products
            .filter((product) => product.isFavorite)
            .map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center m-4 max-w-[300px] min-h-[370px]  rounded-xl  shadow-lg"
              >
                <Link to={`/details/${product.id}`}>
                  <img
                    className="h-48 w-48 object-cover rounded-full"
                    src={product.cover}
                    alt={product.title}
                  />
                </Link>
                <h2 className="text-gray font-bold text-2xl text-center">
                  {product.title}
                </h2>
                <p className="text-gray">Preço: {product.price}</p>
                <div className="flex fleco justify-center items-center gap-4">
                  <button
                    className="text-gray h-10 w-10"
                    type="button"
                    onClick={() => isFavorite(product.id)}
                  >
                    <Heart size={32} weight="fill" className="text-red" />
                  </button>
                  <button
                    type="button"
                    onClick={() => addProductToCart(product)}
                  >
                    {cart.find((item) => item.id === product.id) ? (
                      <Handbag
                        size={28}
                        className="text-orange"
                        weight="fill"
                      />
                    ) : (
                      <Handbag size={28} className="text-gray" />
                    )}
                  </button>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}
