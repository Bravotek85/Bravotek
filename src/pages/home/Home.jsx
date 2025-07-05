import React, { useState, useEffect } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "../../components/views/ContactSection";
import CTASection from "../../components/views/CTASection";
import WhyChooseSection from "../../components/views/WhyChooseSection";
import WhoWeAreSection from "../../components/views/WhoWeAreSection";
import heroImg from "../../assets/images/heroImg.png";
import ScheduleBtn from "../../components/ui/ScheduleBtn";

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Network Security", "Professional Server", "24/7 monitoring", "LAN & WAN Configuration"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <section
        className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center py-[50px] px-4 sm:px-6"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay with blur */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] md:backdrop-blur-[6px]" />

        <article className="relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-13 w-full max-w-[1000px]">
          <div className="flex flex-col items-center md:gap-1">
            <h1 className="font-Satoshi font-bold text-center text-white text-4xl sm:text-5xl md:text-[70px] leading-tight sm:leading-[90px]">
              Built for Uptime
            </h1>

            <div className="h-[90px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-Satoshi font-bold text-center text-text-green text-4xl sm:text-5xl md:text-[70px] leading-tight sm:leading-[90px]"
                >
                  {texts[currentTextIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <h1 className="font-Satoshi font-bold text-center text-white text-4xl sm:text-5xl md:text-[70px] leading-tight sm:leading-[90px]">
              Back by Experts
            </h1>
            <p className="text-white text-center text-base sm:text-lg md:text-xl font-Satoshi font-bold leading-6 sm:leading-8 max-w-[800px] mt-4">
              Our certified team specializes in seamless server installations, patch panel configuration, and robust network protection,
              built to scale with your growth.
            </p>
          </div>
          <ScheduleBtn />
          {/* <Link
            to="/schedule-meeting"
            className="w-full sm:w-auto bg-text-green flex items-center justify-center py-3 sm:py-4 px-4 sm:px-6 rounded-[40px] gap-2 cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:bg-green-700"
          >
            <FaPhone className="text-white" />
            <span className="text-white font-Satoshi font-bold text-base sm:text-lg leading-7">Schedule a Discovery Call</span>
          </Link> */}
        </article>
      </section>

      <WhoWeAreSection />
      <WhyChooseSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default Home;
