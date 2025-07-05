import React from "react";
import { FaPhone } from "react-icons/fa6";
import pageBg from "../../assets/images/serviceBG.png";
import ContactSection from "../../components/views/ContactSection";
import CTASection from "../../components/views/CTASection";
import ServiceSection from "../../components/views/ServiceSection";
import ScheduleBtn from "../../components/ui/ScheduleBtn";

const Services = () => {
  return (
    <div>
      <section
        className="relative flex flex-col items-center justify-center min-h-[550px] bg-cover bg-center py-[50px] px-4 sm:px-6"
        style={{ backgroundImage: `url(${pageBg})` }}
      >
        <div className="flex items-center justify-center flex-col gap-8 w-full max-w-[1200px] mx-auto">
          <h1 className="font-Satoshi font-bold text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight sm:leading-[90px] w-full max-w-[304px] sm:max-w-none">
            Smart IT Solutions
          </h1>
          <ScheduleBtn />
        </div>
      </section>

      <ServiceSection />

      <section className="px-4 sm:px-6 lg:px-[100px] py-10 sm:py-16 bg-[#000]">
        <article className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0">
          <div className="w-full flex flex-col items-center lg:items-start gap-6 lg:w-[704px]">
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <h2 className="text-white text-center lg:text-left text-2xl sm:text-3xl lg:text-5xl font-bold font-Satoshi leading-tight lg:leading-[72px]">
                Need the Right Tech Partner? <span className="text-text-green">BRAVOTEK</span> is Here for You
              </h2>
              <span className="w-[108px] h-[3px] bg-text-green lg:self-start"></span>
            </div>

            <p className="text-sm sm:text-base text-white font-normal font-Satoshi leading-6 sm:leading-8 text-center lg:text-left">
              Whether you're starting from scratch or upgrading your existing systems, our certified experts are here to help.
            </p>
          </div>

          <button
            type="button"
            className="w-full sm:w-fit bg-text-green flex items-center justify-center py-3 sm:py-4 px-4 sm:px-6 rounded-[40px] gap-2 cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:bg-green-700"
          >
            <FaPhone className="text-white" />
            <span className="text-white font-Satoshi font-bold text-base sm:text-lg leading-7">Contact Us </span>
          </button>
        </article>
      </section>

      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Services;
