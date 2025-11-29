import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      speed: 2,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <section className="max-w-[2500px] mx-auto flex flex-col px-6 pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl 2xl:text-6xl text-header text-center font-extrabold mb-6"
      >
        OUR COMMUNITY
      </motion.div>
      <div className="text-lg 2xl:text-3xl text-center">
        Tag your photos @brekabakery to be featured!
      </div>
      <section className="embla flex justify-center items-center w-full mt-12">
        <div ref={emblaRef} className="embla__viewport">
          <div className="embla__container gap-6 pl-6">
            <motion.div className="embla__slide overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                ease="easeInOut"
                src="/images/carousel/001.png"
                alt="Cafe"
              />
            </motion.div>
            <motion.div className="embla__slide overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                ease="easeInOut"
                src="/images/carousel/002.png"
                alt="Cafe"
              />
            </motion.div>
            <motion.div className="embla__slide overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/images/carousel/003.png"
                alt="Cafe"
              />
            </motion.div>
            <motion.div className="embla__slide overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                ease="easeInOut"
                src="/images/carousel/004.png"
                alt="Cafe"
              />
            </motion.div>
            <motion.div className="embla__slide overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/images/carousel/005.png"
                alt="Cafe"
              />
            </motion.div>
            <motion.div className="embla__slide overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                ease="easeInOut"
                src="/images/carousel/006.png"
                alt="Cafe"
              />
            </motion.div>
            <motion.div className="embla__slide overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                ease="easeInOut"
                src="/images/carousel/007.png"
                alt="Cafe"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}
