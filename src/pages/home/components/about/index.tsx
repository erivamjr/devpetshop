import imgCat from "../../../../assets/cat.png";
import imgStoreDog from "../../../../assets/store-dog.png";
export function About() {
  return (
    <section className="m-auto">
      <h1 className=" text-5xl my-6 text-gray flex justify-center items-center ">
        Sobre<span className="text-green ml-2">Nós</span>
      </h1>

      <div className=" flex flex-col px-8">
        <img src={imgCat} alt="" />
        <p className="py-2 text-gray">Bem-vindo ao Dev Pet Shop!</p>
        <p className=" text-gray">
          Na Dev Pet Shop, nossa paixão pelos animais nos motiva a oferecer os
          melhores produtos e serviços para o seu pet. Desde a nossa fundação em
          2024, temos nos dedicado a criar um ambiente onde os animais e seus
          donos possam encontrar tudo o que precisam em um só lugar.
        </p>
      </div>

      <div className=" flex flex-col px-8 pt-4">
        <img src={imgStoreDog} alt="" />
        <p className="py-2 text-gray">Bem-vindo ao Dev Pet Shop!</p>
        <p className=" text-gray">
          Na Dev Pet Shop, nossa paixão pelos animais nos motiva a oferecer os
          melhores produtos e serviços para o seu pet. Desde a nossa fundação em
          2024, temos nos dedicado a criar um ambiente onde os animais e seus
          donos possam encontrar tudo o que precisam em um só lugar.
        </p>
      </div>
    </section>
  );
}
