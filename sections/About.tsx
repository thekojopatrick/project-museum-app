import Image from "next/image";
import { about } from "../utils/constants";

const About = () => {
    return (
        <section className="section-about" id="about">
            <h2 className="heading heading-2 about__heading">
                About the museum
            </h2>
            <div className="what-we-do">
                <div className="about__image">
                    <Image
                        width={450}
                        height={400}
                        loading="lazy"
                        src={about[0]?.img}
                        alt={about[0]?.title}
                        className="about__image--1"
                    />
                </div>
                <div className="about-content mb-lg mt-lg ">
                    <h3 className="about-content__title heading heading-3 mb-lg mt-lg-x ">
                        {about[0]?.title}
                    </h3>
                    <p className="about-content__text text-lg">
                        {about[0].desc}
                    </p>
                </div>
            </div>
            <div className="vision-and-mission">
                <div className="about-content mb-lg-x">
                    <h3 className="about-content__title heading heading-3 mb-lg mt-lg">
                        {about[1]?.title}
                    </h3>
                    <p className="about-content__text text-lg">
                        {about[1].desc}
                    </p>
                </div>
                <div className="about__image">
                    <Image
                        width={450}
                        height={400}
                        loading="lazy"
                        src={about[1]?.img}
                        alt={about[1]?.title}
                        className="about__image--2"
                    />
                </div>
            </div>
            {/* <Button name="Learn More" /> */}
        </section>
    );
};

export default About;
