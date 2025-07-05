import React from "react";
import milestone1 from "../../assets/images/milestone1.png";
import milestone2 from "../../assets/images/milestone2.png";
import milestone3 from "../../assets/images/milestone3.png";
import milestone4 from "../../assets/images/milestone4.png";

const milestones = [
  {
    year: "2015",
    image: milestone1,
    title: "Foundation Laid",
    description: "Founded to Fix Gaps in Commercial IT Support",
  },
  {
    year: "2021",
    image: milestone2,
    title: "Innovation & Smart Solutions",
    description: "National Projects via Field Nation.",
  },
  {
    year: "2023",
    image: milestone3,
    title: "Industry Recognition & Impact",
    description: "Trusted by Government, Schools, and Corporates.",
  },
  {
    year: "2025",
    image: milestone4,
    title: "Future Ready",
    description: "Looking Ahead: Fiber Specialization & Scale",
  },
];

const MilestoneSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-[100px] py-10 sm:py-14 lg:py-27 bg-background-white">
      <article className="flex flex-col items-center justify-center gap-10 lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h2 className="text-text-header text-center lg:text-right text-2xl sm:text-3xl lg:text-5xl font-bold font-Satoshi leading-tight">
            <span className="text-text-green">BRAVOTEK'S </span> Evolution and Key Milestones
          </h2>
          <span className="w-[108px] h-[3px] bg-text-green"></span>
        </div>

        <div className="relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-[1px] before:bg-black before:hidden lg:before:block md:w-[80%]">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative mb-10 flex flex-col lg:flex-row items-center justify-between lg:gap-6 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-5/12 flex justify-center">
                <img src={milestone.image} alt={`Milestone ${milestone.year}`} className="rounded-xl shadow-md w-full max-w-[500px]" />
              </div>

              <div className="w-full lg:w-5/12 bg-background-white text-center lg:text-left px-4 mt-6 lg:mt-0 max-w-[502px]">
                <p className="text-text-green text-3xl font-bold leading-10">{milestone.year}</p>
                <h3 className="text-text-black text-[22px] font-Satoshi font-bold leading-9 mt-2">{milestone.title}</h3>
                <p className="text-text-body text-base mt-2">{milestone.description}</p>
              </div>

              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-black rounded-full border-4 border-white z-10 hidden lg:block"
                data-aos="zoom-in"
              ></span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default MilestoneSection;
