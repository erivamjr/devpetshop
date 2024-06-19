import imgShower from "../../../../assets/dog-shower.jpg";
import imgFood from "../../../../assets/dog-food.jpg";
import imgVacine from "../../../../assets/vacine.jpeg";
export function Services() {
  return (
    <div>
      <h1 className="flex justify-center items-center text-5xl mt-4 text-gray">
        Nossos<span className="text-blue ml-2">Serviços</span>
      </h1>
      <section className="flex flex-col mt-10 justify-center items-center">
        <div className="w-[300px] h-[300px]">
          <img
            className="rounded-full object-cover w-full h-full shadow-lg"
            src={imgShower}
            alt="Banho e Tosa"
          />
        </div>
        <h3 className="font-bold text-2xl text-gray mt-6">Banho e Tosa</h3>
        <p className="text-lg text-gray p-4 text-center">
          Mantenha seu pet limpo e bem cuidado com nossos serviços de banho e
          tosa. Utilizamos produtos de alta qualidade e técnicas especializadas
          para garantir o conforto e a higiene do seu animal de estimação.
        </p>
      </section>

      <section className="flex flex-col mt-10 justify-center items-center">
        <div className="w-[300px] h-[300px]">
          <img
            className="rounded-full object-cover w-full h-full shadow-lg"
            src={imgFood}
            alt="Consultoria Nutricional"
          />
        </div>
        <h3 className="font-bold text-2xl text-gray mt-6">
          Consultoria Nutricional
        </h3>
        <p className="text-lg text-gray p-4 text-center">
          Nossos especialistas em nutrição estão aqui para ajudar a escolher a
          alimentação ideal para seu pet, garantindo uma dieta equilibrada e
          saudável.
        </p>
      </section>

      <section className="flex flex-col mt-10 justify-center items-center">
        <div className="w-[300px] h-[300px]">
          <img
            className="rounded-full object-cover w-full h-full shadow-lg"
            src={imgVacine}
            alt="Vacinação"
          />
        </div>
        <h3 className="font-bold text-2xl text-gray mt-6">Vacinação</h3>
        <p className="text-lg text-gray p-4 text-center">
          Proteja seu pet com nosso serviço de vacinação. Oferecemos todas as
          vacinas necessárias para garantir a saúde e a proteção do seu animal
          de estimação.
        </p>
      </section>
    </div>
  );
}
