"use client";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { googleplay, herocar, heromob1, heromob2 } from "@/app/asset/export";

const Hero = () => {
  return (
    <div className="">
      <div
        className="w-full h-[570px] lg:h-[670px] overflow-hidden lg:overflow-visible   heroimge"
        id="home"
      >
        <Navbar />
        <div className="w-full flex  p-7 lg:p-22 z-0">
          <div className="w-full flex flex-col  gap-3.5 ">
            <h3 className="xl:text-[50px] text-[40px] text-[#FFFFFF] font-[600] xl:leading-[70px] leading-[50px]">
              <span className="text-[#0CBA70] ">Experience Luxury,</span> <br />
              Safety, and Convenience <br /> in Every Ride
            </h3>
            <p className="lg:text-[18px] text-[14px] text-[#D0D0D0] font-[500] pb-3.5">
              Your trusted ride-sharing solution, designed exclusively for
              families and professionals who prioritize comfort and security.
            </p>
            <Image
              src={googleplay}
              alt="google play"
              className="w-[320px] h-[44px] xl:w-[377px] xl:h-[55px]"
            />
          </div>
          <div className="w-full lg:flex items-center relative  hidden">
            <div className="absolute -bottom-36 xl:top-56 -left-24 fade-slide-left">
              <Image
                src={herocar}
                alt="google play"
                className="w-[290px] xl:w-[370px] object-cover"
              />
            </div>
            <div className="absolute top-20 xl:top-0 left-16 z-10 ">
              <Image
                src={heromob1}
                alt="google play"
                className=" h-[440px] xl:h-[540px] object-cover "
              />
            </div>
            <div className="absolute top-24 xl:top-8 -right-12  fade-slide-right">
              <Image
                src={heromob2}
                alt="google play"
                className="w-[240px] xl:w-[300px]  object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
