// import { useState } from "react";
import Logo from "../assets/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const loc = useLocation();
  const nav = useNavigate();

  return (
    <nav className="flex flex-wrap gap-3 items-center justify-between p-3 mb-5 bg-[#ee9a9a]">
      <img src={Logo} alt="Chuck Norris" className="w-[10rem]" />
      <ul className="flex gap-2 font-semibold select-none cursor-pointer text-stone-100 text-sm md:text-base">
        <li
          className={`hover:bg-blue-500 p-2 rounded-xl duration-100 ${
            loc?.pathname === "/" && "bg-blue-500"
          }`}
          onClick={() => nav("/")}
        >
          Home
        </li>
        <li
          className={`hover:bg-blue-500 p-2 rounded-xl duration-100 ${
            loc?.pathname === "/random" && "bg-blue-500"
          }`}
          onClick={() => nav("/random")}
        >
          Random Fact
        </li>
        <li
          className={`hover:bg-blue-500 p-2 rounded-xl duration-100 ${
            loc?.pathname === "/categories" && "bg-blue-500"
          }`}
          onClick={() => nav("/categories")}
        >
          Categories
        </li>
        <li
          className={`hover:bg-blue-500 p-2 rounded-xl duration-100 ${
            loc?.pathname === "/search" && "bg-blue-500"
          }`}
          onClick={() => nav("/search")}
        >
          Search
        </li>
      </ul>
    </nav>
  );
}
