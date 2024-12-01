"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import PrimaryBadge from "../ui/primary-badge";
import TestimonialCard from "../ui/testimonial-card";
import FadeIn from "../animation/fade-in";
import { testimonials } from "@/constants/testimonials";

const Testimonials = () => {
  const ref = useRef<Slider>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially in case the window size is already below 1024px
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    ref.current?.slickNext();
  };

  const prevSlide = () => {
    ref.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
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
      <div className="container overflow-x-hidden">
        <FadeIn direction="left">
          <h5 className="text-center lg:text-left">
            <PrimaryBadge>Testimonials</PrimaryBadge>
          </h5>
          <h3 className="text-center lg:text-left font-poppins text-4xl lg:text-[42px] font-extrabold uppercase py-5">
            Unsere Kunden sprechen für uns
          </h3>
        </FadeIn>
      </div>
      <div className="relative overflow-hidden max-md:pb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Slider {...(settings as any)} ref={ref}>
              {testimonials.map((testimonial, index) => (
                <div className="pr-6" key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </Slider>
          </FadeIn>
        </div>
        <button
          className="absolute max-md:bottom-0 md:top-1/2 right-6 md:right-20 transform md:-translate-y-1/2 bg-secondary-main text-white rounded-full p-2 md:p-4"
          aria-label="Next slide"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
        <button
          className="md:hidden absolute max-md:bottom-0 md:top-1/2 left-6 bg-secondary-main text-white rounded-full p-2 md:p-4"
          aria-label="Previous slide"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
