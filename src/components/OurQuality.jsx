import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

motion;

export function OurQuality() {
  const [frame, setFrame] = useState(1);

  const qualitySection = useRef(null);

  gsap.registerPlugin(useGSAP);

  const donutFrame = String(frame).padStart(4, "0");

  useGSAP(() => {
    const state = { frame: 1 };
    gsap.to(state, {
      frame: 60,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: qualitySection.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      },
      onUpdate: () => {
        setFrame(state.frame);
      },
    });
  });

  return (
    <section
      ref={qualitySection}
      className="relative flex justify-center items-center w-full pt-32"
    >
      <div className="flex max-w-[2500px] px-6">
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col justify-center  basis-1/2"
        >
          <span className="text-4xl 2xl:text-6xl text-header mb-6">
            OUR QUALITY
          </span>
          <span className="text-lg 2xl:text-3xl leading-relaxed">
            At Breka, great baking begins long before a loaf hits the oven. When
            our family took over the historic German bakery that once stood at
            Fraser and 49th, we inherited more than a storefront—we inherited a
            craft. Many of the traditional methods and time-honoured recipes
            passed down from that bakery still guide how we make our breads,
            pastries, and signature treats today. From slow-fermented doughs to
            carefully sourced ingredients, we stay committed to the standards
            that gave the original bakery its charm, while continually refining
            our offerings for a new generation of Vancouverites. It’s a blend of
            heritage and freshness—made daily, around the clock.
          </span>
        </motion.div>
        <motion.div
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.6 }}
          className="basis-1/2 flex justify-center items-center"
        >
          <img src={`/images/donut/${donutFrame}.png`} className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
