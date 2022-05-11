import Image from "next/image";
import Link from "next/link";
import { shop } from "../utils/constants";

const Shop = () => {
    return (
        <section className="section-shop" id="shop">
            <div className="shop__image">
                <Image
                    layout="fill"
                    objectFit="cover"
                    src={shop[0].img}
                    alt={shop[0].title + "Image"}
                />
            </div>
            <div className="shop__content">
                <h2 className="heading heading-2">{shop[0].title}</h2>
                <p className="text-lg mt-lg-x">{shop[0].desc}</p>
                <Link href="/shop">
                    <a className="btn shop__btn mt-lg-x">Let&apos;s Shop</a>
                </Link>
            </div>
        </section>
    );
};

export default Shop;
