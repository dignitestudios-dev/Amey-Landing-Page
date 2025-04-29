"use client";
import {
  aboutchild,
  abouthourly,
  aboutperson,
  aboutquick,
  check,
} from "@/app/asset/export";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <div className=" lg:pt-52">
      <div
        className="w-full flex lg:flex-row flex-col items-center p-7 xl:p-22"
        id="aboutus"
      >
        <div className="w-full lg:w-[60%] flex justify-center relative">
          <div className="relative">
            <Image src={aboutperson} alt="" className="w-[500px] " />
          </div>
          <div className="absolute top-16 right-10 lg:block hidden">
            <Image
              src={aboutchild}
              alt=""
              className="w-[258px] fade-slide-down "
            />
          </div>
          <div className="absolute top-52 left-10 fade-slide-down lg:block hidden">
            <Image src={abouthourly} alt="" className="w-[199px]" />
          </div>
          <div className="absolute -bottom-11 right-8 fade-slide-left-right  lg:block hidden">
            <Image src={aboutquick} alt="" className="w-[397px]" />
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex flex-col justify-start lg:px-7">
          <p className="text-[#0CBA70] text-[24px] font-[500] leading-[100%]">
            About Us
          </p>
          <div className="flex flex-col gap-6 py-5">
            <h3 className="text-[#181818] text-[50px] font-[700] leading-[100%]">
              Why <span className="text-[#0CBA70]">Choose</span> Us?
            </h3>
            <p className="w-[] text-[#656565] text-[18px] font-[400] leading-[100%]">
              Luxury rides, safe journeys for children, personalized options,
              and instant emergency assistance. Experience comfort, safety, and
              convenience like never before
            </p>
          </div>
          <div className="space-y-4 ">
            <div className=" flex items-start gap-4 mt-2 ">
              <Image src={check} alt="" className="w-5 mt-1 h-5" />
              <p className="text-[18px] text-[Heading] font-[700] ">
                Elite Fleet of Vehicles{" "}
                <span className="text-[18px] text-[#989898] font-[400] ">
                  Luxury cars only, offering the utmost comfort and style.
                </span>
              </p>
            </div>

            <div className=" flex items-start gap-4 mt-2 ">
              <Image src={check} alt="" className="w-5 mt-1 h-5" />
              <p className="text-[18px] text-[Heading] font-[700] ">
                Personalized Preferences{" "}
                <span className="text-[18px] text-[#989898] font-[400] ">
                  Choose between armed or unarmed drivers, special requests, and
                  more.
                </span>
              </p>
            </div>

            <div className=" flex items-start gap-4 mt-2 ">
              <Image src={check} alt="" className="w-5 mt-1 h-5" />
              <p className="text-[18px] text-[Heading] font-[700] leading-[]">
                Advanced Communication{" "}
                <span className="text-[18px] text-[#989898] font-[400] leading-[]">
                  Chat and call your driver with ease.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
