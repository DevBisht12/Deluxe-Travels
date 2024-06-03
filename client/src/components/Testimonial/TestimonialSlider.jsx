import React from "react";
// import './TestimonialSlider.css'
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialsCard";

const TestimonialSlider = () => {
  return (
    <div className="testimonials">
    <Marquee  pauseOnHover={true} gradient={true    }>
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
      <TestimonialCard />
    </Marquee>
    </div>
  );
};

export default TestimonialSlider;
