import imgCat from "../../../../assets/cat.png";
import imgStoreDog from "../../../../assets/store-dog.png";
export function About() {
  return (
    <section className="m-auto sm:mb-10 max-w-7xl">
      <h1 className=" text-5xl my-6 text-gray flex justify-center items-center sm:font-bold">
        Sobre<span className="text-green ml-2">Nós</span>
      </h1>

      <div className=" flex flex-col px-8 gap-4 sm:flex-row-reverse items-center">
        <img className="max-w-[461px]" src={imgCat} alt="" />
        <div className="flex flex-col mb-8 gap-4 text-gray max-w-[466px]">
          <p>Bem-vindo ao Dev Pet Shop!</p>
          <p>
            Na Dev Pet Shop, nossa paixão pelos animais nos motiva a oferecer os
            melhores produtos e serviços para o seu pet. Desde a nossa fundação
            em 2024, temos nos dedicado a criar um ambiente onde os animais e
            seus donos possam encontrar tudo o que precisam em um só lugar.
          </p>
        </div>
      </div>

      <div className=" flex flex-col px-8 gap-4 sm:mt-10 sm:flex-row items-center">
        <img className="max-w-[463px]" src={imgStoreDog} alt="" />

        <p className=" text-gray mb-8 max-w-[466px]">
          Estamos localizados em Rua dos Animais, 123, Bairro Pet, Cidade
          Felina, Estado BR, e nossas portas estão sempre abertas para você e
          seu pet. Venha nos visitar e descubra tudo o que podemos oferecer para
          tornar a vida do seu pet ainda mais feliz e saudável.
        </p>
      </div>
    </section>
  );
}
