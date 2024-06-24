import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <div className="bg-gray text-white p-8 w-full">
      <div className="flex  sm:flex-row sm:justify-between sm:items-baseline max-w-7xl  m-auto">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-2xl mb-2">Informações de Contato</h3>
          <p>Rua dos Animais, 123, Bairro Pet, Cidade Felina, Estado BR</p>
          <h3>Telefone</h3>
          <p>(11) 1234-5678</p>
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Sexta: 8:00 - 18:00</p>
          <p>Sábado: 9:00 - 14:00</p>
          <p>Domingo: Fechado</p>
        </div>

        <div className="flex flex-col gap-2 my-8">
          <h3 className="font-bold text-2xl mb-2">Links Rápidos</h3>
          <p>
            <span className="font-bold">Sobre Nós:</span> Conheça mais sobre a
            nossa história e missão
          </p>
          <p>
            <span className="font-bold">Serviços:</span> Veja todos os serviços
            que oferecemos
          </p>
          <p>
            <span className="font-bold">Produtos:</span> Explore nossa loja
            online
          </p>
          <p>
            <span className="font-bold">Blog:</span> Dicas e novidades sobre
            cuidados com pets
          </p>
          <p>
            <span className="font-bold">Contato:</span> Fale conosco
          </p>
        </div>
      </div>

      <div className="flex gap-4 justify-center mb-8 sm:my-8">
        <InstagramLogo size={38} />
        <FacebookLogo size={38} />
        <XLogo size={38} />
        <YoutubeLogo size={38} />
        <WhatsappLogo size={38} />
      </div>
      <p className="text-center">
        © 2024 Dev Pet Shop. Todos os direitos reservados.
      </p>
    </div>
  );
}
