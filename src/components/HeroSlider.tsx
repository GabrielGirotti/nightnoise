import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import dk from "../img/dk.webp";
import b13 from "../img/13b.jpg";
import tura from "../img/tura.jpg";
import llama from "../img/llama.jpg";

const imgs = [
  {
    _id: "1",
    title: "13 Bats",
    imageUrls: [b13],
    description:
      "Mezcla de Punk, Rockabilly y varios estilos que hacen a 13 Bats realmente únicos.",
    link: "https://open.spotify.com/intl-es/artist/1XnPCxWUJkHpz91H21lKbt",
  },
  {
    _id: "2",
    title: "Donkey Kick",
    imageUrls: [dk],
    description:
      "Banda nacida en Benidorm combinando la energía del punk con el psychobilly más crudo.",
    link: "https://donkey-kick.netlify.app/",
  },
  {
    _id: "3",
    title: "Los Turanga",
    imageUrls: [tura],
    description: "Proyecto instrumental de música surf sin contemplaciones.",
    link: "https://open.spotify.com/intl-es/artist/1Ea9aapW8cwpUEQnl0KyMF",
  },
  {
    _id: "4",
    title: "La Llama",
    imageUrls: [llama],
    description: "DIY RAW PUNK",
    link: "https://open.spotify.com/intl-es/artist/4W00mJhEtB2JeVn5U3b0Fn",
  },
];

const HeroSlider: React.FC = () => {
  if (imgs.length === 0) return null;

  return (
    <section aria-label="Slider de artistas" className="w-full mb-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-[50vh] sm:h-[60vh] lg:h-[80vh]"
      >
        {imgs.map((service) => (
          <SwiperSlide
            key={service._id}
            aria-label={`Slide del artista ${service.title}`}
            role="group"
          >
            <div className="relative w-full h-full flex flex-col items-start justify-center px-6 lg:px-20 text-white">
              {/* Imagen representativa */}
              <img
                src={service.imageUrls[0]}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Contenido textual */}
              <article className="relative z-10 p-8 rounded-xl bg-black/50 shadow-xl flex flex-col gap-2">
                <h2 className="underline-effect-title text-4xl md:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm md:text-lg pr-20 md:pr-24 md:max-w-[30vw] mb-4">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-28 text-amber-950 font-bold p-3 py-2 bg-yellow-400 hover:bg-[#260617] hover:text-white rounded text-sm transition duration-300"
                  aria-label={`Escuchar a ${service.title}`}
                >
                  Escúchalos!
                </a>
              </article>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
