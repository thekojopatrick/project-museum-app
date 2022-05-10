import Image from "next/image";

interface FeatureProps {
  img?: any;
  title?: string;
  desc?: string;
}

const Feature = ({ img, title, desc }: FeatureProps) => {
  return (
    <div className="feature">
      <div className="overlay"></div>
      <Image layout="fill" loading="lazy" src={img} alt={title} className="feature__image" />
      <div className="feature-content">
        <h6 className="feature__title heading heading-6">{title}</h6>
        <p className="feature__text text-sm-x mt-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Feature;
