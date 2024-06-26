import { Heart } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";

export function Details() {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="flex items-center min-h-[60vh] flex-col max-w-7xl mx-auto max-sm:mt-[100px]">
      <h2 className="text-gray font-bold text-2xl">Product Title {id}</h2>

      <img
        className="h-48 w-48 object-cover rounded-full my-4"
        src="https://via.placeholder.com/150"
        alt="Product"
      />
      <p className="text-gray mx-2 sm:mx-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
        velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
        commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
        eleifend tristique, tortor mauris a dolor.{" "}
      </p>
      <div className="flex justify-center items-center gap-4">
        <p className="text-gray">Preço: R$ 9.99</p>
        <button className="text-gray h-10 w-10">
          <Heart size={32} weight="fill" />
        </button>
        <button className="bg-green text-white p-2 rounded-lg my-4">
          Comprar
        </button>
      </div>
    </div>
  );
}
