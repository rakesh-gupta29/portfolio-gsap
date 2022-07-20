import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="px-2 flex flex-wrap gap-10 justify-around items-end">
      <div className="basis-96 grow max-w-screen-md shrink">
        <h2 className="text-5xl leading-tight md:text-6xl lg:text-9xl font-morionBold px-6">
          Heading
        </h2>
        <h2 className="pl-10 md:pl-24 pb-4 text-5xl leading-tight md:text-6xl lg:text-9xl font-morionBold ">
          Text
        </h2>
        <p className="font-averta leading-normal lg:text-xl w-12/12 ml-auto md:w-10/12 max-w-screen-sm">
          I&apos;m a paragraph. Click here to add your own text and edit me.
          It&apos;s easy. Just click “Edit Text” or double click me to add your
          own content and make changes to the font. Feel free to drag and drop
          me anywhere you like on your page. I&apos;m a great place for you to
          tell a story and let your users know a little more about you.This is a
          great space to write long text about your company and your services.
          You can use this space to go into a little more detail about your
          company. Talk about your team and what services you provide. Tell your
          visitors the story of how you came up with the idea for your business
          and what makes you different from your competitors. Make your company
          stand out and show your visitors who you are.
        </p>
      </div>
      <div className=" basis-[30rem] grow-0 shrink ">
        <div className="max-w-screen-md relative md:h-[30rem] lg:h-[40rem] h-[25rem] mx-auto">
          <Image
            src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            layout="fill"
            loading="eager"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </section>
  );
}
