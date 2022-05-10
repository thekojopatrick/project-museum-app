import Feature from "../components/Feature";
import { features } from "../utils/constants";

const Features = () => {
  return (
    <section className="section-features" id="features">
      {features.map((feature) => {
        return <Feature key={feature.id} {...feature} />;
      })}
    </section>
  );
};

export default Features;
