import { useInView } from "../hooks/useInView";
import rebell from "../img/rebel.png";
import jendrix from "../img/jendrix.png";
import revuelta from '../img/rev.png'

const sponsors = [
  {
    _id: "1",
    title: "Rebell Yell",
    imageUrls: rebell,
    link: "https://www.instagram.com/rebelyellmerchan/",
  },
  {
    _id: "2",
    title: "Jendrix bar",
    imageUrls: jendrix,
    link: "https://www.instagram.com/jendrix.rock.bar/",
  },
    {
    _id: "3",
    title: "Sala la revuelta",
    imageUrls: revuelta,
    link: "https://www.instagram.com/sala_la_revuelta/",
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
              className="hover:scale-105 transition duration-300 w-[130px] md:w-[200px]"
            >
              <img src={sp.imageUrls} alt={sp.title} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
