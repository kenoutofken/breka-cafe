import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const container = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const scrollRef = useRef(null);
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "0% 0%",
          end: "100%",
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      tl.to(scrollRef.current, { opacity: 0, duration: 0.5 });

      // 1️⃣ Width animation uses 50% of timeline
      tl.fromTo(
        heroRef.current,
        {
          width: "100vw",
        },
        {
          width: "2500px",
          ease: "none",
          duration: 0.5, // 50% of timeline
        },
        0
      );

      // 2️⃣ Dummy tween to fill the remaining 50%
      tl.to({}, { duration: 0.5 });

      tl.to(heroRef.current, {}, 0.5);

      // Image: zoom + move, anchored on the left-center
      tl.fromTo(
        imgRef.current,
        {
          width: "100%",
          height: "100vh",
          paddingLeft: "0px",
        },
        {
          width: "50%",
          height: "70vh",
          ease: "none",
          paddingLeft: "24px",
        },
        0
      );

      // Text: fade in next to it
      tl.fromTo(
        textRef.current,
        { opacity: 0 },
        { opacity: 1, ease: "none" },
        0.5 // start
      );

      // End the opacity at 0.5 progress
      tl.to(
        textRef.current,
        { opacity: 1, ease: "none" },
        1 // end time of the fade
      );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="flex justify-center items-center w-screen bg-base-200 overflow-hidden"
    >
      <div ref={heroRef} className="flex gap-6 items-center">
        <div ref={imgRef} className="flex-shrink-0 w-full">
          <img
            src="/images/cafe.jpg"
            className="shadow-2xl object-cover w-full h-full"
          />
        </div>

        <div
          ref={textRef}
          className="flex flex-col gap-6 items-start justify-center w-1/2"
        >
          <div className="text-4xl 2xl:text-6xl text-header font-extrabold">
            ALWAYS WELCOMING
          </div>
          <p className="text-lg 2xl:text-3xl max-w-[80%]">
            Step inside and experience the warmth of our café. From freshly
            prepared pastries to handcrafted espresso, we’re here to make every
            visit feel inviting and familiar. Relax, work, or unwind — our space
            is designed for connection, comfort, and great flavour.
          </p>
          <button className="btn btn-lg btn-primary 2xl:btn-xl">
            Order Online
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          ref={scrollRef}
          className="absolute bottom-0 w-full h-[20%] flex flex-col items-center justify-end text-center text-xl text-white bg-gradient-to-b from-black/0 to-black/80 pb-6"
        >
          Scroll Down
          <ArrowDownCircleIcon className="h-8 w-8" />
        </motion.div>
      </div>
    </section>
  );
}
