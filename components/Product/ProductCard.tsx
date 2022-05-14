import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
    return (
        <div className="card card-body">
            <Image
                style={{
                    display: "block",
                    margin: "0 auto 10px",
                    maxHeight: "200px",
                }}
                width={"200"}
                height={"200"}
                src="https://react-shooping-cart.netlify.app/img/1.jpg?v=1"
                className="img-fluid"
                alt=""
            />
            <p>{"Product 1"}</p>
            <h3 className="text-left">$39.5</h3>
            <div className="text-right">
                <Link
                    href={`/shop/products/${2}`}
                    className="btn btn-link btn-sm mr-2"
                >
                    Details
                </Link>

                <button className="btn btn-outline-primary btn-sm">
                    Add more
                </button>

                <button className="btn btn-primary btn-sm">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
