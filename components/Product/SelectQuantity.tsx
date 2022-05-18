import styled from "styled-components";

interface QuantityProps {
    quantity?: number;
    increase?: any;
    decrease?: any;
}

const SelectQuantity = ({
    quantity = 1,
    increase,
    decrease,
}: QuantityProps) => {
    return (
        <Wrapper>
            <span>Select Quantity</span>
            <div className="quantity-btn">
                <button onClick={decrease} className="qty-btn">
                    -
                </button>
                <p className="quantity">{quantity}</p>
                <button onClick={increase} className="qty-btn">
                    +
                </button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;

    .quantity-btn {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
    }
    .quantity {
        width: 32px;
        height: 32px;
        text-align: center;
        font-size: larger;
        padding: 2px;
        border: solid 1px black;
    }

    .qty-btn {
        color: black;
        cursor: pointer;
        font-size: x-large;
        transition: text-decoration ease 0.3s;

        &:active,
        &:hover {
            text-decoration: underline;
        }
    }
`;

export default SelectQuantity;
