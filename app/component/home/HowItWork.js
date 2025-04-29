"use client";
import { check, glow, howitwork, playbutton } from "@/app/asset/export";
import Image from "next/image";
import React from "react";

const HowItWork = () => {
  return (
    <div className="mb-10
                                                                                                                                                                                                                                                                                                                                             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ xl:mb-80" id="howitswork">
      <div className="bg-[#031113] sm:h-[830px] xl:h-[1007px] relative w-full ">
        <div className="w-full flex lg:flex-row flex-col items-center px-7 xl:px-22">
          <div className="w-full  flex flex-col justify-start ">
            <div className="flex flex-col gap-3 py-5">
              <h3 className="text-[#FFFFFF] text-[50px] font-[700] leading-[100%]">
                How Its <span className="text-[#0CBA70]">Works?</span>
              </h3>
              <p className="w-[] text-[#656565] text-[18px] font-[400] leading-[100%]">
                Welcome to <span className="text-[#0CBA70]">Amey</span>, where
                sophistication meets security for an elevated ride-sharing
                experience. Here's how we redefine luxury transportation:
              </p>
            </div>
            <div className="space-y-4 ">
              <div className=" flex items-start gap-4 mt-2 ">
                <Image src={check} alt="" className="w-5 mt-1 h-5" />
                <p className="text-[18px] text-[#FFFFFF] font-[700] ">
                  Select Your Vehicle{" "}
                  <span className="text-[18px] text-[#989898] font-[400] ">
                    Select from our premium fleet of Sedans and SUVs, designed
                    for unparalleled comfort and elegance
                  </span>
                </p>
              </div>

              <div className=" flex items-start gap-4 mt-2 ">
                <Image src={check} alt="" className="w-5 mt-1 h-5" />
                <p className="text-[18px] text-[#FFFFFF] font-[700] ">
                  Personalize Your Security{" "}
                  <span className="text-[18px] text-[#989898] font-[400] ">
                    Opt for armed or unarmed drivers to match your comfort and
                    security needs.
                  </span>
                </p>
              </div>

              <div className=" flex items-start gap-4 mt-2 ">
                <Image src={check} alt="" className="w-5 mt-1 h-5" />
                <p className="text-[18px] text-[#FFFFFF] font-[700] leading-[]">
                  Pick Your Ride Type{" "}
                  <span className="text-[18px] text-[#989898] font-[400] leading-[]">
                    Whether it’s a quick ride, an hourly hire, or a child-safe
                    option, Amey offers tailored services to suit your
                    lifestyle.
                  </span>
                </p>
              </div>
              <div className=" flex items-start gap-4 mt-2 ">
                <Image src={check} alt="" className="w-5 mt-1 h-5" />
                <p className="text-[18px] text-[#FFFFFF] font-[700] leading-[]">
                  Enjoy the Experience{" "}
                  <span className="text-[18px] text-[#989898] font-[400] leading-[]">
                    Relax as our professional drivers deliver a seamless,
                    secure, and sophisticated journey.
                  </span>
                </p>
              </div>
              <p className="w-[] text-[#FFFFFF] text-[18px] font-[400] leading-[100%]">
                At <span className="text-[#0CBA70]">Amey</span>, we don’t just
                transport you—we elevate the journey with luxury and care.
              </p>
            </div>
          </div>
          <div className="w-full   xl:flex justify-center relative hidden">
            <div className=" relative -top-28 -right-0">
              <Image src={glow} alt="" className="object-cover w-[800px]" />
            </div>
            <div className="absolute  -top-40 -right-20 ">
              <Image
                src={howitwork}
                alt=""
                className=" object-cover xl:h-[870px] "
              />
            </div>
          </div>
        </div>
        <div className="w-[80%] xl:w-[1320px] mx-auto flex items-center justify-center h-[200px] sm:h-[260px] md:h-[300px] lg:h-[400px] xl:h-[530px] video  rounded-[34px] mt-8 xl:mt-0 ">
          <Image src={playbutton} alt="" className="w-[120px] lg:w-[140px] " />
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
