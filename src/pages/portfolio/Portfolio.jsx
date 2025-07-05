import React from "react";
import { FaPhone } from "react-icons/fa6";
import pageBg from "../../assets/images/pageBg.png";
import ContactSection from "../../components/views/ContactSection";
import work1 from "../../assets/images/work1.png";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.png";
import MilestoneSection from "../../components/views/MilestoneSection";
import TestimonialSection from "../../components/views/TestimonialSection";
import ScheduleBtn from "../../components/ui/ScheduleBtn";

const workData = [
  {
    id: 1,
    img: work1,
    title: "ZenithTech Data Center",
    category: "Cooperate Office",
    description: "Full design & implementation of scalable, secure rack based systems.",
  },
  {
    id: 2,
    img: work2,
    title: "Menu Board Rollouts – CRI",
    category: "Banking",
    description: "Nationwide deployment of networked menu board systems with clean cabling.",
  },
  {
    id: 3,
    img: work3,
    title: "WiFi Optimization – Kemira",
    category: "Cloud Migration",
    description: "Deployed high performance access points to stabilize industrial internet usage.",
  },
];

const Portfolio = () => {
  return (
    <div>
      <section
        className="relative flex flex-col items-statrt justify-center min-h-[550px] bg-cover bg-center py-[50px] px-4 sm:px-6"
        style={{ backgroundImage: `url(${pageBg})` }}
      >
        <div className="flex items-center justify-center flex-col gap-8 w-full max-w-[650px] mx-auto">
          <h1 className="font-Satoshi font-bold text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight sm:leading-[90px] w-full max-w-[650px] sm:max-w-none">
            Explore our Proven Track Record
          </h1>

          <ScheduleBtn />
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-[100px] py-10 sm:py-14 lg:py-27 bg-background-white">
        <article className="flex flex-col items-center justify-center gap-10 lg:gap-20">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h2 className="text-text-header text-center lg:text-right text-2xl sm:text-3xl lg:text-5xl font-bold font-Satoshi leading-tight">
              Our <span className="text-text-green">Work</span> Does the Talking
            </h2>
            <span className="w-[108px] h-[3px] bg-text-green"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-8">
            {workData.map((work) => (
              <div
                key={work.id}
                className="flex w-full sm:w-[390px] p-6 flex-col items-start gap-2.5 rounded-lg bg-white shadow-md h-full sm:h-auto"
              >
                <img src={work.img} alt={work.title} />
                <h3 className="font-satoshi font-bold text-text-black text-lg leading-7">{work.title}</h3>
                {/* <span className="font-satoshi font-normal text-[#8B8B8B] text-sm leading-5s">{work.category}</span> */}
                <p className="font-satoshi font-normal text-text-black text-base leading-7">{work.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <MilestoneSection />
      <TestimonialSection />

      <ContactSection />
    </div>
  );
};

export default Portfolio;
