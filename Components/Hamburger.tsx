"use client";
import { NavLinks } from "@/Constants";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex-1 flexStart gap-10">
      <div className="flexStart gap-x-5">
        <button
          className="flex flex-col h-9 w-5 rounded justify-center group lg:hidden focus-visible:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300 ${
              isOpen
                ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300 ${
              isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`h-1  my-0.5 rounded-full bg-black transition ease transform duration-300 ${
              isOpen
                ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100 w-6"
                : "opacity-50 group-hover:opacity-100 w-3"
            }`}
          />
        </button>
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
      </div>
      <ul
        className={`lg:flex transition-all -bottom-64 lg:static lg:flex-row bg-white gap-7 text-small  z-10 ${
          isOpen
            ? "absolute left-0 w-full h-auto px-10 py-6 flex flex-col opacity-100"
            : "absolute text-small -left-44 h-auto flex flex-col"
        }`}
      >
        {NavLinks.map((link) => (
          <Link
            href={link.href}
            key={link.text}
            className="hover:underline lg:hover:no-underline"
          >
            {link.text}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Hamburger;
