import React from "react";
import Image from "next/image";
export default function Description() {
  return (
    <section className="flex flex-wrap gap-x-10 gap-y-4  items-end justify-between px-2 py-4  max-w-[90rem]">
      <div className=" basis-96 grow shrink d ">
        <div className="flex flex-nowrap gap-2 items-center">
          <div className="h-12 w-12 relative mb-1">
            <Image
              src="/about/client.svg"
              layout="fill"
              priority="lazy"
              alt="server"
            />
          </div>
          <h3 className="text-4xl  font-morionBold tracking-wider">Frontend</h3>
        </div>
        <div className="grid">
          <div className=" d  flex flex-nowrap gap-2 items-center ">
            <div className="p-3  d rounded-full">
              <div className="relative h-12 w-12 md:h-16 md:w-16 lg:w-20 lg:h-20  ">
                <Image alt="" src="/about/html5.svg" layout="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-96 grow shrink  d">
        <div className="flex flex-nowrap gap-2 items-center">
          <div className="h-12 w-12 relative mb-1">
            <Image
              src="/about/server.svg"
              layout="fill"
              priority="lazy"
              alt="server"
            />
          </div>
          <h3 className="text-4xl  font-morionBold tracking-wider">Backend</h3>
        </div>
      </div>
    </section>
  );
}
