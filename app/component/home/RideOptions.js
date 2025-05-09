"use client";

import { ride1 } from "@/app/asset/export";
import Image from "next/image";

const cardData = [
  {
    title: "Quick Request Rides",
    content:
      "Need a ride fast? Our Quick Request option lets you connect with a nearby driver instantly. With real-time GPS technology, we match you with the closest available driver, ensuring a swift pick-up at your current location. Simply input your pick-up and drop-off points, view the driver’s estimated arrival time, and track your ride in real time for a seamless experience.",
  },
  {
    title: "Hourly Hire",
    content:
      "Perfect for a day full of errands or events, our Hourly Hire service allows you to reserve a professional driver for extended periods. Specify your pick-up and drop-off locations along with timings, and enjoy the flexibility of multiple trips without needing to book separate rides. It’s your personal chauffeur service, tailored for ultimate convenience.",
  },
  {
    title: "Child Safe Rides",
    content:
      "Your child’s safety is our priority. Our Rides for Children service offers reliable transportation specifically designed for young passengers. Parents or guardians can track the journey in real time with live updates. By providing detailed child information, including specific needs or preferences, you ensure drivers are fully prepared. Additionally, we accommodate special requests like escorting children to and from doors, giving you peace of mind throughout the ride.",
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

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 bg-white rounded-[34px] p-4 mt-2.5 ">
          {cardData.map((item, index) => (
            <div
              key={index}
              className={`relative h-[540px] rounded-[24px] ride-${index} overflow-hidden shadow-md group text-black hover:text-white `}
            >
              <div className="absolute bottom-0 left-0 right-0 translate-y-[100%] group-hover:translate-y-0 bg-black/60 transition-all duration-500 w-full h-full "></div>
              {/* Main Text */}
              <div className="absolute top-9 left-6 z-10">
                <p className=" text-[24px] font-[800] leading-[100%]">
                  {item.title}
                </p>
              </div>

              {/* Slide-up Content */}
              <div className="absolute bottom-[-100%] group-hover:top-16 translate-y-100 group-hover:translate-y-0   p-6 transition-all duration-500 z-10 ">
                <p className="text-[18px] font-[400] text-white">
                  {item?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
