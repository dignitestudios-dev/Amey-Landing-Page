import React from "react";
import Navbar from "../component/home/Navbar";
import Hero from "../component/home/Hero";
import AboutUs from "../component/home/AboutUs";
import HowItWork from "../component/home/HowItWork";
import Feature from "../component/home/Feature";
import RideOptions from "../component/home/RideOptions";
import Testimonials from "../component/home/Testimonials";
import ContactUs from "../component/home/ContactUs";
import FAQSection from "../component/home/FAQs";
import Footer from "../component/home/Footer";

const Page = () => {
  return (
    <div className="w-full  bg-[#f3fff8]">
      <Hero />
      <AboutUs />
      <HowItWork />
      <Feature />
      <RideOptions />
      <Testimonials />
      <FAQSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Page;
