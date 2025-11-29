import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { OurQuality } from "./components/OurQuality";
import { Locations } from "./components/Locations";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurQuality />
      <Locations />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
