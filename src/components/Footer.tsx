import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 flex-between text-red-500 p-4 lg:px-20 xl:px-40">
      <Link href="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      <span>&copy; ALL RIGHTS RESERVED</span>
    </div>
  );
};

export default Footer;
