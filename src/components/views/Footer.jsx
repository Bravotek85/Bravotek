import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import email from "../../assets/icons/email.svg";
import call from "../../assets/icons/call.svg";
import location from "../../assets/icons/location.svg";
// import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
// import facebook from "../../assets/icons/facebook.svg";
// import twitter from "../../assets/icons/x.svg";
// import youtube from "../../assets/icons/youtube.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container px-4 sm:px-6 lg:px-[100px] py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="w-full lg:max-w-[285px]">
            <div className="flex items-center mb-1">
              <Link to="/" className="text-2xl font-bold text-gray-800">
                <img src={Logo} alt="logo" loading="lazy" decoding="async" className="w-40 sm:w-auto" />
              </Link>
            </div>

            <div className="w-[130px] bg-text-green h-[3px] mb-4 ml-0 lg:ml-10"></div>

            <p className="text-text-black text-sm font-Satoshi font-normal leading-[24px]">
              At the intersection of technology and business growth delivering mission critical IT support, secure server networks, and
              future ready strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:w-auto">
            {/* Quick Links */}
            <div className="flex flex-col items-start">
              <h3 className="text-base font-bold mb-4 text-text-green font-Satoshi leading-6">Quick Links</h3>
              <ul className="space-y-4 list-disc">
                <li>
                  <Link to="/services" className="text-[#8B8B8B] hover:text-text-green text-sm leading-5">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-[#8B8B8B] hover:text-text-green text-sm leading-5">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-[#8B8B8B] hover:text-text-green text-sm leading-5">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-[#8B8B8B] hover:text-text-green text-sm leading-5">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base font-bold mb-4 text-text-green font-Satoshi leading-6">Contacts</h3>
              <ul className="space-y-4 text-gray-60">
                <li className="flex items-start gap-2 text-[#8B8B8B] text-sm leading-5">
                  <img src={email} alt="logo" loading="lazy" decoding="async" width={18} height={18} className="mt-1" />
                  <span>BravoTek@gmail.com</span>
                </li>
                <li className="flex items-start gap-2 text-[#8B8B8B] text-sm leading-5">
                  <img src={call} alt="logo" loading="lazy" decoding="async" width={18} height={18} className="mt-1" />
                  <span>+1 522 888 123</span>
                </li>
                <li className="flex items-start gap-2 text-[#8B8B8B] text-sm leading-5">
                  <img src={location} alt="logo" loading="lazy" decoding="async" width={18} height={18} className="mt-1" />
                  <span>
                    85 Madison Avenue, 10th Floor
                    <br /> New York, NY 10016 United States
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="sm:col-span-2 lg:col-span-1 md:ml-10">
              <h3 className="text-base font-bold mb-4 text-text-green font-Satoshi leading-6">Socials</h3>
              <ul className="flex flex-col flex-wrap gap-4 justify-center items-start">
                {/* <li>
                  <Link
                    to="/"
                    className="text-[#8B8B8B] text-sm leading-5 hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
                  >
                    <img src={linkedin} alt="logo" loading="lazy" decoding="async" width={24} height={24} />
                    <span>LinkedIn</span>
                  </Link>
                </li> */}

                <li>
                  <Link
                    to="http://www.instagram.com/bravotek"
                    className="text-[#8B8B8B] text-sm leading-5 hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
                  >
                    <img src={instagram} alt="logo" loading="lazy" decoding="async" width={24} height={24} />
                    <span>Instagram</span>
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to="/"
                    className="text-[#8B8B8B] text-sm leading-5 hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
                  >
                    <img src={twitter} alt="logo" loading="lazy" decoding="async" width={24} height={24} />
                    <span>Twitter</span>
                  </Link>
                </li> */}

                {/* <li>
                  <Link
                    to="/"
                    className="text-[#8B8B8B] text-sm leading-5 hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
                  >
                    <img src={facebook} alt="logo" loading="lazy" decoding="async" width={24} height={24} />
                    <span>Facebook</span>
                  </Link>
                </li> */}

                {/* <li>
                  <Link
                    to="/"
                    className="text-[#8B8B8B] text-sm leading-5 hover:opacity-80 transition-opacity flex items-center justify-center gap-2"
                  >
                    <img src={youtube} alt="logo" loading="lazy" decoding="async" width={24} height={24} />
                    <p className="">Youtube</p>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
          <p className="text-sm sm:text-base">&copy; {currentYear} All rights reserved by BravoTek</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
