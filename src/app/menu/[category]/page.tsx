import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  return (
    <main className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        //SINGLE ITEM
        <Link
          href={`/products/${item.id}`}
          key={item.id}
          className="w-full h-[60vh] p-4 flex flex-wrap border-b-2 border-r-2 border-red-500 sm:w-1/2 lg:w-1/3 odd:bg-fuchsia-50 group"
        >
          {/* IMAGE CONTAINER */}
          <div className="relative w-full h-[80%]">
            <Image
              src={item.img}
              alt=""
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (min-width: 1024px) 33.33vw"
              className="object-contain"
            />
          </div>
          {/* TEXT CONTIANER */}
          <div className="w-full flex-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button
              type="button"
              className="hidden group-hover:block bg-red-500 text-white p-2 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default CategoryPage;
