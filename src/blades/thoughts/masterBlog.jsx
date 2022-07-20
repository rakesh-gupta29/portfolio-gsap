import Image from "next/image";
export default function MasterBlog() {
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap py-8 md:py-16">
      <div className="basis-[26rem] grow shrink h-[17rem] md:h-[19rem] lg:h-[22rem] p-2 bg-gray-50">
        <div className="relative h-full w-full ">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            layout="fill"
            loading="eager"
          />
        </div>
      </div>
      <div className=" flex flex-col items-start gap-2  md:gap-4 basis-96 grow-[10] shrink py-1 md:py-6 md:px-10 bg-gray-50 px-2 font-averta">
        <h3 className="border-b-[3px] border-black md:py-1 px-1 md:text-xl">
          Editor&apos;s Choice
        </h3>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-averta font-bold pb-1">
          this is title of this mater blog and the idea is to get started
        </h1>
        <h3 className="md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          totam labore rem vel ex sit maxime consequuntur eum cum. Quo
          distinctio quidem a quis inventore, est sint omnis enim molestiae!
        </h3>
        <div className="flex flex-nowrap  text-sm items-center pt-2 gap-2 font-averta">
          <p>June 29,2022</p>
          <div className="h-1 w-1 rounded-full bg-dark"></div>
          <p>3 Min Read </p>
        </div>
      </div>
    </div>
  );
}
