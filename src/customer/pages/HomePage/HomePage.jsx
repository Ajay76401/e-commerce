import React from "react";
import MainCarosel from "../../components/HomeCarosel/MainCarosel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lag-px-10">
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>
    </div>
  );
};

export default HomePage;
