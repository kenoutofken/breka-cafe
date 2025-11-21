import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MapPinIcon, PhoneArrowDownLeftIcon } from "@heroicons/react/16/solid";

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
      className="relative flex flex-col justify-center w-full min-h-screen py-12"
    >
      <div className="px-6">
        <div className="text-4xl font-bold mb-4">Locations</div>
        <div className="text-lg">
          Since 2006, we have opened {locations.length} locations across the
          city of Vancouver. Come and visit one of our locations below!
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
        {locations.map((loc) => (
          <li
            ref={locationCard}
            key={loc.id}
            className="bg-white rounded-lg shadow-md"
          >
            <img
              src="/images/cafe2.png"
              alt={loc.name}
              className="mb-4 rounded"
            />
            <div className="px-6 pb-6 text-center">
              <p className="text-xl font-bold">{loc.address}</p>
              <p className="text-base text-black mb-4">{loc.phone}</p>
              <span className="flex gap-4">
                <button className="btn btn-outline flex-1">Order Online</button>
                <button className="btn btn-outline flex-1">View Map</button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
