import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef, useEffect } from "react";
export default function Banner() {
  let containerRef = useRef();
  const q = gsap.utils.selector(containerRef);
  useEffect(() => {
    // gsap.utils.toArray(q("section")).forEach((panel, i) => {
    //   let tl = gsap.timeline();
    //   let r = gsap.utils.selector(panel);
    //   tl.fromTo(
    //     r("h3"),
    //     {
    //       opacity: 1,
    //     },
    //     {
    //       opacity: 0,
    //       scrollTrigger: {
    //         trigger: panel,
    //         start: "top top",
    //         end: "+=1000",
    //         scrub: true,
    //         pinSpacing: "100%",
    //         pin: true,
    //       },
    //     }
    //   );
    //   tl.to("body", { duration: 1 });
    //   tl.fromTo(
    //     r(".hide"),
    //     {
    //       opacity: 1,
    //     },
    //     {
    //       opacity: 0,

    //       scrollTrigger: {
    //         trigger: panel,
    //         start: "top top",
    //         end: "+=1000",
    //         scrub: true,
    //         pinSpacing: "100%",
    //         pin: true,
    //       },
    //     }
    //   );
    //   return tl;
    // });

    gsap.utils.toArray(q("section")).forEach((panel, i) => {
      console.log(panel);
    });
  }, []);

  return (
    <section className=" " ref={containerRef}>
      <div className="h-screen"></div>
      <section className="h-screen  grid place-content-center ">
        <h3 className="text-5xl font-morion spaced-text leading-normal max-w-screen-sm">
          Lorem ipsum dolor <span className="hide"> sit, amet</span> consectetur
          adipisicing elit. <span className="hide">Dolorem,</span> distinctio!
        </h3>
      </section>
      <section className="h-screen  grid place-content-center ">
        <h3 className="text-5xl font-morion spaced-text leading-normal max-w-screen-sm">
          Lorem ipsum dolor <span className="hide"> sit, amet</span> consectetur
          adipisicing elit. <span className="hide">Dolorem,</span> distinctio!
        </h3>
      </section>
      <section className="h-screen  grid place-content-center ">
        <h3 className="text-5xl font-morion spaced-text leading-normal max-w-screen-sm">
          Lorem ipsum dolor <span className="hide"> sit, amet</span> consectetur
          adipisicing elit. <span className="hide">Dolorem,</span> distinctio!
        </h3>
      </section>
      <section className="h-screen  grid place-content-center ">
        <h3 className="text-5xl font-morion spaced-text leading-normal max-w-screen-sm">
          Lorem ipsum dolor <span className="hide"> sit, amet</span> consectetur
          adipisicing elit. <span className="hide">Dolorem,</span> distinctio!
        </h3>
      </section>
    </section>
  );
}
