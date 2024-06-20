import { Handbag, Heart } from "@phosphor-icons/react";

export function Store() {
  return (
    <section className="bg-dogFootprint bg-cover flex items-center flex-col">
      <h1 className=" text-5xl pt-4 text-gray flex justify-center items-center  mb-10">
        Nossa<span className="text-orange ml-2">Loja</span>
      </h1>

      <div className="flex flex-col bg-white rounded-lg mb-10 shadow-md w-[270px] p-4">
        <img
          className="object-cover w-250 h-300"
          src="https://images.petz.com.br/fotos/1666882957839.jpg"
          alt="Ração pedigree adulto"
        />
        <h1 className="text-center text-gray">Ração Pedigree Nutrição</h1>
        <p className="text-center text-gray font-bold my-2">R$ 89,90</p>
        <div className="flex justify-center gap-8 text-gray">
          <button>
            <Heart size={28} />
          </button>
          <button>
            <Handbag size={28} />
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-lg mb-10 shadow-md w-[270px] p-4">
        <img
          className="object-cover w-250 h-300"
          src="https://images.petz.com.br/fotos/1666882957839.jpg"
          alt="Ração pedigree adulto"
        />
        <h1 className="text-center text-gray">Ração Pedigree Nutrição</h1>
        <p className="text-center text-gray font-bold my-2">R$ 89,90</p>
        <div className="flex justify-center gap-6 text-gray">
          <button>
            <Heart size={28} />
          </button>
          <button>
            <Handbag size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
