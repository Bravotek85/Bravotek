import React, { useState } from "react";
import contactBg from "../../assets/images/contactBg.png";
import { FaPhone } from "react-icons/fa6";

const ContactSection = () => {
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
  };

  const initialErrors = {
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let tempErrors = { ...initialErrors };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phoneNumber.trim()) {
      tempErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = "Please enter a valid phone number";
      isValid = false;
    }

    // Description validation
    if (!formData.description.trim()) {
      tempErrors.description = "Description is required";
      isValid = false;
    } else if (formData.description.length < 10) {
      tempErrors.description = "Description must be at least 10 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        // Here you can add your form submission logic
        console.log("Form submitted:", formData);
        // Reset form after successful submission
        setFormData(initialFormData);
        setErrors(initialErrors);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <section
        className="flex flex-col items-center justify-center bg-cover bg-center py-[50px] bg-amber-50 px-4 sm:px-6"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <article className="flex w-full max-w-[770px] h-auto py-[30px] sm:py-[51px] px-[20px] sm:px-[35px] items-start justify-center rounded-[40px] border border-white/10 bg-[#F7F7F71A] backdrop-blur-[17.5px]">
          <div className="flex flex-col items-center justify-start gap-8 sm:gap-14 w-full">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-white text-center text-3xl sm:text-5xl font-bold font-Satoshi leading-14">Get a Quote</h2>
              <span className="w-[150px] h-[3px] bg-text-green"></span>
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-8 sm:gap-14">
              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-[80px] w-full">
                <div className="space-y-4 flex-1 w-full">
                  {/* name */}
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-1 font-Satoshi leading-5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border placeholder:text-sm ${
                        errors.name ? "border-red-500" : "border-white/20"
                      } text-white placeholder-white/60 focus:outline-none focus:border-white/40`}
                    />
                    {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                  </div>

                  {/* email */}
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-1 font-Satoshi leading-5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border placeholder:text-sm ${
                        errors.email ? "border-red-500" : "border-white/20 "
                      } text-white placeholder-white/60 focus:outline-none focus:border-white/40`}
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                  </div>

                  {/* phone number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-white text-sm font-medium mb-1 font-Satoshi leading-5">
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`w-full px-4 py-3 rounded-lg bg-white/10 border placeholder:text-sm ${
                        errors.phoneNumber ? "border-red-500" : "border-white/20"
                      } text-white placeholder-white/60 focus:outline-none focus:border-white/40`}
                    />
                    {errors.phoneNumber && <p className="mt-1 text-red-500 text-sm">{errors.phoneNumber}</p>}
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 w-full">
                  <label htmlFor="description" className="block text-white text-sm font-medium mb-1 font-Satoshi leading-5">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Project Description"
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border placeholder:text-sm ${
                      errors.description ? "border-red-500" : "border-white/20"
                    } text-white placeholder-white/60 focus:outline-none focus:border-white/40 resize-none`}
                  ></textarea>
                  {errors.description && <p className="mt-1 text-red-500 text-sm">{errors.description}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-[382px] py-3 px-6 border border-text-green bg-transparent text-text-green rounded-lg font-medium transition-all duration-300 ease-in-out hover:bg-text-green hover:border hover:border-transparent hover:text-white cursor-pointer ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-opacity-90"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </article>
      </section>

      <div className="bg-[#003166] h-auto sm:h-[225px] px-4 sm:px-[100px] py-7 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 w-full">
        <p className="w-full sm:w-[599px] font-Satoshi font-bold text-xl sm:text-2xl leading-7 sm:leading-9 text-white text-center sm:text-left">
          Need an expert with your IT infrastructure? lets talk! We'll assess your needs and build a custom plan.
        </p>

        <button
          type="button"
          className="w-full sm:w-auto bg-text-green flex items-center justify-center py-4 px-6 rounded-[40px] gap-2 cursor-pointer border border-transparent transition-all duration-300 ease-in-out hover:border hover:bg-transparent hover:border-text-green hover:text-white"
        >
          <FaPhone className="text-white" />
          <span className="text-white font-Satoshi font-bold text-lg leading-7">Contact Us</span>
        </button>
      </div>
    </>
  );
};

export default ContactSection;
