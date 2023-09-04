import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";

const SingleProduct = () => {
  return (
    <main className="p-x-responsive h-fullscreen flex flex-col gap-4 justify-around md:flex-row md:items-center md:gap-8 text-red-500">
      {/* IMAGE CONTAINER */}
      <div className="relative w-full h-1/2 md:h-[70%]">
        <Image
          src={singleProduct.img}
          alt=""
          fill
          className="object-contain"
          sizes="(max-width: 767px) 100vw"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          options={singleProduct.options}
          id={singleProduct.id}
        />
      </div>
    </main>
  );
};

export default SingleProduct;
