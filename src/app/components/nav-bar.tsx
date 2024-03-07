import Link from "next/link";
import React from "react";

const navigationLeft = [
  { name: "home", href: "/home" },
  { name: "about", href: "/about" },
];

const navigationRight = [
  { name: "work", href: "/work" },
  { name: "contact", href: "/contact" },
];

const NavBar: React.FC = () => {
  return (
    <nav className="flex absolute px-16 top-0 left-0 right-0 my-4 animate-fade-in duration-500 items-center justify-center">
      <div className="flex items-center w-full justify-between text-lg uppercase font-medium text-white ">
        <div className="flex items-center gap-8">
          {navigationLeft.map((item) => (
            <Link key={item.href} href={item.href}>
              <p className="text-l hover:text-zinc-300 mr-4">{item.name}</p>
            </Link>
          ))}
        </div>
        <p className="text-2xl">WILKER QUIRINO</p>
        <div className="flex items-center gap-8">
          {navigationRight.map((item) => (
            <Link key={item.href} href={item.href}>
              <p className="text-l hover:text-zinc-300 ml-4">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
