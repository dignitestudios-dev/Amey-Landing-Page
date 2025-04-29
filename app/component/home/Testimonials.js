"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "swiper/css/navigation";
import { Vector } from "@/app/asset/export";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "John D",
    role: "Director, Producer",
    // image: "/avatar1.png",
    rating: 5,
    text: "Fast and convenient. My go-to ride-hailing app!",
    icon: Vector,
  },
  {
    name: "Emily R",
    role: "Director, Producer",
    // image: "/avatar2.png",
    rating: 4,
    text: "Friendly drivers and easy booking process.",
    icon: Vector,
  },
  {
    name: "Anna L",
    role: "Director, Producer",
    image: "/avatar3.png",
    rating: 5,
    text: "The graduation gave me valuable info for small-scale growth.",
    icon: Vector,
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  return (
    <section className="bg-white py-16 px-4 lg:px-24" id="testimonials">
      <div className="w-full flex lg:flex-row flex-col   ">
        <div className="w-full lg:w-[40%] flex flex-col justify-between items-start mb-10">
          <div className="space-y-3">
            <p className="text-green-600 font-semibold">Testimonials</p>
            <h2 className="text-3xl font-bold text-gray-900">
              What Client Says
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Embrace life’s vastness, venture forth, and discover the wonders
              waiting beyond. The world beckons; seize its grand offerings now!
            </p>
          </div>
          <div className="flex gap-2">
            <div
              ref={nextRef}
              className="bg-[#E1F4FF] hover:bg-[#00C265] hover:text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-md"
            >
              <IoIosArrowBack />
            </div>
            <div
              ref={prevRef}
              className="bg-[#E1F4FF] hover:bg-[#00C265] hover:text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-md"
            >
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%]">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
          >
            {testimonials?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-5 rounded-xl shadow-md h-full flex flex-col gap-3">
                  <div className="text-green-600 text-4xl">
                    <Image src={item.icon} alt="" className="w-[48px]" />
                  </div>
                  <p className="text-[#252B42] font-[400] text-[16px]">
                    {item.text}
                  </p>
                  <div className="flex gap-1 border-b border-[#0CBA701A] pb-2">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <div key={i} className="text-yellow-400 text-sm">
                        ★
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center mt-">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-gray-800">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
