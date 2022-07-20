import Head from "next/head";
import { BannerAbout, DescriptionAbout } from "../blades/about";
export default function About() {
  return (
    <div className="max-w-[90rem] mx-auto lg:py-24 md:py-10  py-6">
      <Head>
        <title>about page </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <BannerAbout /> */}
      <DescriptionAbout />
    </div>
  );
}
