import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import styled from "styled-components";

interface ProductColorsProps {
    colors?: string[] | any[];
}

const ProductColors = ({ colors = [] }: ProductColorsProps) => {
    const [mainColor, setMainColor] = useState(colors[0] || [""]);

    return (
        <Wrapper>
            <span>Color:</span>
            <div className="color-picker__colors">
                {colors?.map((color, idx) => {
                    return (
                        <button
                            key={idx}
                            type="button"
                            name="color"
                            onClick={() => setMainColor(colors[idx])}
                            style={{ backgroundColor: `${color}` }}
                            className={`${
                                color === color
                                    ? "color-btn active"
                                    : "color-btn"
                            }`}
                            data-color={color}
                        >
                            {mainColor === color && <BsCheck />}
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
    gap:1rem;

`

export default ProductColors;
