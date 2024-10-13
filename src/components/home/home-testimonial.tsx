"use client";
import Slider from "react-slick";
import PrimaryBadge from "../shared/primary-badge";
import TestimonialCard from "../shared/testimonial-card";

const HomeTestimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    prevArrow: <button className="slick-arrow slick-prev"></button>,
    nextArrow: false
  };
  return (
    <div className="py-12 lg:py-20">
      <div className="container">
        <PrimaryBadge>Testimonials</PrimaryBadge>
        <h3 className="font-poppins text-[42px] font-extrabold uppercase py-5">Unsere Kunden sprechen für uns</h3>
      </div>
      <div className="mt-10 overflow-x-hidden">
        <Slider {...settings}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Slider>
      </div>
    </div>
  );
};

export default HomeTestimonial;
