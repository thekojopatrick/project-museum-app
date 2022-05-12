import { BsCheck } from "react-icons/bs";

interface ColorPickerProps {
    colors?: string[];
}

const ColorPicker = ({ colors }: ColorPickerProps) => {
    return (
        <div className="color-picker">
            <h5>Colors</h5>
            <div className="color-picker__colors">
                {colors?.map((color, idx) => {
                    return (
                        <button
                            key={idx}
                            type="button"
                            name="color"
                            style={{ backgroundColor: `${color}` }}
                            className={`${
                                color === color
                                    ? "color-btn active"
                                    : "color-btn"
                            }`}
                            data-color={color}
                        >
                            {color === color && <BsCheck />}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ColorPicker;
