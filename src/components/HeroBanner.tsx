import n2 from "../img/n2.png";
import JendrixMap from "./JendrixMap";
import RevueltaMap from "./RevueltaMap";

export default function HeroBanner() {
  return (
    <section
      id="eventos"
      className="bg-transparent relative text-white py-10 px-6 md:px-12 flex flex-col justify-center items-center"
    >
      <img
        src={n2}
        alt=""
        className="absolute left-0 top-96 opacity-0 -z-30 md:opacity-10 w-[500px] max-w-[80dvw]"
      />

      <article
        aria-labelledby="evento-viernes-title"
        className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 pb-5 transition-all duration-1000"
      >
        <header className="text-center space-y-3 flex flex-col justify-center">
          <time
            dateTime="2025-10-24T23:00"
            className="text-xl text-gray-200 max-w-md mx-auto font-fty"
          >
            Viernes 24 de octubre
          </time>

          <h2
            id="evento-viernes-title"
            className="underline-effect-title md:text-4xl text-3xl"
          >
            Presentación del evento
          </h2>

          <p className="md:text-lg text-base text-gray-200 max-w-md mx-auto">
            Pinchando <strong>K-NALLA SELEKTOR</strong> (Psychobilly,
            Rockabilly, Surf, Garage)
          </p>
        </header>

        <JendrixMap />

        <div className="flex justify-center gap-4">
          <header className="text-amber-950 font-bold p-4 py-2 bg-yellow-400 hover:bg-[#260617] hover:text-white rounded text-sm transition duration-300 text-center">
            <time dateTime="2025-10-24T23:00">
              Viernes 24 de octubre - 23hs
            </time>
            <p className="uppercase font-black text-base">Jendrix Bar</p>
          </header>
        </div>
      </article>

      <div className=" h-1 bg-yellow-600 opacity-15 z-40 md:max-w-[40dvw] mx-auto my-8"></div>

      <article
        aria-labelledby="evento-sabado-title"
        className="max-w-7xl mx-auto flex flex-col items-center gap-8 pt-5 transition-all duration-1000"
      >
        <header className="text-center space-y-3 flex flex-col justify-center">
          <time
            dateTime="2025-11-08T20:00"
            className="text-xl text-gray-200 max-w-md mx-auto font-fty"
          >
            Sábado 8 de noviembre
          </time>

          <h2
            id="evento-sabado-title"
            className="underline-effect-title md:text-5xl text-4xl"
          >
            Nightnoise Fest
          </h2>
        </header>

        <section className="flex flex-col justify-center text-center space-y-2">
          <p className="md:text-lg text-base text-gray-200 max-w-md mx-auto">
            En vivo:
          </p>
          <ul className="flex flex-col justify-center items-center list-none list-inside font-bold font-heavy text-3xl tracking-wide md:text-4xl text-gray-200 max-w-md mx-auto">
            <li>13 Bats</li>
            <li>Donkey Kick</li>
            <li>Los Turanga</li>
            <li>La Llama</li>
          </ul>
          <div className=" flex flex-col md:flex-row md:gap-10">
            <article>
              <p className="md:text-lg text-base text-gray-200 max-w-md mx-auto pt-4">
                DJs:
              </p>
              <ul className="md:text-lg text-base font-bold text-gray-200 max-w-md mx-auto">
                <li>Jess VZ</li>
                <li>Acho! El Kadhe</li>
              </ul>
            </article>
            <article>
              <p className="md:text-lg text-base text-gray-200 max-w-md mx-auto pt-4">
                Stands:
              </p>
              <ul className="md:text-lg text-base font-bold text-gray-200 max-w-md mx-auto pb-2">
                <li>Rebel Yell</li>
                <li>Pipus Records</li>
              </ul>
            </article>
          </div>
        </section>

        <RevueltaMap />

        <div className="flex justify-center gap-4">
          <header className="text-amber-950 font-bold p-4 py-2 bg-yellow-400 hover:bg-[#260617] hover:text-white rounded text-sm transition duration-300 text-center">
            <time dateTime="2025-11-08T20:00">
              Sábado 8 de noviembre - 20hs
            </time>
            <p className="uppercase font-black text-base">Sala La Revuelta</p>
          </header>
        </div>
      </article>
    </section>
  );
}
