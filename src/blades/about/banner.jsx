import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import scrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(scrollTrigger);
export default function Banner() {
  let bannerRef = useRef();
  useEffect(() => {
    gsap.to(bannerRef, {
      scale: 0.8,
      scrollTrigger: {
        trigger: bannerRef,
        start: "top bottom",
        pin: true,
        toggleActions: "play pause resume  restart",
      },
    });
  });

  return (
    <>
      <div className="h-screen"></div>
      <div className="h-screen d " ref={(el) => (bannerRef = el)}>
        banner for about page
      </div>
    </>
  );
}
