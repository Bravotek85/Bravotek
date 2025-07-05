import React from "react";
import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";
import service5 from "../../assets/images/service5.png";
import service6 from "../../assets/images/service6.png";
import service7 from "../../assets/images/service7.png";
import service8 from "../../assets/images/service8.png";


const servicesData = [
  {
    id: 1,
    title: "Access Point Installation",
    image: service1,
    list: [
      "Install and configure business grade wireless access points",
      // "Software and OS installation",
      // "Hardware troubleshooting and repair",
      // "System diagnostics and upgrades",
      // "IT Helpdesk (Tier 1–3 support)",
      // "Printer, Scanner, and Peripheral Setup",
      // "Preventive maintenance",
    ],
  },
  {
    id: 2,
    title: "Camera Drops",
    image: service2,
    list: [
      "Run clean drops for IP surveillance, indoor, and outdoor.",
      // "Switches and Cable Management",
      // "Cat 6 Anything (cabling, terminations, etc.)",
      // "Data Drops",
      // "Point to Point Wireless Installs",
      // "Site Survey",
      // "Rack / Stack and Rack Clean ups",
    ],
  },
  {
    id: 3,
    title: "Rack & Stack",
    image: service3,
    list: [
      "Organized rack installations for switches, servers, firewalls, and more.",
      // "Network health checks",
      // "Automated alerting / response",
      // "Log analysis / reporting",
      // "Hardware lifecycle tracking",
      // "Patch management",
      // "Performance optimization",
    ],
  },
  {
    id: 4,
    title: "Menu Board Setup",
    image: service4,
    list: [
      "Networked installations for retail and quick service industries.",
      // "Firewall and antivirus solutions",
      // "Security audits and vulnerability testing",
      // "Employee security training",
      // "Incident response planning",
      // "Data encryption",
    ],
  },
  {
    id: 5,
    title: "Point to Point Wireless",
    image: service5,
    list: [
      "Reliable long  distance WiFi for warehouses, trailers, or remote spaces.",
      // "Helpdesk support",
      // "IT infrastructure management",
      // "Vendor management",
      // "Strategic IT consulting",
      // "Regular reporting and analysis",
    ],
  },
  {
    id: 6,
    title: "Cable Management & Rack Cleanup",
    image: service6,
    list: [
      "Refresh existing IT rooms for function and visual clarity.",
      // "Database design and management",
      // "Business intelligence solutions",
      // "Data warehousing",
      // "Predictive analytics",
      // "Data visualization",
    ],
  },
  {
    id: 7,
    title: "HDD/Server Repair",
    image: service7,
    list: [
      "Component-level repairs and upgrades for enterprise-grade servers.",
      // "Database design and management",
      // "Business intelligence solutions",
      // "Data warehousing",
      // "Predictive analytics",
      // "Data visualization",
    ],
  },
  {
    id: 6,
    title: "Site Surveys",
    image: service8,
    list: [
      "Evaluate wiring, power, and install readiness before deployment.",
      // "Database design and management",
      // "Business intelligence solutions",
      // "Data warehousing",
      // "Predictive analytics",
      // "Data visualization",
    ],
  },
];

const ServiceSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-[100px] py-10 sm:py-20 bg-background-white">
      <article className="flex flex-col items-center justify-center gap-8 lg:gap-16">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h2 className="text-text-header text-center lg:text-right text-2xl sm:text-3xl lg:text-5xl font-bold font-Satoshi leading-tight">
            Our <span className="text-text-green">Service</span>
          </h2>
          <span className="w-[108px] h-[3px] bg-text-green"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-cover bg-center bg-no-repeat rounded-[30px] shadow-lg overflow-hidden group relative h-[350px] w-full md:w-auto"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Title view - hidden on mobile, visible on desktop by default, hidden on desktop hover */}
              <div className="flex flex-col items-center justify-center h-full p-4 transition-opacity duration-500 ease-in-out lg:flex lg:opacity-100 lg:group-hover:opacity-0">
                <h3 className="text-[28px] text-center text-white font-Satoshi font-bold leading-10">{service.title}</h3>
              </div>

              {/* List view - visible on mobile, visible on desktop hover, hidden on desktop by default */}
              <div className="absolute inset-0 flex flex-col items-start justify-center h-full p-6 bg-white border border-text-green rounded-[30px] bg-opacity-90 transition-opacity duration-500 ease-in-out opacity-100 lg:hidden lg:group-hover:flex lg:group-hover:opacity-100">
                <h3 className="text-xl text-center text-gray-800 font-Satoshi font-bold leading-10 mb-4">{service.title}</h3>
                <div className="w-full h-[1px] bg-text-green mb-4"></div>
                <ul className="flex flex-col items-start gap-3 w-full">
                  {service.list.map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-4">
                      <span className="w-2 h-2 bg-text-green rounded-full flex items-center justify-center"></span>
                      <li className="text-text-black text-base font-Satoshi font-normal leading-6">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ServiceSection;
