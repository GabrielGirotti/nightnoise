import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import HeroBanner from "./components/HeroBanner";

import Footer from "./components/Footer";
import bg from "./img/bg.png";
import n1 from "./img/n1.png";
import Home from "./components/Home";
import HeroSlider from "./components/HeroSlider";
import Sponsors from "./components/Sponsors";

function App() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Activar animación después de montar
    setFadeIn(true);
  }, []);

  return (
    <Router>
      <div
        className={`bg-[url(${bg})] relative bg-cover bg-center transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={n1}
          className=" absolute top-0 right-0 opacity-0 max-w-[90dvw] md:opacity-50 -z-10"
        />
        <Navbar />

        <About />

        <HeroBanner />

        <Home />

        <HeroSlider />
        <Sponsors />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
