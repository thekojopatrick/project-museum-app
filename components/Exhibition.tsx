import Image from "next/image";
import Link from "next/link";

interface ExhibitionProps {
  img?: any;
  title?: string;
  desc?: string;
}

const Exhibition = ({ img, title, desc }: ExhibitionProps) => {
  return (
    <div className="exhibition">
      <div className="exhibition__image">
        <Image
          width={300}
          height={300}
          layout="responsive"
          src={img}
          alt={title + "Image"}
        />
      </div>
      <div className="exhibition-content">
        <h3 className="heading heading-3 exhibition-content__title">{title}</h3>
        <p className="text-sm mt-md exhibition-content__text">{desc}</p>
        <Link href="/">
          <a className="btn exhibition__btn mt-md">Read more</a>
        </Link>
      </div>
    </div>
  );
};

export default Exhibition;
