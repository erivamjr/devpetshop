import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Handbag, Heart, MagnifyingGlass } from "@phosphor-icons/react";

export function Header() {
  return (
    <header className="flex w-full max-w-7xl h-[100px] justify-between items-center px-4 mx-auto">
      <div className="flex items-center gap-1">
        <img className="h-[60px]" src={logoImg} alt="" />
        <h1 className="font-bold text-2xl text-gray">PETSHOP</h1>
      </div>
      <ul className="hidden sm:flex gap-1 text-gray font-bold  ">
        <li>HOME</li>
        <li>SOBRE</li>
        <li>SERVIÇOS</li>
        <li>LOJA</li>
      </ul>
      <nav className="flex gap-1 text-gray">
        <Link to="/">
          <MagnifyingGlass size={28} />
        </Link>
        <Link to="/favorites">
          <Heart size={28} />
        </Link>
        <Link to="/cart">
          <Handbag size={28} />
        </Link>
      </nav>
    </header>
  );
}
