"use client";
import React from "react";
import Hero from "../hero/Hero";
import "./Navbar.css";
import Image from "next/image";
import logo from "@/assets/logo_bcs.png";
import Link from "next/link";
import Marque from "../marque/Marque";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import "./Navbar.css";

const navList = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/events",
    title: "Events",
  },
  {
    path: "/login",
    title: "Log In",
  },
  {
    path: "/Sign-up",
    title: "Sign Up",
  },
];

const Navbar = () => {
  const [mdNav, setMdNav] = useState(false);

  return (
    <header>
      <Marque />
      <nav>
        <div className="sm:flex  w-full  justify-between items-center p-1 bg-[#005b96] hidden  ">
          <Image
            src={logo}
            width={115}
            height={45}
            alt="Bangla Channel Swimming"
            className=""
            priority
          />
          <div className={` `}>
            <ul className="flex gap-4 font-semibold text-white">
              {navList.map(({ path, title }) => (
                <li key={path}>
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      {/* start nav bar for small device */}
        <div className="sm:hidden flex z-50 w-full  justify-between pr-4 pl-4 bg-[#005b96]  ">
          <Link href={"/"}>
            <Image
              src={logo}
              width={{width:'auto'}}
              height={{height: 'auto'}}
              alt="Bangla Channel Swimming"
              className="m-2"
              priority
            />
          </Link>
          <div onClick={() => setMdNav(!mdNav)} className="mt-2 text-white">
            {!mdNav ? <FaBars size={24} /> : <ImCross size={24} />}
          </div>
        </div>
       

        {/* Menu bar for small device */}
        <div
          className={`absolute top-auto w-full   ${
            !mdNav ? "hidden" : "sm:hidden "
          } `}
        >
          <ul className="  bg-[#005b96] text-white font-semibold">
            {navList.map(({ path, title }) => (
              <li key={path} className="flex items-center justify-center">
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
