import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white bg-opacity-30 sticky top-0 left-0 right-0 backdrop-blur-md border-b border-gray-300">
      <nav className="max-w-[120rem] mx-auto md:w-11/12  px-3 py-3 flex items-center justify-between gap-3">
        <div className="h-10 w-10 relative">
          <Image
            src="https://res.cloudinary.com/rakesh-gupta/image/upload/v1656403575/avatar_j2eqmj.svg"
            alt=""
            layout="fill"
            loading="eager"
          />
        </div>
        <div className="h-10 w-10 d ">
          <div className=""></div>
        </div>
      </nav>
    </header>
  );
}
