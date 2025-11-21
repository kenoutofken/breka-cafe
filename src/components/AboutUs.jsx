import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function AboutUs() {
  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

  const container = useRef();
  const imgRef = useRef();
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const overlayRef = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          markers: false,
          pin: true,
        },
      });

      tl.to(imgRef.current, {
        width: "100vw",
        height: "100vh",
        paddingLeft: 0,
        paddingRight: 0,
        transformOrigin: "top center",
        ease: "none",
        duration: 0.1,
      });

      tl.to(overlayRef.current, { opacity: 0.5, ease: "none", duration: 0.2 });

      tl.fromTo(
        textRef.current,
        {
          autoAlpha: 0, // opacity + visibility
        },
        {
          autoAlpha: 1,
          ease: "none",
          duration: 0.1, // next 10% of the scrub
        },
        0.3 // start when the image tween ends
      );

      // Fade text 1 out
      tl.to(textRef.current, { autoAlpha: 0, y: -500, duration: 0.1 });

      // Fade text 2 in
      tl.fromTo(
        textRef2.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "none", duration: 0.1 },
        ">0" // start immediately after previous
      );

      // Fade text 2 out

      tl.to(textRef2.current, { autoAlpha: 0, y: -500, duration: 0.1 });

      // Fade text 3 in

      tl.fromTo(
        textRef3.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "none", duration: 0.1 },
        ">0" // start immediately after previous
      );

      // Hold text 3
      tl.to(textRef3.current, { autoAlpha: 0, y: -500, duration: 0.1 });

      tl.to(overlayRef.current, { opacity: 0, ease: "none", duration: 0.2 });

      return () => tl.kill();
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <section
      ref={container}
      className="relative flex justify-center w-full min-h-screen"
    >
      <div className="text-start w-full flex justify-center">
        <div
          ref={overlayRef}
          className="bg-black opacity-0 absolute z-10 inset-0"
        ></div>
        <div ref={imgRef} className="w-full max-w-[2500px] h-[50vh] px-6">
          <img src="/images/cafe3.png" className="object-cover w-full h-full" />
        </div>
      </div>

      <div
        ref={textRef}
        className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80%] text-white"
      >
        <h2 className="text-4xl font-extrabold mb-4">A VANCOUVER FAVOURITE</h2>
        <p className="text-lg mb-4">
          Breka Bakery & Cafe is a local family business born in 2006 at Fraser
          and 49th, in the lively neighbourhood of Sunset. We took over a
          well-established German bakery and have stayed true to its roots,
          while expanding its offer. Our “Bienenstich”, family sized apple
          strudel and freshly baked artisan rye breads (among others) are still
          made following some of the original recipes.
        </p>
        <p className="text-lg">
          Regularly voted among Vancouver’s best bakeries and cafes, Breka’s
          reputation has always been based on word-of-mouth: thanks to
          Vancouverites and visitors alike, it is traveling around the clock at
          the speed of "kuffles" and has long spread beyond the borders of our
          original Sunset neighbourhood.
        </p>
      </div>

      <div
        ref={textRef2}
        className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80%] text-white"
      >
        <p className="text-lg mb-4">
          High-quality beverages, breads, donuts, pastries, sandwiches, cakes,
          cookies and more can now be found – 24 hours a day, 7 days a week, 365
          days a year – at each of our 8 locations on Fraser Street, Bute
          Street, Davie Street, West 4th Avenue, Denman Street, Main Street,
          West Hastings Street and East Hastings Street.
        </p>
        <p className="text-lg mb-4">
          Aside from being a local favourite spot for enjoying the company of
          friends (and treats!), we offer catering for all your gatherings and
          celebrations. Breka has even become a prominent feature behind the
          scenes for many movie crews in what is also known as “Hollywood
          North”. Our coffee to go carriers and personalised platters are
          perfect to fuel a movie set, but also a baby shower, birthday party —
          or a work meeting!
        </p>
      </div>

      <div
        ref={textRef3}
        className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80%] text-white"
      >
        <p className="text-lg mb-4">
          Whether you're a long-time regular at our original store on Fraser or
          a new customer at one of our other five locations, we’re here for all
          your sweet or savoury cravings — it doesn’t matter if it’s midnight or
          during the middle of your day.
        </p>
        <p className="text-lg mb-4">We’re always happy to see you!</p>
        <p>
          <em>With lots of love,</em>
          <br /> The Breka Family
        </p>
      </div>
    </section>
  );
}
