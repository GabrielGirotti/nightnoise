import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import dk from "../img/dk.jpg";
import tv from "../img/tv.jpg";
import st from "../img/st.jpg";
import boom from "../img/boom.jpg";

const imgs = [
  {
    _id: "1",
    title: "Donkey Kick",
    imageUrls: [dk],
    description:
      "Nacidos en Benidorm combinando la energía del punk con el psychobilly más crudo.",
    link: "https://donkey-kick.netlify.app/",
  },
  {
    _id: "2",
    title: "Terror V",
    imageUrls: [tv],
    description:
      "Rock'n'roll con influencias de punk, metal y psychobilly, directo desde Mallorca.",
    link: "https://open.spotify.com/intl-es/artist/3NPRlewsgVoosH03q65cP3?si=rwTyho_oSXqJvYZTE5BSQg",
  },
  {
    _id: "3",
    title: "Swamp Things",
    imageUrls: [st],
    description: "Desde Tarragona con influencias Rockabilly, Garage, Punkrock y Psychobilly",
    link: "https://open.spotify.com/intl-es/artist/1Ez2hYvDzfG3TrscjY2GW3?si=5hWne8A5RMuF_nmNJxA-3Q",
  },
  {
    _id: "4",
    title: "Los Boompats",
    imageUrls: [boom],
    description:
      "Dúo de garage 60s directamente desde Alcoi.",
    link: "https://losboompats.bandcamp.com/album/los-boompats-cantan-en-ingl-s",
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
        className="w-full h-[80vh] sm:h-[80vh] lg:h-[95vh]"
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
                  className=" w-28 text-black font-bold p-3 py-2 bg-[#ffe79c] hover:bg-[#000000] hover:text-white rounded text-sm transition duration-300"
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
