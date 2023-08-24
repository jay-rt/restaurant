import Link from "next/link";
import MobileMenu from "./MobileMenu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <nav className="h-12 md:h-24 text-red-500 p-4 flex-between border-b-2 border-b-red-500 uppercase lg:px-16 xl:px-40">
      {/** LEFT LINKS */}
      <div className="hidden flex-1 md:flex items-center gap-4">
        <Link href="/">HOME</Link>
        <Link href="/menu">MENU</Link>
        <Link href="/">CONTACT</Link>
      </div>
      {/** LOGO */}
      <div className="text-xl flex-1 md:text-center md:font-bold">
        <Link href="/">MASSIMO</Link>
      </div>
      {/** MOBILE MENU */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
      {/** RIGHT LINKS */}
      <div className="hidden flex-1 md:flex items-center justify-end gap-4">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:absolute top-3 right-2 lg:static">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 4567</span>
        </div>
        {user ? (
          <Link href="/orders">ORDER</Link>
        ) : (
          <Link href="/login">LOGIN</Link>
        )}
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
