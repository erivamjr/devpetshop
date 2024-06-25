import { Heart } from "@phosphor-icons/react";

export function Favorites() {
  return (
    <div className="flex flex-col  items-center min-h-[55vh]  max-w-7xl mx-auto max-sm:mt-[100px]">
      <h1 className="mx-auto text-gray font-bold text-2xl my-6">Favoritos</h1>

      <div className="flex flex-wrap justify-center  mb-10">
        <div className="flex flex-col items-center m-4">
          <img
            className="h-48 w-48 object-cover rounded-full"
            src="https://via.placeholder.com/150"
            alt="Product"
          />
          <h2 className="text-gray font-bold text-2xl">Product Title</h2>
          <p className="text-gray">Preço: R$ 9.99</p>
          <div className="flex justify-center items-center gap-4">
            <button className="text-gray h-10 w-10">
              <Heart size={32} weight="fill" />
            </button>
            <button className="bg-green text-white p-2 rounded-lg my-4">
              Comprar
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center m-4">
          <img
            className="h-48 w-48 object-cover rounded-full"
            src="https://via.placeholder.com/150"
            alt="Product"
          />
          <h2 className="text-gray font-bold text-2xl">Product Title</h2>
          <p className="text-gray">Preço: R$ 9.99</p>
          <div className="flex justify-center items-center gap-4">
            <button className="text-gray h-10 w-10">
              <Heart size={32} weight="fill" />
            </button>
            <button className="bg-green text-white p-2 rounded-lg my-4">
              Comprar
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center m-4">
          <img
            className="h-48 w-48 object-cover rounded-full"
            src="https://via.placeholder.com/150"
            alt="Product"
          />
          <h2 className="text-gray font-bold text-2xl">Product Title</h2>
          <p className="text-gray">Preço: R$ 9.99</p>
          <div className="flex fleco justify-center items-center gap-4">
            <button className="text-gray h-10 w-10">
              <Heart size={32} weight="fill" />
            </button>
            <button className="bg-green text-white p-2 rounded-lg my-4">
              Comprar
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center m-4">
          <img
            className="h-48 w-48 object-cover rounded-full"
            src="https://via.placeholder.com/150"
            alt="Product"
          />
          <h2 className="text-gray font-bold text-2xl">Product Title</h2>
          <p className="text-gray">Preço: R$ 9.99</p>
          <div className="flex fleco justify-center items-center gap-4">
            <button className="text-gray h-10 w-10">
              <Heart size={32} weight="fill" />
            </button>
            <button className="bg-green text-white p-2 rounded-lg my-4">
              Comprar
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center m-4">
          <img
            className="h-48 w-48 object-cover rounded-full"
            src="https://via.placeholder.com/150"
            alt="Product"
          />
          <h2 className="text-gray font-bold text-2xl">Product Title</h2>
          <p className="text-gray">Preço: R$ 9.99</p>
          <div className="flex fleco justify-center items-center gap-4">
            <button className="text-gray h-10 w-10">
              <Heart size={32} weight="fill" />
            </button>
            <button className="bg-green text-white p-2 rounded-lg my-4">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
