import imgDog from "../../../assets/dog.png";
export function Banner() {
  return (
    <section className="flex w-full max-w-7xl flex-col sm:flex-row bg-green m-auto max-h-[600px] text-center">
      <h1 className="flex  flex-1 font-bold text-gray text-2xl sm:text-4xl sm:text-left m-5 items-center justify-center">
        Cuide do seu melhor amigo com o que há de melhor! Confira nossas ofertas
        e produtos exclusivos para pets!
      </h1>
      <div className="flex flex-1  m-auto">
        <img src={imgDog} alt="" />
      </div>
    </section>
  );
}
