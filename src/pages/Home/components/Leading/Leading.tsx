import { Button } from "components";
import "./style.scss";
import { LeadingImage } from "assets/images/jpg";

const Leading = () => {
  return (
    <section className="leading">
      <div className="container">
        <div className="leading__background">
          <div className="leading__content">
            <h2 className="leading__content-title">
              Fix&Frame is a leading national property management service
              provider with a proven track record of success in the industry.
            </h2>
            <hr className="leading__content-horizontal-rule" />
            <p className="leading__content-text">
              We are dedicated to providing our clients with the highest quality
              of services and support, and we believe in steady growth through
              innovation and a superior commitment to our clients’ success.
            </p>
            <Button type="button" className="leading__content-btn">
              Explore our services
            </Button>
          </div>
          <img
            height={500}
            loading="lazy"
            src={LeadingImage}
            alt="leading image"
            className="leading__background-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Leading;
