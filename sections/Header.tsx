import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Carousel from "../components/Carousel";
import { carousels } from "../utils/constants";
import Image from "next/image";

const Header = () => {
  let splideOptions = {
    type: "fade",
    autoplay: true,
    cover: true,
    rewind: true,
    lazyLoad: "nearby",
  };

  return (
    <Splide
      tag="header"
      className="carousels"
      options={{
        type:'loop',
        autoplay: true,
        cover: true,
        rewind: true,
        lazyLoad: "nearby",
      }}
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
