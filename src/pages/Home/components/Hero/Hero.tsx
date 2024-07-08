import "./style.scss";
import { HomeHeroImage } from "assets/images/jpg";

const Hero = () => {
  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `url(${HomeHeroImage})`,
  };

  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h2 className="hero__content-title">
            Find Best Property For Yourself
          </h2>
          <hr className="hero__content-horizontal-rule" />
          <p className="hero__content-text">
            Our vast network of licensed contractors is always ready to repair
            and maintain your property. From a minor lock change or a major
            sewer line repair, we have you covered.
          </p>
        </div>
      </div>

      <div className="hero-image" style={backgroundStyle}></div>
    </section>
  );
};

export default Hero;
