import React from "react";
import { FaPhone } from "react-icons/fa6";
import computer from "../../assets/icons/computer.svg";
import shield from "../../assets/icons/park.svg";
import cloud from "../../assets/icons/cloud.svg";
import carbon from "../../assets/icons/carbon.svg";
import whoweareImg from "../../assets/images/whoweareImg.png";

const WhoWeAreSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-[100px] pb-10 sm:pb-14 lg:pb-20 bg-background-white">
      <article className="flex flex-col items-center gap-10 sm:gap-[140px]">
        <div className="flex flex-col lg:flex-row px-4 sm:px-6 items-center justify-center rounded-[20px] bg-background-white shadow-md transform -translate-y-10 w-full overflow-x-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 py-6">
            <div className="flex w-full lg:w-[280px] h-auto lg:h-[400px] flex-col justify-center items-center gap-6 p-4">
              <img src={computer} alt="computer" className="w-16 h-16 sm:w-20 sm:h-20" />
              <div>
                <h3 className="text-text-header text-xl sm:text-2xl text-center font-Satoshi font-bold leading-9">IT Support & Services</h3>
                <p className="text-text-black text-center text-sm sm:text-base font-normal leading-7 sm:leading-8">
                  Empowering your business with proactive IT support, system optimization, and round the clock technical assistance.
                </p>
              </div>
            </div>

            <span className="hidden lg:block h-[334px] w-[0.5px] bg-[#8B8B8B80] mx-2"></span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
            <div className="flex w-full lg:w-[280px] h-auto lg:h-[400px] flex-col justify-center items-center gap-6 p-4">
              <img src={shield} alt="shield" className="w-16 h-16 sm:w-20 sm:h-20" />
              <div>
                <h3 className="text-text-header text-xl sm:text-2xl text-center font-Satoshi font-bold leading-9">
                  Cyber Security Services
                </h3>
                <p className="text-text-black text-center text-sm sm:text-base font-normal leading-7 sm:leading-8">
                  Protect your business from threats with advanced cybersecurity solutions designed to detect, prevent, and respond.
                </p>
              </div>
            </div>
            <span className="hidden lg:block h-[334px] w-[0.5px] bg-[#8B8B8B80] mx-2"></span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
            <div className="flex w-full lg:w-[280px] h-auto lg:h-[400px] flex-col justify-center items-center gap-6 p-4">
              <img src={cloud} alt="cloud" className="w-16 h-16 sm:w-20 sm:h-20" />
              <div>
                <h3 className="text-text-header text-xl sm:text-2xl text-center font-Satoshi font-bold leading-9">
                  Cloud & Server Services
                </h3>
                <p className="text-text-black text-center text-sm sm:text-base font-normal leading-7 sm:leading-8">
                  Empowering your business with proactive IT support, system optimization, and round the clock technical assistance.
                </p>
              </div>
            </div>
            <span className="hidden lg:block h-[334px] w-[0.5px] bg-[#8B8B8B80] mx-2"></span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
            <div className="flex w-full lg:w-[280px] h-auto lg:h-[400px] flex-col justify-center items-center gap-6 p-4">
              <img src={carbon} alt="carbon" className="w-16 h-16 sm:w-20 sm:h-20" />
              <div>
                <h3 className="text-text-header text-xl sm:text-2xl text-center font-Satoshi font-bold leading-9">Effective Management</h3>
                <p className="text-text-black text-center text-sm sm:text-base font-normal leading-7 sm:leading-8">
                  We deliver consulting and management solutions that streamline operations, enhance performance, and drive sustainable
                  business growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end w-full gap-10 lg:gap-0">
          <div className="flex-1 flex flex-col items-center lg:items-start gap-8 lg:gap-13 w-full max-w-[604px]">
            <div className="flex flex-col items-center lg:items-start justify-center gap-2 w-full">
              <h2 className="text-text-header text-center lg:text-right text-2xl sm:text-3xl lg:text-5xl font-bold font-Satoshi leading-tight">
                Who are we?
              </h2>
              <span className="w-[108px] h-[3px] bg-text-green lg:ml-10"></span>
            </div>

            <p className="font-Satoshi font-normal text-sm sm:text-base text-text-black leading-7 sm:leading-8 text-center lg:text-left max-w-[510px]">
              At <span className="text-text-green">BRAVOTEK</span>, we are more than just an IT consulting and networking company we are a
              trusted partner committed to transforming how businesses connect, operate, and grow in the digital age. With years of
              experience, a team of certified experts, and a forward thinking approach, we deliver scalable, secure, and tailored technology
              solutions that empower organizations to thrive in a competitive landscape.
            </p>

            <button
              type="button"
              className="w-full sm:w-auto bg-text-green flex items-center justify-center py-3 sm:py-4 px-4 sm:px-6 rounded-[40px] gap-2 cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:bg-green-700"
            >
              <FaPhone className="text-white" />
              <span className="text-white font-Satoshi font-bold text-base sm:text-lg leading-7">Contact Us</span>
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-4 w-full max-w-[602px]">
            <img src={whoweareImg} alt="who we are" loading="lazy" decoding="async" className="w-full h-auto" />
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex flex-col items-center justify-center gap-2 px-3 sm:px-5">
                <h3 className="text-text-green text-center text-2xl sm:text-3xl font-bold leading-10 font-Satoshi">100+</h3>
                <p className="text-text-black text-center font-Satoshi text-sm sm:text-base font-normal leading-6">IT Service Available</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 px-3 sm:px-5">
                <h3 className="text-text-green text-center text-2xl sm:text-3xl font-bold leading-10 font-Satoshi">2K+</h3>
                <p className="text-text-black text-center font-Satoshi text-sm sm:text-base font-normal leading-6">Completed Projects</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 px-3 sm:px-5">
                <h3 className="text-text-green text-center text-2xl sm:text-3xl font-bold leading-10 font-Satoshi">500+</h3>
                <p className="text-text-black text-center font-Satoshi text-sm sm:text-base font-normal leading-6">Professional Staffs</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhoWeAreSection;
