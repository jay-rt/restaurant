"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

type MenuLink = {
  id: number;
  title: string;
  url: string;
};

const links: MenuLink[] = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //TEMPORARY
  const user = false;
  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Image
        src={menuOpen ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={17}
        onClick={handleMenu}
      />
      {menuOpen && (
        <div className=" bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex-center flex-col gap-8 text-3xl z-10">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          {user ? (
            <Link href="/orders" onClick={() => setMenuOpen(false)}>
              ORDERS
            </Link>
          ) : (
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              LOGIN
            </Link>
          )}
          <Link href="/cart" onClick={() => setMenuOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
