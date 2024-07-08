import "./style.scss";
import {
  OurAboutImage1,
  OurAboutImage2,
  OurAboutImage3,
} from "assets/images/jpg";

const OurAbout = () => {
  return (
    <section className="our-about">
      <div className="container">
        <ul className="our-about__list">
          <li className="our-about__item">
            <img
              width={620}
              height={400}
              src={OurAboutImage1}
              alt="our about image"
              className="our-about__item-image"
            />
            <div className="our-about__content">
              <h2 className="our-about__content-title">
                The FixFrame Difference
              </h2>
              <p className="our-about__content-text">
                We developed our uncommon expertise and stellar record of
                accomplishments by consistently providing the highest-quality
                services at an affordable flat-rate price, with no hidden costs.
                We believe in transparency and openness in all our dealings, and
                we work tirelessly to find cost-effective solutions to protect
                and preserve a wide variety of assets.
              </p>
            </div>
          </li>
          <li className="our-about__item">
            <div className="our-about__content">
              <h2 className="our-about__content-title">Our Experience</h2>
              <p className="our-about__content-text">
                Founded in 2023,FixFrame has built a strong reputation in the
                industry for our comprehensive asset management services. Our
                management team has extensive experience in all phases of
                property management, including preservation and maintenance,
                inspections, marketing, advertising, sales, appraisal, and
                title.
              </p>
            </div>
            <img
              width={620}
              height={400}
              src={OurAboutImage2}
              alt="our about image"
              className="our-about__item-image"
            />
          </li>
          <li className="our-about__item">
            <img
              width={620}
              height={400}
              src={OurAboutImage3}
              alt="our about image"
              className="our-about__item-image"
            />
            <div className="our-about__content">
              <h2 className="our-about__content-title">
                Excellence in every build
              </h2>
              <p className="our-about__content-text">
                Our team members have a duty to build upon our strong heritage
                of integrity and fairness by consistently adhering to our
                company values. Ninja Group stands for the highest standards of
                integrity and fairness by “Doing the Right for the Customers”
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OurAbout;
