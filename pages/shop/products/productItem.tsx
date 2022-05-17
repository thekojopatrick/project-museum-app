import Link from "next/link";
import Image from "next/image";

interface ProductProps {
    product: any;
}

const ProductItem = ({ product: { id, name, price, photo } }: ProductProps) => {
    return (
        <div className="card card-body">
            <Image
                width={"200"}
                height={"200"}
                src={`${photo}`}
                className="img-fluid"
                alt=""
            />
            <p>{name}</p>
            <h3 className="text-left">${price}</h3>
            <div className="btn-group justify-end">
                <Link
                    href={{
                        pathname: "/shop/products/[id]",
                        query: { id: id },
                    }}
                >
                    <a className="shop-btn shop-btn__link mr-2">Details</a>
                </Link>
                <button className="shop-btn shop-btn__outline">Add more</button>
                <button className="shop-btn shop-btn__primary">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
