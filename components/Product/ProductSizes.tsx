import { useState } from "react";
import styled from "styled-components";
interface ProductSizesProps {
    sizes?: string[] | any[];
}

const ProductSizes = ({ sizes = [""] }: ProductSizesProps) => {
    const [mainSize, setMainSize] = useState(sizes[0] || [""]);

    return (
        <Wrapper>
            <span>Size:</span>
            <div className="product-sizes">
                {sizes?.map((size, idx) => {
                   
                    return (
                        <button
                            key={idx}
                            type="button"
                            name="size"
                            onClick={() => setMainSize(sizes[idx])}
                            className={`${
                                mainSize === size
                                    ? "size-btn active"
                                    : "size-btn"
                            }`}
                            data-size={size}
                        >
                            {size}
                        </button>
                    );
                })}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    gap: 1rem;

    .product-sizes {
        display: inline-flex;
        gap: 1rem;
    }

    .size-btn {
        padding: 0.8rem;
        cursor: pointer;
    }

    .active {
        border: solid 1px black;
    }
`;
export default ProductSizes;
