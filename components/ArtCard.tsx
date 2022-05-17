/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

interface ArtCardProps {
    id: number;
    onClick?: void;
    title?: string;
    description?: string;
    img?: string;
    ref?: any;
}

const ArtCard = ({ onClick, img, title, description, id }: ArtCardProps) => {
    return (
        <Link
            href={{ pathname: `/collection/[id]`, query: { id: id } }}
            key={id}
            passHref
        >
            <div onClick={() => onClick} className="result-card">
                <figure className="result-card__thumbnails">
                    <img
                        className="result-image"
                        src={`${img}`}
                        alt="thumbnails"
                    />
                </figure>
                <div className="result-card__details">
                    <h2 className="result-card__details--title heading-4">
                        {" "}
                        {title}
                    </h2>
                    <p className="result-card__details--description">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ArtCard;
