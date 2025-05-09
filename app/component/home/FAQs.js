"use client";
import { faqicon } from "@/app/asset/export";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const faqs = [
  {
    question: "What is Amey?",
    answer:
      "Amey is a premium ride-sharing app offering sophisticated transportation services tailored to your needs. Choose from luxurious Sedans or SUVs, personalized security options, and ride types like Quick Request, Hourly Hire, and Child Safe Rides.",
  },
  {
    question: "How do I book a ride?",
    answer: "You can book a ride through the Amey app in just a few clicks.",
  },
  {
    question: "Are the armed drivers licensed?",
    answer:
      "Yes, all armed drivers are licensed and go through rigorous background checks.",
  },
  {
    question: "What vehicles are available?",
    answer: "Amey offers Sedans, SUVs, and luxury cars to suit your needs.",
  },
  {
    question: "What payment methods does Amey accept?",
    answer: "Amey accepts credit/debit cards, UPI, and digital wallets.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-12 px-7 lg:px-22 w-full " id="FAQs">
      <h2 className="text-[50px] font-[700] text-[#323232] tracking-[-2%] mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" rounded-[12px] p-4 transition-all duration-300 bg-white"
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3
                className={`text-[18px] font-[600] flex items-center gap-4  ${
                  openIndex === index ? "text-green-600" : "text-[#323232]"
                }`}
              >
                <span>
                  <Image src={faqicon} alt="" />
                </span>
                {faq.question}
              </h3>
              <span onClick={() => toggleFAQ(index)} className="">
                {openIndex === index ? (
                  <FaXmark size={20} />
                ) : (
                  <FaPlus className="text-[#0CBA70]" />
                )}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-2 px-7">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
