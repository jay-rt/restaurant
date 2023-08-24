import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="h-12 text-red-500 p-4 flex-between border-b-2 border-b-red-500 uppercase">
      {/** LOGO */}
      <div className="text-xl">
        <Link href="/">MASSIMO</Link>
      </div>
      {/** MOBILE MENU */}
      <div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
