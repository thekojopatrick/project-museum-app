import Link from "next/link";
import styled from "styled-components";

const AddToCart = () => {
    return (
        <Wrapper>
            <button className="shop-btn shop-btn__outline" disabled>
                Out of Stock
            </button>
            <button className="shop-btn shop-btn__outline">Add to cart</button>
            <Link href="/shop/cart">
                <a className="shop-btn shop-btn__primary">View Bag</a>
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;

    .shop-btn {
        padding: 0.8rem 1.2rem;
        font-size: 1.6rem;

        &__primary {
        }
        &__outline {
            &:disabled {
                background-color: rgba(128, 128, 128, 0.4);
                border: none;
                color: white;
            }
        }
    }
`;

export default AddToCart;
