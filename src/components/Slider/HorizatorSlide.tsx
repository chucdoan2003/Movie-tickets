import React, { useRef } from "react";

interface SliderProps {
    name: string;
    children?: React.ReactNode;
}

const HorizontalSlider = ({ name, children } : SliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null); // Tham chiếu tới container

  const scrollAmount = 300; // Khoảng cách lướt mỗi lần

  // Hàm lướt sang trái
  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  // Hàm lướt sang phải
  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Nút lùi */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        &#9664;
      </button>

      {/* Container cuộn ngang */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-6 no-scrollbar transition-transform duration-300"
      >
        {children}
      </div>

      {/* Nút tiến */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        &#9654;
      </button>
    </div>
  );
};

export default HorizontalSlider;
