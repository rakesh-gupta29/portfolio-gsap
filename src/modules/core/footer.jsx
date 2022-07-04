import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form cb");
  };
  const Accordion = ({ title, body, checkedHeight }) => {
    return (
      <label className="basis-[35rem] grow-0 shrink">
        <input type="checkbox" className="peer hidden" />
        <div className="flex flex-nowrap justify-between items-center gap-4 pl-3 pr-4 border-b border-gray hover:text-opacity-100 text-opacity-80 text-white  py-3  cursor-pointer mt-10">
          <span className="font-questa text-[22px]">{title} </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 peer-checked:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <div className="peer-checked:h-28 px-3 py-0  transition-all duration-150 ease-linear bg-gray bg-opacity-30 text-white  overflow-hidden  text-lg h-0  peer-checked:py-2 font-averta text-opacity-80">
          {body}
        </div>
      </label>
    );
  };

  const SocialIcon = ({ src, target }) => {
    return (
      <Link passHref href={target}>
        <a className="rounded-full bg-smoke p-1 bg-opacity-80">
          <div className="relative h-6 w-6">
            <Image src={src} alt="social-links" layout="fill" loading="lazy" />
          </div>
        </a>
      </Link>
    );
  };
  return (
    <>
      <section className="bg-dark py-12">
        <section className=" text-white  min-h-screen py-24  px-4 h-full">
          <h1 className=" font-morion  pb-16 tracking-widest md:text-5xl text-3xl text-center ">
            FAQs
          </h1>
          <div className="flex  justify-around flex-wrap  gap-x-8 max-w-7xl   mx-auto">
            <div className="basis-[30rem] grow-0 shrink">
              <Accordion
                title="this is title "
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam odit, corrupti iusto fugiat itaque rerum nulla eligendi in repellat!"
              />
              <Accordion
                title="this is title "
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam odit, corrupti iusto fugiat itaque rerum nulla eligendi in repellat!"
              />
              <Accordion
                title="this is title "
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam odit, corrupti iusto fugiat itaque rerum nulla eligendi in repellat!"
              />
            </div>
            <div className="basis-[30rem] grow-0 shrink">
              <Accordion
                title="this is title "
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam odit, corrupti iusto fugiat itaque rerum nulla eligendi in repellat!"
              />
              <Accordion
                title="this is title "
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam odit, corrupti iusto fugiat itaque rerum nulla eligendi in repellat!"
              />
              <Accordion
                title="this is title"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam odit, corrupti iusto fugiat itaque rerum nulla eligendi in repellat!"
              />
            </div>
          </div>
        </section>
      </section>
      <footer className=" bg-smoke px-4">
        <section className=" max-w-[120rem]  md:w-11/12 mx-auto flex flex-wrap justify-between border-b border-dark  py-6 md:py-10">
          <div className="bg-dark text-white grow shrink basis-[26rem] pt-10 pb-32 px-10  border border-black">
            <h2 className="font-morionBold text-4xl pb-3 leading-snug">
              Want To Collaborate <br />
              with Me.
            </h2>
            <h3 className="font-averta text-xl leading-7 w-10/12 ">
              With all the latest episodes, news and recipes. Subscribe to our
              newsletter.
            </h3>
            <div className="grid gap-2 mt-8 text-xl  font-averta">
              <h3>rakesh.gupta29@gmail.com</h3>
              <h3>+91 1234567890 </h3>
              <h3>Indore , M.P.</h3>
            </div>
            <div className="flex flex-nowrap gap-5 items-center mt-10">
              <SocialIcon
                src="/icons/linkedin.svg"
                target="https://www.github.com"
              />
              <SocialIcon
                src="/icons/github.svg"
                target="https://www.github.com"
              />
              <SocialIcon
                src="/icons/insta.svg"
                target="https://www.github.com"
              />
              <SocialIcon
                src="/icons/twitter.svg"
                target="https://www.github.com"
              />
              <SocialIcon
                src="/icons/leetcode.svg"
                target="https://www.github.com"
              />
            </div>
          </div>
          <div className="text-dark grow-[3] shrink basis-[26rem] border border-black py-10 px-4 ">
            <div className="md:w-10/12  mx-auto px-3">
              <h1 className="font-morionBold text-5xl pb-3 leading-snug">
                Get In Touch
              </h1>
              <form
                onSubmit={handleSubmit}
                noValidate
                className=" flex flex-col flex-nowrap gap-8 "
              >
                <div className="flex flex-nowrap gap-10">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border-b border-dark outline-none focus:border-blue text-dark text-lg font-questa p-2 bg-transparent flex-1 focus:text-blue  "
                    size="2"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border-b border-dark outline-none focus:border-blue text-dark text-lg font-questa p-2 bg-transparent flex-1  focus:text-blue "
                    size="2"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border-b border-dark outline-none focus:border-blue text-dark text-lg font-questa p-2 bg-transparent flex-1 focus:text-blue  "
                  size="2"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="10"
                  rows="5"
                  className="border-b border-dark outline-none focus:border-blue text-dark text-lg font-questa p-2 bg-transparent flex-1  resize-none focus:text-blue"
                  placeholder="Enter Some Message"
                ></textarea>
                <button
                  type="submit"
                  className="bg-black text-white font-morion text-2xl ml-auto py-3 px-14 border  hover:border-dark hover:bg-white hover:text-black transition-colors duration-200 "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="grid  place-content-center gap-4 text-center sm:py-6 py-4">
          <span>&copy; All Rights Reserved</span>
          <h5 className="whitespace-nowrap flex flex-nowrap gap-1">
            Created with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokLinecap="round"
                strokelinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            and Next.js by Rakesh Gupta
          </h5>
        </section>
      </footer>
    </>
  );
}
