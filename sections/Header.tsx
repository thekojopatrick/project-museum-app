import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Carousel from "../components/Carousel";
import { carousels,SlidesProps } from "../utils/constants";


const Header = ({options}:SlidesProps) => {
 
  return (
    <Splide
      tag="header"
      className="carousels"
      options={options}
      aria-labelledby="hero banner"
    >
      {carousels.map((carousel) => {
        return (
          <SplideSlide className="splide__slide--header" key={carousel.id}>
            <Carousel carousel={carousel} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Header;
