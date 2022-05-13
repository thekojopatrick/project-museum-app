import ArtCard from "./ArtCard";

import { images } from "../utils/constants";

const Arts = () => {
    return (
        <div className="arts results-container">
            {images.map((img, idx) => (
                <ArtCard
                    key={idx}
                    id={idx}
                    title="Man from the Bulgarian Coast"
                    description="Jean Baptiste Vanmour (workshop of), 1700 - 1737"
                    img={img}
                />
            ))}
        </div>
    );
};

export default Arts;
