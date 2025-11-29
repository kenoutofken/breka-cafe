import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

motion;

export function Locations() {
  gsap.registerPlugin(useGSAP);

  const [locations, setLocatioins] = useState([]);

  const container = useRef(null);
  const locationCard = useRef(null);

  const locationsData = "/data/locations.json";

  async function getData(url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.log("Network response was not ok");
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Fetch error:", error);
      return null;
    }
  }

  useEffect(() => {
    getData(locationsData).then((data) => {
      console.log("Locations Data:", data);
      setLocatioins(data);
    });
  }, []);

  useGSAP(() => {
    gsap.to(locationCard.current, {
      y: -20,
      boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.3)",
      duration: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: locationCard.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
    <section
      ref={container}
      id="locations"
      className="relative flex flex-col justify-center items-center w-full pt-64 py-12"
    >
      <div className="flex flex-col items-center max-w-[2500px] px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl 2xl:text-6xl text-header font-extrabold mb-6"
        >
          OUR LOCATIONS
        </motion.div>
        <div className="text-lg 2xl:text-3xl">
          Since 2006, we have opened {locations.length} locations across the
          city of Vancouver. Come and visit one of our locations below!
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full mt-12"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <div
                ref={locationCard}
                key={loc.id}
                className="flex flex-col justify-between rounded shadow-md bg-base-100 overflow-hidden"
              >
                <motion.img
                  src={loc.image}
                  alt={loc.name}
                  className="overflow-hidden aspect-square object-cover w-full"
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "ease", stiffness: 300 },
                  }}
                />
                <div className="p-6 relative z-10 bg-accent text-center">
                  <p className="text-3xl text-header mb-4">{loc.address}</p>
                  <p className="text-base text-black mb-4">{loc.phone}</p>
                  <span className="flex gap-4">
                    <button className="btn btn-primary rounded flex-1">
                      Order Online
                    </button>
                    <button
                      className="btn btn-outline rounded
                     flex-1"
                    >
                      View Map
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
