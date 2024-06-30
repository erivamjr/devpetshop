import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Handbag, Heart, MagnifyingGlass } from "@phosphor-icons/react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";

export function Header() {
  const { cart } = useContext(ProductContext);
  return (
    <header className="flex w-full max-w-7xl h-[100px] justify-between items-center bg-white max-sm:fixed  mx-auto px-4 max-sm:mt-[-100px]">
      <Link className="flex items-center gap-1" to="/">
        <img className="h-[60px]" src={logoImg} alt="" />
        <h1 className="font-bold text-2xl text-gray">PETSHOP</h1>
      </Link>
      <ul className="hidden sm:flex gap-4 text-gray font-bold  ">
        <li>HOME</li>
        <li>SOBRE</li>
        <li>SERVIÇOS</li>
        <li>LOJA</li>
      </ul>
      <nav className="flex gap-2 text-gray">
        <Link to="/">
          <MagnifyingGlass size={28} />
        </Link>
        <Link to="/favorites">
          <Heart size={28} />
        </Link>
        {cart.length > 0 ? (
          <Link to="/cart">
            <Handbag size={28} className="absolute" />
            <span className="bg-orange text-white rounded-full h-6 w-6 flex justify-center items-center relative left-4 bottom-2">
              {cart.length}
            </span>
          </Link>
        ) : (
          <Link to="/cart">
            <Handbag size={28} />
          </Link>
        )}
      </nav>
    </header>
  );
}
