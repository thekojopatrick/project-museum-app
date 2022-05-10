import React from "react";

import Image from "next/image";

const Carousel = ({ carousel }) => {
  const { id, title, img, desc } = carousel;
  return (
    <>
      {/* <div className="overlay"></div> */}
      <Image
        className="header__background"
        loading="lazy"
        layout="fill"
        src={img}
        alt={title}
      />
      {/* <div className="header__content">
        <div className="header__content-inner">
          <h1 className="heading heading-1">{title}</h1>
          <p className="text-lg-2x">{desc}</p>
        </div>
      </div> */}
    </>
  );
};

export default Carousel;
