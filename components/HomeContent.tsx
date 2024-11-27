import React from "react";

const HomeContent = () => {
  return (
    <div>
      <section
        className="hero bg-cover bg-center h-screen flex items-center justify-center px-4 sm:px-6 md:px-8"
        style={{ backgroundImage: "url('/ahmed.png')" }}
      >
        <div className="text-center space-y-6">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-700 pr-0 sm:pr-12 md:pr-24 font-bold fade-in">
            Explore Our Bags Collection
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-orange-700 font-semibold">
            Stylish, trendy, and functional bags for every need!
          </p>

          {/* Button */}
          <button className="mt-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-orange-700 hover:bg-orange-500 text-white font-bold rounded shadow-lg">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
