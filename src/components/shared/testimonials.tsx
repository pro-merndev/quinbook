"use client";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import PrimaryBadge from "../ui/primary-badge";
import TestimonialCard from "../ui/testimonial-card";
import FadeIn from "../animation/fade-in";

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
      <div className="container">
        <FadeIn direction="left">
          <h5 className="text-center lg:text-left">
            <PrimaryBadge>Testimonials</PrimaryBadge>
          </h5>
          <h3 className="text-center lg:text-leftfont-poppins text-4xl lg:text-[42px] font-extrabold uppercase py-5">
            Unsere Kunden sprechen für uns
          </h3>
        </FadeIn>
      </div>
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Slider {...(settings as any)} ref={ref}>
              {Array.from({ length: 5 }).map((_, index) => (
                <div className="pr-6" key={index}>
                  <TestimonialCard />
                </div>
              ))}
            </Slider>
          </FadeIn>
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

export default Testimonials;
