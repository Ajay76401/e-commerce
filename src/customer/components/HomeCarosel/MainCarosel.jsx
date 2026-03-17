import React from "react";
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from "./MainCarouselData";

const MainCarosel = () => {
  const items = MainCaroselData.map((item) => (
    <img
      className="cursor-pointer"
      src={item.image}
      role="presentation"
      alt=""
    />
  ));
  return <AliceCarousel items={items} 
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite

  />;
};

export default MainCarosel;