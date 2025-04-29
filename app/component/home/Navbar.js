"use client";
import { logo } from "@/app/asset/export";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = () => {
    console.log("sdfsdf");
    setIsopen((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-transparent px-7 lg:px-24 relative flex flex-col items-center z-10  ">
        <nav className="w-full flex items-center justify-between gap-3 py-4 lg:py-8 border-b-[1px] border-[#FFFFFF21] ">
          <div className="text-[16px] font-[400]">
            <Image src={logo} alt="" className="w-[52px] h-[70px]" />
          </div>
          <div className="hidden lg:flex justify-center gap-10 w-full ">
            <ul className="flex items-center space-x-10 font-medium text-[#FFFFFF]">
              <li
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "home"
                    ? "text-[#0CBA70] underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href={"#home"}
                  onClick={() => {
                    setActive("home");
                  }}
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "aboutus"
                    ? "text-[#0CBA70]   underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href={"#aboutus"}
                  onClick={() => {
                    setActive("aboutus");
                  }}
                >
                  About Us
                </Link>
              </li>

              <li
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "howitswork"
                    ? "text-[#0CBA70]  underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href="#howitswork"
                  onClick={() => {
                    setActive("howitswork");
                  }}
                >
                  How Its Work
                </Link>
              </li>
              <li
                c
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "feature"
                    ? "text-[#0CBA70] underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href={"#feature"}
                  onClick={() => {
                    setActive("feature");
                  }}
                >
                  {" "}
                  Features
                </Link>
              </li>
              <li
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "testimonials"
                    ? "text-[#0CBA70] underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href="#testimonials"
                  onClick={() => {
                    setActive("testimonials");
                  }}
                >
                  Testimonials
                </Link>
              </li>
              <li
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "FAQs"
                    ? "text-[#0CBA70] underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href={"#FAQs"}
                  onClick={() => {
                    setActive("FAQs");
                  }}
                >
                  {" "}
                  FAQs
                </Link>
              </li>
              <li
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "contactus"
                    ? "text-[#0CBA70] underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href={"#contactus"}
                  onClick={() => {
                    setActive("contactus");
                  }}
                >
                  {" "}
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-between   ">
            <button
              onClick={() => toggle()}
              className="w-[141px] h-[48px] bg-[#0CBA70] text-[#FFFFFF] text-[14px] font-[600] rounded-[200px] lg:block hidden"
            >
              Get the App
            </button>
            <button onClick={() => toggle()} className="text-white lg:hidden">
              <HiMenu />
            </button>
          </div>
        </nav>

        <div
          className={`
        absolute h-screen right-0 top-0 z-50 w-60 max-w-sm lg:hidden overflow-hidden
        bg-[#050505] text-white   
        transition-all duration-700 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-60"}
      `}
        >
          <div className=" p-5 flex justify-between items-start w-full">
            <ul className="flex flex-col space-y-4 py-5 uppercase">
              <li
                onClick={toggle} 
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "home"
                    ? "text-[#0CBA70] underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href={"#home"}
                  onClick={() => {
                    setActive("home");
                  }}
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "aboutus"
                    ? "text-[#0CBA70]   underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href={"#aboutus"}
                  onClick={() => {
                    setActive("aboutus");
                  }}
                >
                  About Us
                </Link>
              </li>

              <li
                onClick={toggle}
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "howitswork"
                    ? "text-[#0CBA70]  underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href="#howitswork"
                  onClick={() => {
                    setActive("howitswork");
                  }}
                >
                  How Its Work
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "feature"
                    ? "text-[#0CBA70] underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href={"#feature"}
                  onClick={() => {
                    setActive("feature");
                  }}
                >
                  {" "}
                  Features
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "testimonials"
                    ? "text-[#0CBA70] underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href="#testimonials"
                  onClick={() => {
                    setActive("testimonials");
                  }}
                >
                  Testimonials
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "FAQs"
                    ? "text-[#0CBA70] underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href={"#FAQs"}
                  onClick={() => {
                    setActive("FAQs");
                  }}
                >
                  {" "}
                  FAQs
                </Link>
              </li>
              <li
                onClick={toggle}
                className={`text-[16px] cursor-pointer font-[400] ${
                  active === "contactus"
                    ? "text-[#0CBA70] underline underline-offset-8 decoration-[#0CBA70]"
                    : ""
                }`}
              >
                <Link
                  href={"#contactus"}
                  onClick={() => {
                    setActive("contactus");
                  }}
                >
                  {" "}
                  Contact Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => toggle()}
                  className="w-[141px] h-[48px] bg-[#0CBA70] text-[#FFFFFF] text-[14px] font-[600] rounded-[200px] "
                >
                  Get the App
                </button>{" "}
              </li>
            </ul>
            <button onClick={toggle} className="ml-auto">
              <RiCloseFill size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
