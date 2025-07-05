import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO",
    company: "Tech Solutions Inc.",
    text: "Working with Brovotek has been an absolute pleasure. Their team's expertise and dedication have helped us achieve remarkable results in our digital transformation journey.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Global Innovations",
    text: "The level of professionalism and attention to detail that Brovotek brings to every project is outstanding. They've become an invaluable partner in our growth.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO",
    company: "Future Tech",
    text: "Brovotek's innovative solutions have significantly improved our operational efficiency. Their team's technical expertise is truly impressive.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Product Manager",
    company: "Innovate Solutions",
    text: "Brovotek's team has been instrumental in helping us launch our new product line. Their technical expertise and attention to detail are unmatched.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Operations Director",
    company: "Global Tech",
    text: "The efficiency and professionalism of Brovotek's team have transformed our operations. Their solutions have helped us scale our business effectively.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Marketing Manager",
    company: "Digital Solutions",
    text: "Working with Brovotek has been a game-changer for our marketing strategies. Their innovative approach has helped us reach new heights.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-[100px] py-10 sm:py-14 lg:py-27 bg-background-white">
      <article className="flex flex-col items-center justify-center gap-10 lg:gap-20">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h2 className="text-text-header text-center lg:text-right text-2xl sm:text-3xl lg:text-5xl font-bold font-Satoshi leading-tight">
            Clients <span className="text-text-green">Testimonial</span>
          </h2>
          <span className="w-[128px] h-[3px] bg-text-green"></span>
        </div>

        <div className="w-full max-w-6xl">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 rounded-lg shadow-lg h-[280px] overflow-y-auto flex flex-col border border-text-green">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-text-green"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-text-header">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 flex-grow">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </section>
  );
};

export default TestimonialSection;
