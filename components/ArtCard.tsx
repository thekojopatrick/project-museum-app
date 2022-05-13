/* eslint-disable @next/next/no-img-element */

interface ArtCardProps {
    onClick?: void;
    title?: string;
    description?: string;
    img?: string;
    ref?: any;
}

const ArtCard = ({ onClick, img, title, description }: ArtCardProps) => {
    return (
        <div onClick={() => onClick} className="result-card">
            <figure className="result-card__thumbnails">
                <img className="result-image" src={`${img}`} alt="thumbnails" />
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
    );
};

export default ArtCard;