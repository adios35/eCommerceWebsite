import blob from "../assets/blob.svg";
import heroImg from "../assets/hero.png";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <section
        className="heroSection flex h-screen h-auto w-screen flex-col-reverse justify-between overflow-hidden  bg-blue-300 sm:h-screen sm:flex-row "
        style={{
          background: `url(${blob})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col1 w-full px-10 sm:w-[40%]">
          <div className="title order-2 h-full w-full space-y-6 pl-20 pl-0 sm:py-[160px] md:pl-[20%]">
            <h1>Choose Your style</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              hic, veritatis amet aperiam vitae culpa obcaecati sit ducimus vel.
              ecto illum sed laboriosam
            </p>
            <button className="order-3 bg-gray-700 py-2 px-8 text-white">
              Buy Now
            </button>
            <div className="image-navigate order-1 flex max-w-[150px] justify-between text-5xl text-3xl text-gray-700">
              <TiChevronLeftOutline className="cursor-pointer hover:scale-105 active:scale-110" />
              <TiChevronRightOutline className="cursor-pointer hover:scale-105 active:scale-110" />
            </div>
          </div>
        </div>
        <div className="col2 w-full  sm:w-[60%]">
          <img
            className="heroLogin -mb-20 w-full min-w-[400px] bg-cover pt-10 sm:mb-0 sm:w-[650px]"
            src={heroImg}
            alt="heroImg"
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
