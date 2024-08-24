import "./style.scss";
import { Button } from "components";
import { AboutImage } from "assets/images/jpg";

const About = () => {
  return (
    <section className="home-about">
      <h1 className="visually-hidden">Fix&Frame</h1>
      <div className="home-about__container container">
        <div className="home-about__content">
          <h2 className="home-about__content-heading">Who we are?</h2>
          <p className="home-about__content-text">
            Fix&Frame is an industry leader providing our clients a
            comprehensive range of solutions to help manage and maintain their
            properties effectively yielding the highest return.
          </p>
          <Button type="button" className="home-about__content-btn">
            Learn More
          </Button>
        </div>
        <img
          width={685}
          height={485}
          loading="lazy"
          src={AboutImage}
          className="home-about-image"
          alt="Fix&Frame about information"
        />
      </div>
    </section>
  );
};

export default About;
