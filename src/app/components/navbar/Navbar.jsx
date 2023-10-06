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
        <div className="sm:flex absolute top-0 z-50 w-full  justify-between p-4 bg-transperent hidden  ">
          <Image
            src={logo}
            width={115}
            height={45}
            alt="Bangla Channel Swimming"
            className="mt-5"
          />
          <div className={`mt-5 `}>
            <ul className="flex gap-4 text-white font-semibold ">
              {navList.map(({ path, title }) => (
                <li key={path}>
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Menu bar for small device */}
        <div
          className={`absolute top-[60px] w-full transition  ${
            !mdNav ? "hidden" : "sm:hidden"
          } `}
        >
          <ul className=" bg-[#005b96] text-white font-semibold">
            {navList.map(({ path, title }) => (
              <li key={path} className="flex items-center justify-center">
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex absolute top-0 z-50 w-full  justify-between p-4 bg-transperent  ">
          <Link href={"/"}>
            <Image
              src={logo}
              width={80}
              height={34}
              alt="Bangla Channel Swimming"
              className="mt-5"
            />
          </Link>
          <div onClick={() => setMdNav(!mdNav)} className="mt-5">
            {!mdNav ? <FaBars size={24} /> : <ImCross size={24} />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
