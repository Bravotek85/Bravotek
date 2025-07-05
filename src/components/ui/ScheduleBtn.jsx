import React from "react";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";

const ScheduleBtn = () => {
  return (
    <Link
      to="/schedule-meeting"
      className="w-full sm:w-auto bg-text-green flex items-center justify-center py-3 sm:py-4 px-4 sm:px-6 rounded-[40px] gap-2 cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:bg-green-700"
    >
      <FaPhone className="text-white" />
      <span className="text-white font-Satoshi font-bold text-base sm:text-lg leading-7">Schedule a Discovery Call</span>
    </Link>
  );
};

export default ScheduleBtn;
