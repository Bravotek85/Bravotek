import React from "react";
import User from "../../assets/icons/user.svg";
import Star from "../../assets/icons/star.svg";
import Search from "../../assets/icons/search.svg";
import Time from "../../assets/icons/time.svg";

const reasons = [
  {
    id: 1,
    title: "Customer Approach",
    description:
      "At Bravotek, every project begins with listening. We take time to understand your unique goals, challenges, and expectations before offering solutions.",
    icon: User,
  },
  {
    id: 2,
    title: "Certified Experts",
    description:
      "Our team is made up of certified IT professionals with deep expertise in networking, cybersecurity, server architecture, and cloud infrastructure.",
    icon: Star,
  },
  {
    id: 3,
    title: "Transparency",
    description:
      "Clarity builds confidence. From pricing and timelines to service breakdowns and deliverables, Bravotek operates with complete transparency.",
    icon: Search,
  },
  {
    id: 4,
    title: "24/7 Monitoring ",
    description:
      "Downtime isn’t an option. Our team provides around the clock monitoring and real time alerts to ensure your systems are always up, secure, and optimized.",
    icon: Time,
  },
];

const WhyChooseSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-[100px] py-10 sm:py-14 lg:py-27 bg-background-white">
      <article className="flex flex-col items-center justify-center gap-10 lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h2 className="text-text-header text-center lg:text-right text-2xl sm:text-3xl lg:text-5xl font-bold font-Satoshi leading-tight">
            Why Choose <span className="text-text-green">BravoTek</span>
          </h2>
          <span className="w-[108px] h-[3px] bg-text-green"></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="flex flex-col items-start justify-center p-6 rounded-2xl bg-[#FAFAFA] shadow w-full max-w-full">
              <img src={reason.icon} alt={reason.title} className="mb-4 w-12 h-12" />
              <div className="flex flex-col items-start justify-center gap-2">
                <h3 className="text-text-header text-xl sm:text-2xl font-Satoshi font-bold leading-9">{reason.title}</h3>
                <p className="text-sm sm:text-base text-text-header font-Satoshi font-normal leading-6 sm:leading-8">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default WhyChooseSection;
