import { menu } from "@/data";
import Link from "next/link";

const Menu = () => {
  return (
    <main className="p-x-responsive h-fit-screen flex items-center flex-col md:flex-row">
      {menu.map((category) => (
        //SINGLE CATEGORY
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 md:h-2/3 xl:h-[80%] p-8 bg-cover"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          {/* TEXT CONTAINER */}
          <div
            //mentioning tailwind dynamic classes value in comment to compile it
            //text color can be text-white or text-black
            className={`w-1/2 h-full text-${category.color} flex flex-col justify-between`}
          >
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm py-4">{category.desc}</p>
            <button
              //background color can be bg-black or bg-white
              type="button"
              className={`hidden xl:block  bg-${category.color} text-${
                category.color === "black" ? "white" : "red-500"
              } 
              py-2 px-4 rounded-md
              `}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Menu;
