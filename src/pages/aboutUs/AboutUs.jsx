import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { FaPhone } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import pageBg from "../../assets/images/aboutHeroImg.png";
import partner1 from "../../assets/images/partner1.svg";
import partner2 from "../../assets/images/partner2.svg";
import partner3 from "../../assets/images/partner3.svg";
import partner4 from "../../assets/images/partner4.svg";
import partner5 from "../../assets/images/partner5.svg";

import value1 from "../../assets/images/value1.png";
import value2 from "../../assets/images/value2.png";
import value3 from "../../assets/images/value3.png";
import value4 from "../../assets/images/value4.png";

import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team4.png";

import ContactSection from "../../components/views/ContactSection";
import ScheduleBtn from "../../components/ui/ScheduleBtn";

const teams = [
  {
    id: 1,
    name: "Danny Yings",
    role: "CEO",
    image: team1,
  },
  {
    id: 2,
    name: "Matthew Dawson",
    role: "Chief Operating Officer",
    image: team2,
  },
  {
    id: 4,
    name: "Billy Walters",
    role: "Lead Network Engineer",
    image: team3,
  },
  {
    id: 3,
    name: "Jameson Delly",
    role: "Chief Technology Officer",
    image: team4,
  },
];

const AboutUs = () => {
  return (
    <div>
      <section
        className="relative flex flex-col items-statrt justify-center min-h-[550px] bg-cover bg-center py-[50px] px-4 sm:px-6"
        style={{ backgroundImage: `url(${pageBg})` }}
      >
        <div className="flex items-center justify-center flex-col gap-8 w-full max-w-[550px] mx-auto">
          <h1 className="font-Satoshi font-bold text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight sm:leading-[90px] w-full max-w-[304px] sm:max-w-none">
            About Us
          </h1>

          <ScheduleBtn />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-10 lg:p-[100px] bg-background-white">
        <article className="flex flex-col items-center justify-center gap-10 sm:gap-16">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h2 className="text-text-header text-center lg:text-right text-2xl sm:text-3xl lg:text-5xl font-bold font-Satoshi leading-tight">
              Get To Know us
            </h2>
            <span className="w-[108px] h-[3px] bg-text-green"></span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[90px]">
            <div className="flex-1 flex flex-col gap-6 items-start justify-start">
              <div className="flex flex-col items-start justify-center gap-2 w-full">
                <h2 className="text-text-header text-center lg:text-right text-base sm:text-2xl font-bold font-Satoshi leading-tight">
                  Who we Are at <span className="text-text-green">BRAVOTEK</span>
                </h2>
                <span className="w-[80px] h-[3px] bg-text-green ml-16"></span>
              </div>

              <p className="text-text-black font-Satoshi font-normal text-base leading-8">
                At <span className="text-text-black font-bold">BARVOTEK</span>, we are more than just an IT service provider we are your
                strategic partner in building secure, scalable, and future ready technology infrastructure.
                <br /> <br />
                We specialize in delivering end to end IT consulting and networking solutions that empower businesses to stay connected,
                secure, and efficient. From basic setups to complex enterprise infrastructures, our mission is to simplify your technology
                challenges so you can focus on growth.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center p-6 rounded-[20px] bg-white shadow-md">
              <div className="flex flex-col items-center justify-center gap-2 px-3 sm:px-5">
                <h3 className="text-text-green text-center text-2xl sm:text-3xl font-bold leading-10 font-Satoshi">100+</h3>
                <p className="text-text-black text-center font-Satoshi text-sm sm:text-base font-normal leading-6">IT Service Available</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 px-3 sm:px-5 border-l border-r border-[#8B8B8B80]">
                <h3 className="text-text-green text-center text-2xl sm:text-3xl font-bold leading-10 font-Satoshi">2K+</h3>
                <p className="text-text-black text-center font-Satoshi text-sm sm:text-base font-normal leading-6">Completed Projects</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 px-3 sm:px-5">
                <h3 className="text-text-green text-center text-2xl sm:text-3xl font-bold leading-10 font-Satoshi">500+</h3>
                <p className="text-text-black text-center font-Satoshi text-sm sm:text-base font-normal leading-6">Professional Staffs</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="px-4 sm:px-6 py-10 lg:p-[100px] bg-background-white">
        <article className="flex flex-col items-center justify-center gap-10 sm:gap-20">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h2 className="text-text-header text-center lg:text-right text-xl sm:text-2xl font-bold font-Satoshi leading-tight">
              What Set Us <span className="text-text-green">Apart</span>
            </h2>
            <span className="w-[108px] h-[3px] bg-text-green"></span>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="md:w-1/2 md:border-r md:border-gray-300 md:pr-8">
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  {/* <h3 className="font-bold font-Satoshi text-base text-text-black leading-8">Experienced & Certified Team</h3> */}
                  <p className="font-Satoshi font-normal text-base text-text-header leading-8">
                    1. Built to Scale From small office upgrades to multi site deployments, BravoTek adapts to your growth.
                  </p>
                </li>
                <li>
                  {/* <h3 className="font-bold font-Satoshi text-base text-text-black leading-8">Customized Solutions</h3> */}
                  <p className="font-Satoshi font-normal text-base text-text-header leading-8">
                    3. Certified, Reliable Technicians Backed by years of hands on experience and industry knowledge.
                  </p>
                </li>
                {/* <li>
                  <h3 className="font-bold font-Satoshi text-base text-text-black leading-8">Reliable Support & Consultancy</h3>
                  <p className="font-Satoshi font-normal text-base text-text-header leading-8">
                    Whether it's a one time project or a long-term partnership, our team is available for expert consulting, support, and
                    infrastructure management.
                  </p>
                </li> */}
              </ul>
            </div>

            <div className="md:w-1/2 md:pl-8">
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  {/* <h3 className="font-bold font-Satoshi text-base text-text-black leading-8">Comprehensive IT Services</h3> */}
                  <p className="font-Satoshi font-normal text-base text-text-header leading-8">
                    2. Detail Oriented Installations Clean, code compliant work done right the first time.
                  </p>
                </li>
                <li>
                  {/* <h3 className="font-bold font-Satoshi text-base text-text-black leading-8">Commitment to Security & Performance</h3> */}
                  <p className="font-Satoshi font-normal text-base text-text-header leading-8">
                    4. Client Centered Approach We prioritize your timeline, your needs, and your success.
                  </p>
                </li>
                {/* <li>
                  <h3 className="font-bold font-Satoshi text-base text-text-black leading-8">Client-Centered Approach</h3>
                  <p className="font-Satoshi font-normal text-base text-text-header leading-8">
                    Your business success is our priority. We listen, advise, and deliver with transparency, speed, and professionalism.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </article>
      </section>

      <section className="px-4 sm:px-6 py-10 lg:p-[100px] bg-background-white">
        <article className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex w-[286px] h-[400px] p-6 flex-col items-center justify-center gap-6 rounded-2xl bg-white shadow-md">
            <div className="flex flex-col gap-2 items-center ">
              <img src={value1} alt="value" loading="lazy" decoding="async" />
              <h3 className="text-text-header text-center text-2xl font-Satoshi font-bold leading-9 ">Our Vision</h3>
            </div>

            <p className="text-text-black font-Satoshi font-normal text-base leading-8">
              To become a leading force in delivering smart, secure, and scalable IT solutions that power business growth across industries
              locally and globally.
            </p>
          </div>

          <div className="flex w-[286px] h-[400px] p-6 flex-col items-center justify-center gap-6 rounded-2xl bg-white shadow-md">
            <div className="flex flex-col gap-2 items-center ">
              <img src={value2} alt="value" loading="lazy" decoding="async" />
              <h3 className="text-text-header text-center text-2xl font-Satoshi font-bold leading-9 ">Our Mission</h3>
            </div>

            <p className="text-text-black font-Satoshi font-normal text-base leading-8">
              To empower businesses through expert IT consulting, reliable networking solutions, exceptional support services, & maintaining
              a customer first approach step.
            </p>
          </div>

          <div className="flex w-[286px] h-[400px] p-6 flex-col items-center justify-center gap-6 rounded-2xl bg-white shadow-md">
            <div className="flex flex-col gap-2 items-center ">
              <img src={value3} alt="value" loading="lazy" decoding="async" />
              <h3 className="text-text-header text-center text-2xl font-Satoshi font-bold leading-9 ">Core Value</h3>
            </div>

            <p className="text-text-black font-Satoshi font-normal text-base leading-8">
              To become a leading force in delivering smart, secure, and scalable IT solutions that power business growth across industries
              locally and globally.
            </p>
          </div>

          <div className="flex w-[286px] h-[400px] p-6 flex-col items-center justify-center gap-6 rounded-2xl bg-white shadow-md">
            <div className="flex flex-col gap-2 items-center ">
              <img src={value4} alt="value" loading="lazy" decoding="async" />
              <h3 className="text-text-header text-center text-2xl font-Satoshi font-bold leading-9 ">Our Approch</h3>
            </div>

            <p className="text-text-black font-Satoshi font-normal text-base leading-8">
              We analyze. We customize. We implement. We support. Be it a small business or large enterprise, we craft scalable solutions
              that grow with your business.
            </p>
          </div>
        </article>
      </section>

      {/* Met the team */}
      <section className="px-4 sm:px-6 py-10 lg:p-[100px] bg-background-white">
        <article className="flex flex-col items-center justify-center gap-10 sm:gap-20">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h2 className="text-text-header text-center lg:text-right text-xl sm:text-2xl font-bold font-Satoshi leading-tight">
              Meet The <span className="text-text-green">BRAVOTEK</span> Team
            </h2>
            <span className="w-[108px] h-[3px] bg-text-green"></span>
          </div>

          <div className="w-full max-w-6xl">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 50000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="teams-swiper pb-12"
            >
              {teams.map((team) => (
                <SwiperSlide key={team.id} className="flex items-center justify-center">
                  <figure className="h-[224px] w-full rounded-lg">
                    <img src={team.image} alt="team" loading="lazy" decoding="async" className="w-full h-full object-cover rounded-lg" />
                  </figure>
                  <div className="flex flex-col items-center justify-center mt-4">
                    <h3 className="text-text-black text-center text-lg font-Satoshi font-bold leading-7">{team.name}</h3>
                    {/* <p className="text-[#8B8B8B] text-center text-sm font-Satoshi font-normal leading-6">{team.role}</p> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </article>
      </section>

      {/* Our partners */}
      <section className="px-4 sm:px-6 lg:px-[100px] pb-10 sm:pb-14 lg:pb-20 pt-10 bg-background-white">
        <article className="flex flex-col items-center gap-10 sm:gap-20">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h2 className="text-text-header text-center lg:text-right text-xl sm:text-2xl font-bold font-Satoshi leading-tight">
              Our <span className="text-text-green">Partner</span>
            </h2>
            <span className="w-[108px] h-[3px] bg-text-green"></span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full flex-wrap gap-6">
            <img src={partner1} alt="partner" loading="lazy" decoding="async" />
            <img src={partner2} alt="partner" loading="lazy" decoding="async" />
            <img src={partner3} alt="partner" loading="lazy" decoding="async" />
            <img src={partner4} alt="partner" loading="lazy" decoding="async" />
            <img src={partner5} alt="partner" loading="lazy" decoding="async" />
          </div>
        </article>
      </section>

      <ContactSection />
    </div>
  );
};

export default AboutUs;
