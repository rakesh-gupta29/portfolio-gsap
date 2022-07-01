import Head from "next/head";
import { BannerHome } from "../blades/home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerHome />
    </div>
  );
}