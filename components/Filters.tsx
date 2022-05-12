import { colorArray } from "../utils/constants";
import Accordion from "./Accordion";
import ColorPicker from "./ColorPicker";

const Filters = () => {
    return (
        <div>
            <Accordion />
            <Accordion />
            <Accordion />
            <ColorPicker colors={colorArray} />
        </div>
    );
};

export default Filters;
