import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useLayoutEffect, useRef } from "react";
export default function Banner() {
  let elem = useRef();
  let elem2 = useRef();
  let elem3 = useRef();

  let q = gsap.utils.selector(elem);
  useEffect(() => {
    gsap.fromTo(
      q("div"),
      {
        yPercent: 10,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.3,
        stagger: {
          each: 0.05,
          from: "center",
          grid: "auto",
        },
      }
    );
  }, [q]);
  useEffect(() => {
    gsap.to(elem3, {
      width: "130vw",
      height: "130vw",
      scrollTrigger: {
        trigger: elem2,
        end: "+=150%",
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  }, []);
  return (
    <>
      {/* <div
        ref={elem}
        className="flex flex-wrap  justify-center gap-1 max-w-7xl  mx-auto px-2 pb-24"
      >
        <div className="h-10 w-10  text-5xl font-averta font-bold">T</div>
        <div className="h-10 w-10  text-5xl font-averta font-bold">R</div>
        <div className="h-10 w-10  text-5xl font-averta font-bold">O</div>
        <div className="h-10 w-10  text-5xl font-averta font-bold">J</div>
        <div className="h-10 w-10  text-5xl font-averta font-bold">E</div>
        <div className="h-10 w-10  text-5xl font-averta font-bold">C</div>
        <div className="h-10 w-10  text-5xl font-averta font-bold">T</div>
        <div className="h-10 w-10  text-5xl font-averta font-bold">S</div>
      </div> */}
      <div className="d text-3xl font-questa  text-dark max-w-screen-xl px-4  mx-auto d ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, saepe.
        Beatae doloremque deleniti modi iusto impedit molestiae quos harum sit
        architecto officia tenetur at fuga, ab veniam. Recusandae natus, quia et
        atque odio,{" "}
        <span className="  bg-gradient-to-r from-red to-red bg-size-zero bg-no-repeat transition-all duration-500">
          voluptatibus quisquam eum libero suscipit impedit
        </span>
        voluptatibus quisquam eum libero suscipit impedit sed nobis modi quas
        accusamus sint repellendus obcaecati. Quia ipsam esse quos, saepe
        laborum aliquid magnam eveniet, libero inventore, earum temporibus
        accusamus voluptatem animi quas? Blanditiis saepe alias, consectetur
        accusamus sed itaque. Consequatur error consequuntur, asperiores itaque
        necessitatibus quod molestiae natus, expedita omnis nobis possimus iusto
        pariatur reiciendis tempora eos laudantium minima provident dolorum quae
        tenetur cupiditate sit. Quam, voluptatum vel?
      </div>
      <div className="h-screen"></div>
      <div
        ref={(el) => (elem2 = el)}
        className="h-screen grid place-content-center place-items-center overflow-hidden"
      >
        <div
          ref={(el) => (elem3 = el)}
          className="h-0  rounded-[50%] w-0 bg-black"
        ></div>
      </div>
      <div className="h-screen   bg-red d "></div>
    </>
  );
}
