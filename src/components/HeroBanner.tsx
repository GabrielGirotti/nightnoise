import { useState } from "react";
import RevueltaMap from "./RevueltaMap";
import EventFlyerModal from "./EventFlyerModal";

export default function HeroBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flyerData, setFlyerData] = useState<{ src: string; alt: string }>({
    src: "",
    alt: "",
  });

  const handleOpenModal = (src: string, alt: string) => {
    setFlyerData({ src, alt });
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="eventos"
        className="bg-transparent relative text-white py-10 px-6 md:px-12 flex flex-col justify-center items-center"
      >
        <article
          aria-labelledby="evento-sabado-title"
          className="max-w-7xl mx-auto flex flex-col items-center gap-8 pt-5 transition-all duration-1000"
        >
          <header className="text-center space-y-3 flex flex-col justify-center">
            <time
              dateTime="2025-11-08T20:00"
              className="text-xl text-gray-200 max-w-md mx-auto font-fty"
            >
              Sábado 13 de junio - 20.30hs
            </time>

            <h2
              id="evento-sabado-title"
              className="underline-effect-title text-5xl"
            >
              Nightnoise Fest
            </h2>
          </header>

          <section className="flex flex-col justify-center text-center space-y-2">
            <p className="md:text-lg text-base text-gray-200 max-w-md mx-auto bg-black p-1">
              En vivo:
            </p>
            <ul className="flex flex-col justify-center items-center list-none list-inside font-bold font-heavy  tracking-wide text-6xl text-gray-200 max-w-md mx-auto">
              <li>Donkey Kick</li>
              <li>Terror V</li>
              <li>Swamp Things</li>
              <li>Boompats</li>
            </ul>
            <div className=" flex flex-col md:flex-row md:gap-10">
              <article>
                <p className="text-lg  text-[#ffe79c] max-w-md mx-auto pt-4 underline">
                  AFTERPARTY:
                </p>
                <ul className="text-3xl font-bold text-gray-200 max-w-md mx-auto font-fty tracking-wider">
                                <li>Dj Acho! El Kadhe</li>
                </ul>
              </article>
              <article>
                <p className="text-lg  text-[#ffe79c] max-w-md mx-auto pt-4 underline">
                  Stands:
                </p>
                <ul className="text-3xl font-bold text-gray-200 max-w-md mx-auto font-fty tracking-wider">
                  <li>Rebel Yell</li>
                  <li>Poppins Retro Vintage</li>
                                 </ul>
              </article>
            </div>
          </section>

          <RevueltaMap />

          <div className="flex justify-center gap-4">
            <header
              onClick={() =>
                handleOpenModal(
                  "/flyers/revuelta.jpg",
                  "Flyer Sala La Revuelta"
                )
              }
              className="cursor-pointer text-black font-bold p-4 py-2 bg-[#ffe79c] hover:bg-[#000000] hover:text-white rounded text-sm transition duration-300 text-center"
            >
              <time dateTime="2025-06-13T20:30">
                Sábado 13 de junio - 20.30hs
              </time>
              <p className="uppercase font-black text-base">Sala La Revuelta</p>
              <p className=" text-sm">Ver cartel</p>
            </header>
          </div>
        </article>
      </section>
      <EventFlyerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        flyerSrc={flyerData.src}
        altText={flyerData.alt}
      />
    </>
  );
}
