import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Locations } from "./components/Locations";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Locations />
    </>
  );
}

export default App;
