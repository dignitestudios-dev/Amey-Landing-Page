import {
  appstore,
  footercard1,
  footercard2,
  googleplay,
  heromob1,
} from "@/app/asset/export";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="w-full pt-3">
      <div className="w-full grid grid-cols-1  justify-center lg:grid-cols-2 px-7 xl:px-22 gap-10">
        <div className="footercard_1 grid grid-cols-1 md:grid-cols-2    lg:h-[442px] rounded-[22px] bg-[#0CBA70] relative p-7 overflow-hidden ">
          <div className="w-full flex flex-col gap-6">
            <h3 className="text-[28px] xl:text-[32px] text-[#FFFFFF] font-[700] ">
              Experience Luxury & Security
            </h3>
            <p className="xl:text-[18px] text-[14px] text-[#FFFFFF] font-[400] ">
              Book premium Sedans or SUVs, choose armed or unarmed drivers, and
              enjoy real-time tracking—all at your fingertips.
            </p>
            <Image
              src={appstore}
              alt=""
              className="w-[189px] lg:block hidden"
            />
            <Image src={googleplay} alt="" className="w-[279px] lg:hidden" />
          </div>
          <div className="w-full flex justify-center mt-12 ">
            <Image src={footercard1} alt="" className="h-[430px] w-[230px]" />
          </div>
        </div>
        <div className="footercard_1 grid grid-cols-1 md:grid-cols-2  lg:h-[442px] rounded-[22px] bg-[#031113] relative p-7 overflow-hidden ">
          <div className="w-full flex flex-col gap-6">
            <h3 className="text-[32px] text-[#FFFFFF] font-[700]">
              Experience Luxury & Security
            </h3>
            <p className="text-[18px] text-[#FFFFFF] font-[400]">
              Book premium Sedans or SUVs, choose armed or unarmed drivers, and
              enjoy real-time tracking—all at your fingertips.
            </p>
            <Image
              src={appstore}
              alt=""
              className="w-[189px] lg:block hidden"
            />
            <Image src={googleplay} alt="" className="w-[279px] lg:hidden" />
          </div>
          <div className="w-full flex justify-center mt-12 ">
            <Image src={footercard2} alt="" className="h-[430px] w-[230px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
