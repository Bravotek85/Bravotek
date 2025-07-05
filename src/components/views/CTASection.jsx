import React from "react";

const CTASection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-[100px] py-10 sm:py-20 lg:py-40 bg-background-alt">
      <article className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="w-full lg:flex-1">
          <iframe
            className="w-full h-[250px] sm:h-[300px] md:h-[364px]"
            src="https://www.youtube.com/embed/MAlSjtxy5ak?si=q2vbwqdmDtNU4-B3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full lg:flex-1 flex flex-col items-start gap-8 lg:gap-14 lg:w-[516px]">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <h2 className="text-text-header text-center lg:text-right text-2xl sm:text-3xl lg:text-5xl font-bold font-Satoshi leading-tight">
              A Closer Look at <span className="text-text-green">Our Services</span>
            </h2>
            <span className="w-[108px] h-[3px] bg-text-green lg:self-end"></span>
          </div>

          <p className="text-sm sm:text-base text-text-black font-normal font-Satoshi leading-6 sm:leading-8">
            Discover how we deliver reliable, scalable, and secure IT solutions tailored to meet modern business needs. From structured
            cabling and server setup to cloud integration and cybersecurity this short video walks you through our process, our people, and
            the value we bring to every project. Whether you're a startup or a growing enterprise, we're here to power your digital backbone
            with excellence.
          </p>
        </div>
      </article>
    </section>
  );
};

export default CTASection;
