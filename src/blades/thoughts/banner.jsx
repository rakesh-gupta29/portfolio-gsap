import design from "./styles/banner.module.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
export default function Banner({ bannerText }) {
  const textRef = useRef();
  let q = gsap.utils.selector(textRef);
  useEffect(() => {
    gsap.fromTo(
      q("div"),
      {
        opacity: 0,
        yPercent: 10,
      },
      {
        opacity: 1,
        yPercent: 0,

        duration: 0.5,
        stagger: {
          each: 0.1,
          from: "center",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className={design.banner}>
        <div className="grid place-content-center text-center px-3 py-8 md:py-16 min-w-full z-20">
          <div
            className="border-[5px] border-dark uppercase font-morionBold font-bold mx-auto px-8 pt-3 md:pt-4 pb-2 md:pb-3 text-2xl md:text-4xl lg:text-6xl tracking-widest lg:py-6 mb-1 md:mb-2 flex flex-nowrap"
            ref={textRef}
          >
            {bannerText.map((i, index) => {
              return <div key={index}>{i}</div>;
            })}
          </div>
          <span className="font-questa md:text-xl  lg:text-2xl capitalize">
            Collecton Of Blogs I Have Written.
          </span>
        </div>
      </div>
    </section>
  );
}
