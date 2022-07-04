import { Transition } from "react-transition-group";
import { gsap } from "gsap";
import { useRef } from "react";

const modalLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Thoughts",
  "Contact",
];
export default function Modal({ active, handler }) {
  let el = useRef();
  let q = gsap.utils.selector(el);

  function animation(node) {
    let tl = gsap.timeline();
    tl.fromTo(node, { yPercent: -100 }, { yPercent: 0, duration: 0.5 });
    tl.fromTo(
      q(".borders"),
      { width: 0 },
      { width: "100%", duration: 0.5, stagger: 0.15 }
    );
    tl.fromTo(
      q(".text"),
      { opacity: 0, yPercent: 10 },
      { opacity: 1, yPercent: 0, duration: 0.7, delay: 0.5 },
      "<"
    );
    return tl;
  }

  function enter(node) {
    return animation(node).play();
  }
  function exit(node) {
    return animation(node).reverse(0);
  }

  const NavLink = ({ text, serial }) => {
    return (
      <div className="group overflow-hidden cursor-pointer">
        <div className="px-7 py-8 text-2xl font-morion tracking-wide text">
          <sup className="pr-2">{serial}</sup>
          <span>{text}</span>
        </div>
        <div className="h-[2px] bg-gray borders ">
          <div className="bg-white w-0 h-full group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>
    );
  };

  return (
    <Transition
      mountOnEnter
      unmountOnExit
      onEnter={enter}
      onExit={exit}
      in={active}
      timeout={2000}
    >
      <div
        ref={el}
        className="text-white bg-black absolute top-0 left-0 right-0 pb-2 min-h-screen "
      >
        <button
          onClick={handler}
          className=" ml-auto rounded-full h-12 w-12 p-1   flex  mr-4 my-4 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 p-1 hover:bg-red rounded-full hover:stroke-black stroke-white "
            viewBox="0 0 24 24"
            stroke="inherit"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {modalLinks.map((i, index) => {
          return <NavLink text={i} key={index} serial={index} />;
        })}
      </div>
    </Transition>
  );
}
