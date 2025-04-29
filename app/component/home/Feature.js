"use client";
import {
  bgfleet,
  bgride,
  bgsecurity,
  bgtrust,
  Fleet,
  howitworkbg,
  Ride,
  Security,
  trust,
} from "@/app/asset/export";
import Image from "next/image";
import React from "react";

const Feature = () => {
  const card = [
    {
      img: bgfleet,
      icon: Fleet,
      title: "Luxurious Fleet",
      text: " Travel in style with our elite selection of Sedans and SUVs, perfect for any occasion.",
    },
    {
      img: bgsecurity,
      icon: Security,
      title: "Personalized Security Options",
      text: "Your peace of mind is our priority. Choose between armed or unarmed drivers for a customized level of security.",
    },
    {
      img: bgtrust,
      icon: trust,
      title: "Driven by Trust",
      text: " Every Amey driver is handpicked through a rigorous selection process, including thorough background checks and verification, ensuring your safety and peace of mind.",
    },
    {
      img: bgride,
      icon: Ride,
      title: "Flexible Ride Choices",
      text: " From on-demand rides to hourly hire and child-safe options, Amey adapts to your needs.",
    },
  ];
  return (
    <div>
      <div className="w-full flex flex-col p-7 xl:p-22"id="feature">
        <div className="flex lg:flex-row flex-col  lg:items-center lg:justify-between">
          <div className="flex flex-col items-start gap-2 ">
            <p className="text-[#0CBA70] text-[24px] font-[500] leading-[100%]">
              Best Key Features
            </p>
            <h3 className="text-[#323232] text-[50px] font-[700] tracking-[-2] leading-[100%]">
              Key Features
            </h3>
          </div>
          <p className="text-[#989898] text-[18px] font-[400]  leading-[100%] lg:max-w-[500px] xl:pt-0 pt-10">
            Amey combines luxury, safety, and personalization to deliver a
            superior ride-sharing experience. Here’s what sets us apart:
          </p>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2  gap-5  pt-9 xl:px-4 ">
          {card?.map((item, index) => (
            <div
              key={index}
              className={`w-full flex flex-col  lg:h-[285px] card-${index} rounded-[22px] py-2 relative overflow-hidden`}
            >
              <Image src={item.icon} alt="" className="w-[86px] h-[86px]" />
              <div className="pt-12 px-6 space-y-2.5">
                <p className="text-[#FFFFFF] text-[24px] font-[800]">
                  {item.title}
                </p>
                <p className="text-[#989898] text-[16px] font-[400]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
