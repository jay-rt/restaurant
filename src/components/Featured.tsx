import { featuredProducts } from "@/data";
import Image from "next/image";

const Featured = () => {
  return (
    //making scroll bar hidden for chrome, safari, edge and firefox
    <div className="w-screen overflow-x-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around gap-4 p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative w-full flex-1 hover:rotate-[60deg] transition-all duration-300">
              <Image
                src={product.img}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, (min-width: 1280px) 33vw "
                className="object-contain"
              />
            </div>
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex-center flex-col gap-4 text-red-500">
              <h1 className="font-bold text-xl uppercase xl:text-2xl">
                {product.title}
              </h1>
              <p className="text-sm sm:text-base text-center p-4 2  xl:p-8">
                {product.desc}
              </p>
              <span className="font-bold text-xl">${product.price}</span>
              <button
                type="button"
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
