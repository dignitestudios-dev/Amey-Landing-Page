import { facebook, linkdin, logo, twitter } from "@/app/asset/export";
import Image from "next/image";
import React from "react";
import { IoIosSend } from "react-icons/io";
import Card from "./Card";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="pt-20 lg:pt-60">
      <div className=" footer relative  ">
        <div className="lg:absolute   -top-60 w-full  ">
          <Card />
        </div>
        <div className="grid  px-7 xl:px-22 gap-16 row-gap-10 mb-8 lg:grid-cols-6 items-center pt-7 lg:pt-72   ">
          <div className="md:max-w-md lg:col-span-2">
            <Image src={logo} alt="" />
            <div className="mt-4 lg:max-w-sm">
              <p className="text-[14px] text-[#FFFFFF]">
                Lorem ipsum dolor sit amet consectetur. Elit sit risus turpis
                dolor sagittis amet tortor. \Amet accumsan sed.
              </p>
              <p className="mt-4 text-[22px] text-[#FFFFFF] font-[600]">
                Social links
              </p>
              <div className="flex gap-5 pt-4">
                <Image src={facebook} alt="" className="w-16 h-16" />
                <Image src={twitter} alt="" className="w-16 h-16" />
                <Image src={linkdin} alt="" className="w-16 h-16" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 row-gap-8 lg:col-span-4 xl:grid-cols-3">
            <div>
              <p className="font-[600] text-[22px]  text-[#FFFFFF]">
                Quick links
              </p>
              <ul className="mt-5 space-y-2">
                <li>
                  <a
                    href="#Home"
                    className="py-5 font-[400] text-[14px]  text-[#FFFFFF]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <Link href={"#feature"} 

                    className="py-5 font-[400] text-[14px]  text-[#FFFFFF]"
                  >
                    Why Choose us
                  </Link>
                </li>
                <li>
                  <Link href={"#feature"}
                    className="py-5 font-[400] text-[14px]  text-[#FFFFFF]"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    className="py-5 font-[400] text-[14px]  text-[#FFFFFF]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#Testimonial"
                    className="py-5 font-[400] text-[14px]  text-[#FFFFFF]"
                  >
                    Testimonial
                  </a>
                </li>
                <li>
                  <a
                    href="#FAQs"
                    className="py-5 font-[400] text-[14px]  text-[#FFFFFF]"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-[600] text-[22px]  text-[#FFFFFF]">Contact</p>
              <ul className="mt-5 space-y-2">
                <li>
                  <a
                    href="/"
                    className="py-5 font-[400] text-[14px]  text-[#FFFFFF]"
                  >
                    5053 Kiehn Junctions, Corpus Christi 19197
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="py-5 font-[400] text-[14px]  text-[#FFFFFF]"
                  >
                    1-774-710-2563 x587
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="py-5 font-[400] text-[14px]  text-[#FFFFFF]"
                  >
                    rebecca21@yahoo.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-[600] text-[22px]  text-[#FFFFFF]">
                Get latest information
              </p>
              <p className="py-5 font-[400] text-[14px]  text-[#FFFFFF]">
                Lorem ipsum dolor sit amet consectetur sit amet conse.{" "}
              </p>
              <div className="w-64 gap-3 bg-[#69696938] rounded-[12px] flex ">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="px-4 py-3.5 text-[14px]  text-[#FFFFFF]"
                />
                <div className="w-12 h-12 bg-[#0CBA70] rounded-[10px] flex items-center justify-center">
                  <IoIosSend className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between mt-20  pt-6 border-t border-[#FFFFFF21] sm:flex-row p-7 xl:px-22">
          <p className=" font-[400] text-[14px]  text-[#FFFFFF]">
            2024 Copyright reserves. Amey{" "}
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <p className=" font-[400] text-[14px]  text-[#FFFFFF]">
              privacy Policy
            </p>
            <p className=" font-[400] text-[14px]  text-[#FFFFFF]">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
