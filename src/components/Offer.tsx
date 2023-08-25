import Image from "next/image";
import CountDownTimer from "./CountDown";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="h-screen bg-black flex flex-col md:flex-row md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex-center flex-col gap-8 p-6 text-center">
        <h1 className="text-red-500 text-4xl sm:text-5xl xl:text-6xl font-bold">
          Delicious Burger & French Fry
        </h1>
        <p className="text-red-500 text-sm sm:text-base">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button
          type="button"
          className="bg-red-500 text-white rounded-md py-3 px-6"
        >
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative w-100 flex-1">
        <Image
          src="/offerProduct.png"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
