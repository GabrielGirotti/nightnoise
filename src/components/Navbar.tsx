import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../img/logo.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      aria-label="Menú principal"
      className="bg-transparent py-4 px-8 flex flex-col items-center text-white relative justify-between md:px-48"
    >
      <Link to="/" className="font-sans text-white font-bold text-4xl">
        <img
          src={Logo}
          alt="Logo Nightnoise"
          className="md:max-w-[30dvw] max-w-[70dvw]"
        />
      </Link>

      {/* Desktop nav */}
      <div className=" md:flex hidden md:flex-row flex-col items-center  p-4 ">
        <nav className="flex gap-10 items-center justify-center">
          <HashLink smooth to="#bandas" className="underline-effect">
            Bandas
          </HashLink>
          <HashLink smooth to="#eventos" className="underline-effect">
            Eventos
          </HashLink>

          <HashLink smooth to="#auspician" className="underline-effect">
            Auspician
          </HashLink>
        </nav>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex items-center justify-center"
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menú"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8h16M4 16h16"
          />
        </svg>
      </button>

      {/* Mobile menu overlay SIEMPRE MONTADO */}
      <div className="fixed inset-0 z-50 flex justify-center items-center pointer-events-none ">
        <div
          className={`flex flex-col  items-center w-full h-full
                transition-all duration-500 ease-in-out
                ${
                  menuOpen
                    ? "translate-x-0 opacity-100 pointer-events-auto"
                    : "-translate-x-full opacity-0 pointer-events-none"
                }
                 bg-[#180808] bg-[url(./img/bg.png)] bg-cover bg-center`}
          style={{ position: "absolute", left: 0, top: 0 }}
        >
          <button
            className="absolute top-3 right-9 text-white text-4xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            &times;
          </button>
          <HashLink
            smooth
            to="/"
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 font-sans  text-white bg-clip-text font-bold text-2xl "
          >
            <img src={Logo} alt="Logo Nightnoise" className="w-[200px]" />
          </HashLink>

          <nav className="flex flex-col gap-8 items-center mt-28 ">
            <HashLink
              smooth
              to="/#bandas"
              className="underline-effect"
              onClick={() => setMenuOpen(false)}
            >
              Bandas
            </HashLink>
            <HashLink
              smooth
              to="/#eventos"
              className="underline-effect"
              onClick={() => setMenuOpen(false)}
            >
              Eventos
            </HashLink>

            <HashLink
              smooth
              to="/#auspician"
              className="underline-effect"
              onClick={() => setMenuOpen(false)}
            >
              Auspician
            </HashLink>
          </nav>
          <nav
            aria-label="Redes sociales de Nightnoise"
            className="flex text-yellow-400 text-2xl cursor-pointer gap-4 mt-8"
          >
            <a
              href="https://www.instagram.com/nightnoisefest/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de NightNoise"
            >
              <FaInstagram aria-hidden="true" />
            </a>

            <a
              href="https://www.facebook.com/nightnoisefest"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de NightNoise"
            >
              <FaFacebook aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
}
