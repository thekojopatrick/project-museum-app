import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Carousel from "../components/Carousel";
import { carousels } from "../utils/constants";
import Image from "next/image";

const Header = () => {
  const splideOption = {
    rewind: true,
    type: "fade",
    perPage: 3,
    cover: true,
    height: "10rem",
    lazyLoad: "nearby",
    breakpoints: {
      height: "6rem",
    },
  };

  return (
    <header className="carousels ">
      <Splide options={{splideOption}}>
        {carousels.map((carousel) => {
          return (
            <SplideSlide key={carousel.id} className="header">
              <Image
                layout="fill"
                src={carousel.img}
                alt={carousel.title}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </header>
  );
};

export default Header;
