import { Heart, Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";
import { parseCurrency, sumCart } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const {
    cart,
    toCleanCart,
    minusProductFromCart,
    addProductToCart,
    isFavorite,
    removeProductFromCart,
  } = useContext(ProductContext);
  const navigate = useNavigate();

  function toCleanCartNav() {
    toCleanCart();
    navigate("/");
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center max-sm:mt-[100px] min-h-[80vh]">
        <h1 className="font-bold text-2xl text-gray">Carrinho de Compras</h1>
        <h1 className="text-gray font-bold text-xl mt-10 text-center">
          Nenhum produto adicionado... &#128532;
          <br /> Adicione produtos no carrinho na seção de produtos!
          <br />
        </h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center max-sm:mt-[100px] min-h-[80vh]">
      <h1 className="font-bold text-2xl text-gray">Carrinho de Compras</h1>
      {cart.map((product) => (
        <div
          key={product.id}
          className="flex m-4 p-4 items-center gap-4 justify-around flex-wrap border-b-2 border-gray"
        >
          <div className="p-4">
            <img
              src={product.cover}
              alt={product.title}
              className="h-48 w-48 object-cover rounded-full "
            />
          </div>
          <div>
            <h2 className="font-bold text-2xl text-gray text-center truncate max-w-xs">
              {product.title}
            </h2>
            <p>Preço: {product?.price && parseCurrency(product.price)}</p>
          </div>
          <div className="flex gap-4 items-center border-[1px] border-gray py-2 px-4 rounded-lg">
            <button
              className=" h-6 w-6"
              onClick={() => minusProductFromCart(product.id)}
            >
              -
            </button>
            <p className="font-bold text-2xl text-gray"> {product.quantity}</p>
            <button
              className=" h-6 w-6"
              onClick={() => addProductToCart(product)}
            >
              +
            </button>
          </div>
          <div className="font-bold text-2xl text-gray">
            <h2>
              Total:{" "}
              {product?.price &&
                product.quantity &&
                parseCurrency(product.price * product.quantity)}
            </h2>
          </div>
          <div className="flex gap-8">
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
            <button
              className="text-gray h-10 w-10"
              onClick={() => removeProductFromCart(product.id)}
            >
              <Trash size={32} weight="fill" className="text-red" />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-center flex-col items-center">
        <h2 className="font-bold text-2xl text-gray">
          Total: {parseCurrency(sumCart(cart))}
        </h2>
        <button
          className="bg-greenDark text-white p-4 rounded-lg my-4"
          onClick={toCleanCartNav}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
