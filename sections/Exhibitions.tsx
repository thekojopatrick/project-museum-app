import Link from "next/link";
import Exhibition from "../components/Exhibition";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { exhibitions } from "../utils/constants";

const Exhibitions = () => {
  return (
    <section className="section-exhibitions" id="exhibitions">
      <div className="section-title">
        <h2 className="heading heading-2">Exhibitions</h2>
        <Link href="#">
          <a className="btn exhibition__btn exhibition__btn--dark">
            All exhibitions
          </a>
        </Link>
      </div>
      <div className="exhibitions-container mt-lg-x">
        {exhibitions.map((exhibition) => {
          return <Exhibition key={exhibition.id} {...exhibition} />;
        })}
      </div>
    </section>
  );
};

export default Exhibitions;
