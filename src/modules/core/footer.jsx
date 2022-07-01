import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import scrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);
export default function Footer() {
  let footerRef = useRef();
  useEffect(() => {
    gsap.to(footerRef, {
      paddingTop: 300,
      scrollTrigger: {
        trigger: footerRef,
        start: "top 90%",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "play none none  reverse",
      },
    });
  }, []);

  return (
    <footer
      ref={(el) => (footerRef = el)}
      className=" min-h-screen bg-black  font-averta"
    >
      <div className="max-w-7xl md:w-11/12  mx-auto px-4  text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-8xl ">Get In Touch</h1>
        <h3 className=" text-2xl sm:text-3xl lg:text-4xl  leading-tight sm:leading-tight xl:leading-tight pt-6">
          I would love to collaborate with you. <br /> Let&apos;s connect.
        </h3>
        <div className=" flex flex-wrap items-start justify-between   pt-8 md:pt-16 gap-x-4 gap-y-10 ">
          <div className="basis-96 grow shrink grid gap-4">
            <a
              href="mailto:rakesh.blacksof@gmail.com"
              className="underline underline-offset-4 font-bold   text-xl sm:text-2xl lg:text-3xl"
            >
              rakesh.blacksof@gmail.com
            </a>
            <a
              className="text-xl xl:text-2xl lg:text-3xl "
              href="tel:6261173739"
            >
              +91 6261173739
            </a>
            <div className="text-opacity-70 text-white  text-lg sm:text-xl max-w-sm pt-2 ">
              Address: 202, ASH-12, Bapat Square near little millenium school,
              {"("}service lane{")"} Indore.
            </div>
          </div>
          <div className="basis-96 grow shrink flex flex-wrap items-around h-32 justify-start gap-4 ">
            <Link passHref href="https://www.blacksof.com/">
              <a className="basis-44 hover:underline">linkedin</a>
            </Link>
            <Link passHref href="https://www.blacksof.com/">
              <a className="basis-44 hover:underline">facebook</a>
            </Link>
            <Link passHref href="https://www.blacksof.com/">
              <a className="basis-44 hover:underline">github</a>
            </Link>
            <Link passHref href="https://www.blacksof.com/">
              <a className="basis-44 hover:underline">hackerrank</a>
            </Link>
            <Link passHref href="https://www.blacksof.com/">
              <a className="basis-44 hover:underline">awwards</a>
            </Link>
            <Link passHref href="https://www.blacksof.com/">
              <a className="basis-44 hover:underline">twitter</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
