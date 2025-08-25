import { useInView } from "../hooks/useInView";

function Home() {
  const { ref, isInView } = useInView(0.2); // 20% del componente visible

  return (
    <section
      ref={ref}
      id="bandas"
      aria-labelledby="bandas-title"
      className={`flex flex-col items-center justify-center p-8 gap-12 transition-all duration-1000 mt-4 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col justify-center">
        <h2 id="bandas-title" className="underline-effect-title text-5xl">
          Bandas en vivo
        </h2>
      </div>
    </section>
  );
}

export default Home;
