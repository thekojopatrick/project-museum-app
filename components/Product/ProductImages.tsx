import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

interface ImagesProps {
    images?: string[] | undefined;
}

const ProductImages = ({ images = [""] }: ImagesProps) => {
    const [main, setMain] = useState(images[7] || "");

    return (
        <Wrapper>
            <Image
                layout="responsive"
                width={400}
                height={300}
                src={main}
                alt="main"
                quality={100}
                className="main"
            />
            <div className="gallery">
                {images?.map((image, idx) => {
                    return (
                        <Image
                            height={300}
                            width={300}
                            key={idx}
                            onClick={() => setMain(images[idx])}
                            src={image}
                            alt={"image"}
                            className={`${image === main ? "active" : null}`}
                        />
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .main {
        height: 600px;
    }
    img {
        width: 100%;
        display: block;
        object-fit: cover;
    }
    .gallery {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 1rem;
        img {
            height: 100px;
            cursor: pointer;
        }
    }
    .active {
        border-radius: 4px;
        box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
    }
    @media (max-width: 576px) {
        .main {
            height: 300px;
        }
        .gallery {
            img {
                height: 50px;
            }
        }
    }
    @media (min-width: 992px) {
        .main {
            height: 500px;
        }
        .gallery {
            img {
                height: 75px;
            }
        }
    }
`;

export default ProductImages;
