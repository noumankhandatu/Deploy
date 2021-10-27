import React from "react";
import Carousel from "react-elastic-carousel";
import "./carousel.style.css";
const CustomCarousel = (props) => {
  return (
    <Carousel
      className="carousel"
      itemPadding={props.itemPadding}
      breakPoints={props.breakPoints}
      pagination={false}
      enableAutoPlay
    >
      {props.children}
    </Carousel>
  );
};

export default CustomCarousel;
