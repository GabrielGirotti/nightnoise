import { useInView } from "../hooks/useInView";
import rebell from "../img/rebel.png";
import revuelta from "../img/rev.png";
import cool from "../img/cool.png";
import poli from "../img/poli.png";
import tat from "../img/tat.png";
import pop from "../img/pop.png";

const sponsors = [
  {
    _id: "1",
    title: "Mr Cool Craft Beer",
    imageUrls: cool,
    link: "https://www.instagram.com/mrcoolcatcraftbeer/",
  },
  {
    _id: "2",
    title: "Rebell Yell",
    imageUrls: rebell,
    link: "https://www.instagram.com/rebelyellmerchan/",
  },

  {
    _id: "3",
    title: "Sala la revuelta",
    imageUrls: revuelta,
    link: "https://www.instagram.com/sala_la_revuelta/",
  },
  {
    _id: "4",
    title: "La Poligonera",
    imageUrls: poli,
    link: "",
  },
    {
    _id: "5",
    title: "Think Tattoo",
    imageUrls: tat,
    link: "https://www.instagram.com/think_tattoo_alicante/",
  },
      {
    _id: "6",
    title: "Poppins",
    imageUrls: pop,
    link: "https://www.instagram.com/poppins7776/",
  },
];
export default function Sponsors() {
  const { ref, isInView } = useInView(0.2); // 20% del componente visible
  return (
    <section
      ref={ref}
      id="auspician"
      className={`flex  flex-col items-center justify-center p-8 gap-12 transition-all duration-1000 mt-4 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="underline-effect-title text-5xl">auspician</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {sponsors.map((sp) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              id={sp._id}
              key={sp._id}
              href={sp.link}
              className="hover:scale-105 transition duration-300 w-[130px] md:w-[150px]"
            >
              <img src={sp.imageUrls} alt={sp.title} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
