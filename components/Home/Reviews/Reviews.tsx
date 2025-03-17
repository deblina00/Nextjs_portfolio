import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import Slider from "./Slider";


const Reviews = () => {
  return (
    <div id="reviews" className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>
        Client <span className="text-[#F78F42]">Testimonials</span>
      </SectionHeading>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
        {/* slider */}
        <Slider />
      </div>
    </div>
  );
};

export default Reviews;


