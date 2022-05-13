import Link from "next/link";
import Exhibition from "../components/Exhibition";
import { exhibitions, SlidesProps } from "../utils/constants";

const Exhibitions = ({ options }: SlidesProps) => {
    return (
        <section className="section-exhibitions" id="exhibitions">
            <div className="section-title">
                <h2 className="heading heading-2">Exhibitions</h2>
                <Link href="/search">
                    <a className="btn exhibition__btn exhibition__btn--dark">
                        All exhibitions
                    </a>
                </Link>
            </div>
            <div className="exhibitions-container">
                {exhibitions.map((exhibition) => {
                    return <Exhibition key={exhibition.id} {...exhibition} />;
                })}
            </div>
        </section>
    );
};

export default Exhibitions;
