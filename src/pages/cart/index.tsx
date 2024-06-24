import { Heart, Trash } from "@phosphor-icons/react";

export function Cart() {
  return (
    <div className="flex flex-col items-center max-sm:mt-[100px] h-[80vh]">
      <h1 className="font-bold text-2xl text-gray">Carrinho de Compras</h1>
      <div className="flex m-10 p-4 items-center gap-4 justify-around flex-wrap border-b-2 border-gray">
        <div className="p-4">
          <img src="https://via.placeholder.com/150" alt="Product" />
        </div>
        <div>
          <h2 className="font-bold text-2xl text-gray">Product Title</h2>
          <p>Preço: R$ 9.99</p>
        </div>
        <div className="flex gap-4 items-center border-[1px] border-gray py-2 px-4 rounded-lg">
          <button className=" h-6 w-6">-</button>
          <p className="font-bold text-2xl text-gray"> 1</p>
          <button className=" h-6 w-6">+</button>
        </div>
        <div className="font-bold text-2xl text-gray">
          <h2>Total: R$ 20.00</h2>
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
      <div className="flex justify-center flex-col items-center">
        <h2 className="font-bold text-2xl text-gray">Total: R$ 20.00</h2>
        <button className="bg-green text-white p-4 rounded-lg my-4">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
