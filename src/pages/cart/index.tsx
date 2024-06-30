import { Heart, Trash } from "@phosphor-icons/react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";

export function Cart() {
  const { cart } = useContext(ProductContext);
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
            <h2 className="font-bold text-2xl text-gray text-center">
              {product.title}
            </h2>
            <p>Preço: {product.price}</p>
          </div>
          <div className="flex gap-4 items-center border-[1px] border-gray py-2 px-4 rounded-lg">
            <button className=" h-6 w-6">-</button>
            <p className="font-bold text-2xl text-gray"> {product.quantity}</p>
            <button className=" h-6 w-6">+</button>
          </div>
          <div className="font-bold text-2xl text-gray">
            <h2>Total: {product.price}</h2>
          </div>
          <div className="flex gap-8">
            <button className="text-gray h-10 w-10">
              <Heart size={32} weight="fill" />
            </button>
            <button className="text-gray h-10 w-10">
              <Trash size={32} weight="fill" />
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-center flex-col items-center">
        <h2 className="font-bold text-2xl text-gray">Total: R$ 20.00</h2>
        <button className="bg-green text-white p-4 rounded-lg my-4">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
