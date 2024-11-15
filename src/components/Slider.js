// src/components/Slider.js
import React from "react";
import Slider from "react-slick";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slidesData = [
    {
      id: 1,
      content: "Explore new topics with our expert teachers!",
    },
    {
      id: 2,
      content: "Join online meetings anytime, anywhere.",
    },
    {
      id: 3,
      content: "Gain new skills and advance your career!",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="p-4">
            <div className="bg-white text-blue-600 rounded-lg p-6 shadow-lg text-center">
              {slide.content}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
