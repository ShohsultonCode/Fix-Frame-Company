import "./style.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { Button, Input } from "components";
import {
  // ContactImage,
  HeroImage4,
  ServicesImage1,
  ServicesImage2,
  ServicesImage3,
  ServicesImage4,
  ServicesImage5,
  ServicesImage6,
} from "assets/images/jpg";

const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const backgroundColor = "rgba(0, 20, 96, 0.700)";

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(${backgroundColor}, ${backgroundColor}), url(${HeroImage4})`,
  };

  type servicesDataTypes = {
    id: number;
    image: string;
    title: string;
  };

  const servicesData: servicesDataTypes[] = [
    {
      id: 1,
      image: ServicesImage1,
      title: "Inspection Services and Lawn Mainten...",
    },
    {
      id: 2,
      image: ServicesImage2,
      title: "Debris removal",
    },
    {
      id: 3,
      image: ServicesImage3,
      title: "Securing and Boarding",
    },
    {
      id: 4,
      image: ServicesImage4,
      title: "Property winterization",
    },
    {
      id: 5,
      image: ServicesImage5,
      title: "Maid Service (Cleaning)",
    },
    {
      id: 6,
      image: ServicesImage6,
      title: "Repairs and Damages",
    },
  ];

  return (
    <section className="services">
      <section style={backgroundStyle} className="services__background">
        <div className="container">
          <h1 className="services__background-title">Services We Provide</h1>
          <p className="services__background-text">
            We manage construction projects comprehensively, ensuring top-notch
            quality and timely delivery. Our property preservation services
            maintain and safeguard properties, and we excel in mold remediation
            for health and safety. In roofing, we handle repairs and
            installations, while our remodeling prowess transforms spaces to
            perfection. Our commitment to compliance drives efficient code
            violations resolution.
          </p>
        </div>
      </section>

      <div className="container">
        <ul className="services__cards">
          {servicesData.length > 0 &&
            servicesData.map((el: servicesDataTypes) => {
              return (
                <Link
                  key={el.id}
                  className="services__card"
                  to={`/pages/services/${el.id}`}
                >
                  <img
                    width={400}
                    height={350}
                    loading="lazy"
                    src={el.image}
                    className="services__card-image"
                    alt="Inspection Services and Lawn Mainten..."
                  />
                  <div className="services__content">
                    <h2 className="services__content-title">{el.title}</h2>
                    <hr className="services__content-horizontal-rule" />
                    <Link
                      to={`/pages/services/${el.id}`}
                      className="services__content-link"
                    >
                      Read more
                    </Link>
                  </div>
                </Link>
              );
            })}
        </ul>
      </div>

      {/* <div className="container">
        <ul className="services__list">
          <li className="services__item">
            <h3 className="services__item-title">Our Expertise:</h3>
            <ul className="services__sentences">
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Structural Repairs</strong>: We address and repair any
                  structural damage to your property, ensuring it is safe and
                  stable. Our team is experienced in handling damages caused by
                  natural disasters, accidents, or wear and tear.
                </p>
              </li>
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Water Damage Restoration</strong>: Our water damage
                  restoration services include water extraction, drying,
                  dehumidification, and mold remediation. We work quickly to
                  minimize damage and restore your property to its original
                  state
                </p>
              </li>
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Fire and Smoke Damage Restoration:</strong> We provide
                  comprehensive fire and smoke damage restoration services,
                  including soot and smoke removal, odor control, and property
                  repair. Our goal is to restore your property and eliminate any
                  traces of fire damage.
                </p>
              </li>
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Electrical and Plumbing Repairs:</strong> Our skilled
                  technicians handle all types of electrical and plumbing
                  repairs, from fixing faulty wiring and leaky pipes to
                  replacing damaged fixtures. We ensure that all repairs are
                  performed safely and meet industry standards.
                </p>
              </li>
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Interior and Exterior Repairs:</strong> We offer a
                  wide range of interior and exterior repair services, including
                  drywall repair, painting, roofing, siding, and window
                  replacement. Our team ensures that all repairs blend
                  seamlessly with the existing structure and enhance the overall
                  appearance of your property.
                </p>
              </li>
            </ul>
          </li>
          <li className="services__item">
            <h3 className="services__item-title">Why Choose Us?</h3>
            <ul className="services__sentences">
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Structural Repairs:</strong> We address and repair any
                  structural damage to your property, ensuring it is safe and
                  stable. Our team is experienced in handling damages caused by
                  natural disasters, accidents, or wear and tear.
                </p>
              </li>
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Water Damage Restoration</strong>: Our water damage
                  restoration services include water extraction, drying,
                  dehumidification, and mold remediation. We work quickly to
                  minimize damage and restore your property to its original
                  state
                </p>
              </li>
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Fire and Smoke Damage Restoration:</strong> We provide
                  comprehensive fire and smoke damage restoration services,
                  including soot and smoke removal, odor control, and property
                  repair. Our goal is to restore your property and eliminate any
                  traces of fire damage.
                </p>
              </li>
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Electrical and Plumbing Repairs:</strong> Our skilled
                  technicians handle all types of electrical and plumbing
                  repairs, from fixing faulty wiring and leaky pipes to
                  replacing damaged fixtures. We ensure that all repairs are
                  performed safely and meet industry standards.
                </p>
              </li>
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Interior and Exterior Repairs:</strong> We offer a
                  wide range of interior and exterior repair services, including
                  drywall repair, painting, roofing, siding, and window
                  replacement. Our team ensures that all repairs blend
                  seamlessly with the existing structure and enhance the overall
                  appearance of your property.
                </p>
              </li>
            </ul>
          </li>
          <li className="services__item">
            <h3 className="services__item-title">Our Services:</h3>
            <ul className="services__sentences">
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Property Inspections:</strong> Comprehensive
                  evaluations conducted by experienced inspectors, focusing on
                  safety, maintenance needs, and compliance with regulations. We
                  provide detailed reports and recommendations to help you make
                  informed decisions.
                </p>
              </li>
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Lawn Maintenance:</strong> Regular care plans
                  customized to your lawn's specific needs and seasonal
                  requirements. Services include regular mowing, trimming,
                  edging, fertilization, weed management, and treatments to
                  promote healthy growth and lush greenery.
                </p>
              </li>
              <li className="services__sentence">
                <p className="services__sentence-text">
                  <strong>Quality and Satisfaction:</strong> At Fix&Frame, we
                  are committed to delivering exceptional service and superior
                  results in inspection services and lawn maintenance. Whether
                  you're looking to enhance curb appeal, maintain property
                  value, or ensure a safe and inviting outdoor environment, you
                  can trust us to provide reliable, professional, and
                  personalized care.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div> */}
    </section>
  );
};

export default Services;
