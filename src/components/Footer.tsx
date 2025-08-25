import logo from "../img/logo.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white py-8 px-4 text-center flex flex-col justify-center items-center">
      <h2 className="sr-only">Información del sitio y créditos</h2>

      <a href="/">
        <img
          src={logo}
          alt="NightNoise Logo"
          className="w-[200px] md:w-[300px]"
        />
      </a>

      <nav
        aria-label="Redes sociales de NightNoise"
        className="flex text-yellow-400 text-2xl gap-4 my-4"
      >
        <a
          href="https://www.instagram.com/nightnoisefest/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de NightNoise"
          className="focus:outline focus:outline-yellow-400 hover:scale-110 transition-transform"
        >
          <FaInstagram aria-hidden="true" />
        </a>

        <a
          href="https://www.facebook.com/nightnoisefest"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook de NightNoise"
          className="focus:outline focus:outline-yellow-400 hover:scale-110 transition-transform"
        >
          <FaFacebook aria-hidden="true" />
        </a>
      </nav>

      <small className="text-xs text-zinc-500 mt-2">
        Hecho por{" "}
        <a
          href="https://gabrielgirotti.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition"
          aria-label="Portafolio de Gabba en Netlify"
        >
          Gabba
        </a>
      </small>
    </footer>
  );
}
