import { MissionIcon1, MissionIcon2 } from "assets/images/svg";
import "./style.scss";

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <ul className="mission__list">
          <li className="mission__item">
            <div className="mission__box mission__box--red">
              <img
                width={98}
                height={98}
                loading="lazy"
                alt="vision icon"
                src={MissionIcon1}
                className="mission__box-icon"
              />
            </div>
            <div className="mission__content">
              <h2 className="mission__content-title">Our Vision</h2>
              <p className="mission__content-text">
                Fix&Frame was founded to provide our clients with
                industry-leading services that meet and exceed all their
                expectations. We strive to be the best and to consistently
                deliver the highest quality of work, while maintaining
                affordability and transparency in our pricing
              </p>
            </div>
          </li>
          <li className="mission__item">
            <div className="mission__box mission__box--blue">
              <img
                width={98}
                height={98}
                loading="lazy"
                alt="mission icon"
                src={MissionIcon2}
                className="mission__box-icon"
              />
            </div>
            <div className="mission__content">
              <h2 className="mission__content-title">Our Mission</h2>
              <p className="mission__content-text">
                We are driven to be the national leader in disrupting the status
                quo of property management. Our one-stop solution of property
                management services, coupled with industry leading technology
                provides our clients a transparent platform for portfolio or
                singular asset decisions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Mission;
