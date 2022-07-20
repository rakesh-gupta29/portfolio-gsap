import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Modal } from "../overlay";

export default function Header() {
  const [isActive, setActive] = useState(false);

  const toggleState = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className="max-w-[120rem] fixed left-0 top-0 right-0 bg-white bg-opacity-80 backdrop-blur-md">
        <nav className=" py-3 px-4 flex items-center justify-between gap-10 flex-nowrap md:w-11/12 mx-auto">
          <div className="relative h-12 w-12">
            <Image
              src="https://res.cloudinary.com/rakesh-gupta/image/upload/v1656403575/avatar_j2eqmj.svg"
              alt="logo"
              layout="fill"
              loading="eager"
            />
          </div>
          <div>
            <div className=" flex-nowrap gap-3  items-center justify-end hidden md:flex">
              <Link passHref href="/about">
                <a className="px-2 font-averta text-slate-800 text-xl hover:text-blue">
                  About
                </a>
              </Link>
              <Link passHref href="/skills">
                <a className="px-2 font-averta text-slate-800 text-xl hover:text-blue">
                  Skills
                </a>
              </Link>
              <Link passHref href="/thoughts">
                <a className="px-2 font-averta text-slate-800 text-xl hover:text-blue">
                  Thoughts
                </a>
              </Link>
              <Link passHref href="/projects">
                <a className="px-2 font-averta text-slate-800 text-xl hover:text-blue">
                  Projects
                </a>
              </Link>
              <Link passHref href="/contact">
                <a className="px-2 font-averta text-slate-800 text-xl hover:text-blue">
                  Contact
                </a>
              </Link>
            </div>
            <button
              className="p-2 rounded-full stroke-black hover:stroke-white hover:bg-black md:hidden block"
              onClick={toggleState}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="inherit"
                viewBox="0 0 24 24"
                stroke="inherit"
                className="h-8 w-8 "
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <Modal handler={toggleState} active={isActive} />
    </>
  );
}
