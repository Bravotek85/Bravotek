import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import ScheduleMeeting from "./pages/schedule-meeting/ScheduleMeeting";
import Error from "./pages/error/Error";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
