"use client";
import { contactmobile } from "@/app/asset/export";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);

    try {
      const response = await fetch("https://your-api-url.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        reset(); // clear the form
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong while sending the message.");
    }
  };

  return (
    <div className="p-7 xl:p-22" id="contactus">
      <div className="w-full contact h-[487px] flex flex-col lg:flex-row items-center relative px-7 shadow-lg shadow-green-200">
        <div className="w-[50%] relative h-full xl:block hidden">
          <Image
            src={contactmobile}
            alt="Contact Illustration"
            className="w-[400px] mx-auto absolute bottom-0 right-30"
          />
        </div>

        <div className="w-full flex flex-col xl:w-[50%] py-10">
          <p className="text-[32px] text-[#FFFFFF] font-[800]">
            Got Questions? <br /> We’ve Got Answers!
          </p>
          <p className="text-[18px] text-[#FFFFFF] font-[400]">
            Still Have Questions? We’re Here to Help!
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col pt-6"
          >
            <div className="flex w-full gap-4">
              <div className="space-y-3.5 w-full">
                <div>
                  <input
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                    placeholder="Full Name"
                    className="w-full border-[1px] text-[14px] text-[#FFFFFF] border-white bg-[#59595926] p-3 rounded-[14px] outline-none backdrop-blur-[28.5px]"
                  />
                  {errors.fullName && (
                    <p className="text-red-200 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                      },
                    })}
                    placeholder="Email Address"
                    className="w-full border-[1px] text-[14px] text-[#FFFFFF] border-white bg-[#59595926] p-3 rounded-[14px] outline-none backdrop-blur-[28.5px]"
                  />
                  {errors.email && (
                    <p className="text-red-200 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full">
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  placeholder="Description"
                  rows={9}
                  className="w-full max-h-28 border-[1px] text-[14px] text-[#FFFFFF] border-white bg-[#59595926] p-3 rounded-[14px] outline-none backdrop-blur-[28.5px]"
                />
                {errors.description && (
                  <p className="text-red-200 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-48 bg-white mt-5 text-green-600 font-semibold px-6 py-3 rounded-[14px] hover:bg-gray-100"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
