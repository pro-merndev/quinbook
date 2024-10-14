"use client";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";
import PrimaryBadge from "../shared/primary-badge";
import TestimonialCard from "../shared/testimonial-card";

const ExtendedCarousel = () => {
  const ref = useRef<Slider>(null);

  const nextSlide = () => {
    ref.current?.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: false,
    nextArrow: false,
  };

  return (
    <div className="py-12 lg:py-20">
      <div className="container">
        <PrimaryBadge>Testimonials</PrimaryBadge>
        <h3 className="font-poppins text-[42px] font-extrabold uppercase py-5">Unsere Kunden sprechen für uns</h3>
      </div>
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4">
          <Slider {...(settings as any)} ref={ref}>
            <div className="pr-6">
              <TestimonialCard />
            </div>
            <div className="pr-6">
              <TestimonialCard />
            </div>
            <div className="pr-6">
              <TestimonialCard />
            </div>
            <div className="pr-6">
              <TestimonialCard />
            </div>
            <div className="pr-6">
              <TestimonialCard />
            </div>
            <div className="pr-6">
              <TestimonialCard />
            </div>
          </Slider>
        </div>
        <button
          className="absolute top-1/2 right-20 transform -translate-y-1/2 bg-secondary-main text-white rounded-full p-4"
          aria-label="Next slide"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ExtendedCarousel;
