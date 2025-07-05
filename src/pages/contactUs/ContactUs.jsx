import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import pageBg from "../../assets/images/contactHeroImg.png";
import ContactSection from "../../components/views/ContactSection";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You would typically send this data to a backend API
  };

  return (
    <>
      <section
        className="relative flex flex-col items-statrt justify-center min-h-[550px] bg-cover bg-center py-[50px] px-4 sm:px-6"
        style={{ backgroundImage: `url(${pageBg})` }}
      >
        <div className="flex items-center justify-center flex-col gap-8 w-full max-w-[550px] mx-auto">
          <h1 className="font-Satoshi font-bold text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight sm:leading-[90px] w-full max-w-[304px] sm:max-w-none">
            Contact Us
          </h1>

          <p className="text-white text-center text-xl font-Satoshi font-bold leading-8">
            Have questions or need tailored IT support? Let's talk about how we can help your business grow.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-[100px] pb-10 sm:pb-14 lg:pb-20 bg-background-white">
        <article className="flex flex-col items-center gap-10 sm:gap-[110px]">
          {/* info block */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 transform -translate-y-14 w-full">
            <div className="w-full sm:w-[391px] h-[250px] rounded-xl bg-gradient-to-bl from-black via-black to-[#66c65f] shadow-md flex items-center justify-center flex-col">
              <FaPhone className="text-text-green" size={52} />
              <h3 className="text-white text-center text-2xl font-bold font-Satoshi leading-9 mt-2">Phone</h3>
              <p className="text-white text-center text-base font-medium font-Satoshi leading-6 mt-6">+1 522 888 123</p>
            </div>

            <div className="w-full sm:w-[391px] h-[250px] rounded-xl bg-gradient-to-bl from-black via-black to-[#66c65f] shadow-md flex items-center justify-center flex-col">
              <FaEnvelope className="text-text-green" size={52} />
              <h3 className="text-white text-center text-2xl font-bold font-Satoshi leading-9 mt-2">Email</h3>
              <p className="text-white text-center text-base font-medium font-Satoshi leading-6 mt-6">BravoTek@gmail.com</p>
            </div>

            <div className="w-full sm:w-[391px] h-[250px] rounded-xl bg-gradient-to-bl from-black via-black to-[#66c65f] shadow-md flex items-center justify-center flex-col">
              <FaLocationDot className="text-text-green" size={52} />
              <h3 className="text-white text-center text-2xl font-bold font-Satoshi leading-9 mt-2">Address</h3>
              <p className="text-white text-center text-base font-medium font-Satoshi leading-6 mt-6">
                85 Madison Av, 10th Floor, NY 10016
              </p>
            </div>
          </div>

          {/* form */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-full gap-10 lg:gap-0">
            <div className="flex-1 flex flex-col items-center lg:items-start gap-4 w-full max-w-[604px] px-4 sm:px-0">
              <div className="flex flex-col items-center lg:items-start justify-center gap-2 w-full">
                <h2 className="text-text-header text-center lg:text-right text-2xl sm:text-3xl lg:text-5xl font-bold font-Satoshi leading-tight">
                  Get in Touch <span className="text-text-green">Today</span>
                </h2>
                <span className="w-[108px] h-[3px] bg-text-green lg:ml-10"></span>
              </div>

              <p className="font-Satoshi font-normal text-sm sm:text-base text-text-black leading-7 sm:leading-8 text-center lg:text-left max-w-[510px]">
                Whether you're looking to upgrade your IT infrastructure, secure your network, or need expert consulting for your next big
                project, we're here to help. Our team of professionals is ready to provide personalized solutions that align with your
                business goals. No bots, no delays just real conversations with real experts.
              </p>

              <p className="font-Satoshi font-bold text-sm sm:text-base text-text-black leading-8">
                Get in touch today and let's build something great together.
              </p>
            </div>

            <form className="flex-1 flex flex-col gap-6 w-full max-w-[604px] px-4 sm:px-0" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="firstName" className="font-Satoshi font-bold text-sm text-text-black leading-7">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="bg-[#1E1E1E11] p-3 rounded-md border border-gray-300 focus:outline-none focus:border-text-green"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="lastName" className="font-Satoshi font-bold text-sm text-text-black leading-7">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="bg-[#1E1E1E11] p-3 rounded-md border border-gray-300 focus:outline-none focus:border-text-green"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="email" className="font-Satoshi font-bold text-sm text-text-black leading-7">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-[#1E1E1E11] p-3 rounded-md border border-gray-300 focus:outline-none focus:border-text-green"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="phone" className="font-Satoshi font-bold text-sm text-text-black leading-7">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="bg-[#1E1E1E11] p-3 rounded-md border border-gray-300 focus:outline-none focus:border-text-green"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-Satoshi font-bold text-sm text-text-black leading-7">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="bg-[#1E1E1E11] p-3 rounded-md border border-gray-300 focus:outline-none focus:border-text-green"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-Satoshi font-bold text-sm text-text-black leading-7">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="bg-[#1E1E1E11] p-3 rounded-md border border-gray-300 focus:outline-none focus:border-text-green resize-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-[382px] py-3 px-6 border border-text-green bg-transparent text-text-green rounded-lg font-medium transition-all duration-300 ease-in-out hover:bg-text-green hover:border hover:border-transparent hover:text-white cursor-pointer self-center"
              >
                Send
              </button>
            </form>
          </div>
        </article>
      </section>

      {/* map iframe */}
      <section className="px-4 sm:px-6 lg:px-[100px] pb-10 sm:pb-14 lg:pb-20 bg-background-white">
        <div className="relative w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8625107376015!2d39.45080137595183!3d-6.664964765316428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c51b7ff86f9e7%3A0x61d6c6aef19a2b72!2sFumba%20Town!5e0!3m2!1sen!2stz!4v1715527492066!5m2!1sen!2stz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default ContactUs;
