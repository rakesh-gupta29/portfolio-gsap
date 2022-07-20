import React from "react";
import Image from "next/image";
export default function Blogcard() {
  return (
    <div className="basis-96 grow shrink font-averta">
      <div className="relative h-64 md:h-72 lg:h-96 w-full">
        <Image
          src="https://images.unsplash.com/photo-1649859394614-dc4f7290b7f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          layout="fill"
          loading="lazy"
          objectFit="center"
          className="rounded-md "
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold  pt-3 md:pt-5">
        this is a dummy title of secondary blog type
      </h3>
      <p className="md:text-lg pt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, atque!
        consectetur adipisicing elit. Maiores, atque!
      </p>
      <div className="flex flex-nowrap gap-2 items-center mt-3 text-sm">
        <span>React</span>
        <div className="h-1 w-1 rounded-full bg-dark"></div>

        <span>20 may 2022</span>
      </div>
    </div>
  );
}
