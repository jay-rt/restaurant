"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type SliderData = {
  id: number;
  title: string;
  image: string;
};

const data: SliderData[] = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //     2000
  //   );
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] bg-fuchsia-50">
      {/** TEXT CONTAINER */}
      <div className="flex-1 flex-center flex-col gap-8 font-bold">
        <h1 className="text-red-500 text-center p-4 md:p-10 text-4xl md:text-5xl lg:text-6xl uppercase">
          {data[currentSlide].title}
        </h1>
        <button type="button" className="bg-red-500 text-white py-4 px-8">
          Order Now
        </button>
      </div>
      {/** IMAGE CONTAINER */}
      <div className="flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          sizes="(max-width: 1023px) 100vw, (min-width: 1024px) 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
