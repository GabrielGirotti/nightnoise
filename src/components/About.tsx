import { useInView } from "../hooks/useInView";

export default function About() {
  const { ref, isInView } = useInView(0.2); // 20% visible

  return (
    <section
      ref={ref}
      aria-labelledby="about-title"
      className={`flex flex-col items-center justify-center p-8 gap-12 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col justify-center items-center max-w-2xl">
        <p className="text-sm md:text-lg text-white text-justify">
          Prepárate para una noche donde el ritmo salvaje y la energía cruda se
          apoderan de la ciudad.{" "}
          <strong>Psychobilly, surf rock, garage y punk </strong> se encuentran
          en un mismo escenario para dar vida a un evento único en Alicante.
        </p>

        <p className="text-sm md:text-lg text-white text-justify mt-4">
          Guitarras furiosas, contrabajos vibrando en el pecho y voces que
          prenden fuego a la pista. No solo habrá{" "}
          <strong>bandas en directo</strong>, también contaremos con DJs que
          mantendrán la fiesta encendida hasta el último acorde y{" "}
          <strong>stands de ropa</strong> con el estilo que vibra en esta escena
          underground.
        </p>

        <p className="text-sm md:text-lg text-white text-justify mt-4">
          Un punto de encuentro para quienes viven la música sin filtros, sin
          etiquetas y con la pasión de siempre.
        </p>
      </div>
    </section>
  );
}
