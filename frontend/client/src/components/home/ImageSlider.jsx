import React from "react";
import { useState } from "react";
function ImageSlider() {
  const placeholders = Array(6).fill(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? placeholders.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === placeholders.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden max-w-4xl m-6">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {placeholders.map((_, index) => (
          <div className="min-w-full flex justify-center " key={index}>
            {/* Placeholder Grey Box */}
            <div className="w-64 h-64 bg-gray-300 rounded-lg flex items-center justify-center shadow-slate-950">
              <p className="text-gray-600">Placeholder {index + 1}</p>
            </div>
          </div>
        ))}
      </div>

     {/*Left Button */}
     <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default ImageSlider;
