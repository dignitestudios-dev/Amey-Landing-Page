"use client";

import { ride1 } from "@/app/asset/export";
import Image from "next/image";

const cardData = [
  {
    title: "Quick Request Rides",
    // img: ride1,
  },
  {
    title: "Hourly Hire",
    // img: img2,
  },
  {
    title: "Child Safe Rides",
    // img: img3,
  },
];

export default function RideOptions() {
  return (
    <div className="">
      <div className="w-full flex flex-col p-7 lg:p-22">
        <div className="flex lg:flex-row flex-col  items-center lg:justify-between">
          <div className="flex-1 space-y-2">
            <p className="text-[#0CBA70] text-[24px] font-[500] leading-[100%]">
              Best Key Options
            </p>
            <h2 className="text-[#323232] text-[50px] font-[700] tracking-[-2] leading-[100%]">
              Ride Options with Amey
            </h2>
          </div>
          <p className="text-[#989898] max-w-[500px] text-[16px] lx:pt-0 pt-10">
            At Amey, we understand that every journey is unique. That’s why we
            offer three distinct ride options, each designed to cater to your
            specific needs while maintaining our commitment to luxury, safety,
            and convenience.
          </p>
        </div>

        <div className=" grid grid-cols-1 xl:grid-cols-3 gap-4 bg-white rounded-[34px] p-4 mt-2.5">
          {cardData.map((item, index) => (
            <div
              key={index}
              className={` h-[540px] rounded-[24px] ride-${index} shadow-md p-6 `}
            >
              <p className="text-[#000000] text-[24px] font-[800] leading-[100%]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
