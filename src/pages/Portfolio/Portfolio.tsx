import "./style.scss";
import { useEffect } from "react";
import { Button } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { HeroImage3, newsHouseImage1 } from "assets/images/jpg";
import {
  CarouselIcon1,
  CarouselIcon2,
  ContactMediaIcon1,
  ContactMediaIcon2,
  ContactMediaIcon3,
} from "assets/images/svg";

const Portfolio = () => {
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
    backgroundImage: `linear-gradient(${backgroundColor}, ${backgroundColor}), url(${HeroImage3})`,
  };

  return (
    <section className="portfolio">
      <section style={backgroundStyle} className="portfolio__background">
        <div className="container">
          <h2 className="portfolio__background-title">Portfolio</h2>
          <p className="portfolio__background-text">
            Our teams know that every project is unique. We create custom
            solutions for every project as evidenced by our portfolio.
          </p>
        </div>
      </section>

      <ul className="portfolio__wrapper">
        <li className="portfolio__container container">
          <div className="portfolio__item">
            <Swiper
              loop
              autoplay={{
                delay: 2500,
              }}
              navigation={{
                nextEl: ".portfolio__btn--right",
                prevEl: ".portfolio__btn--left",
              }}
              modules={[Navigation, Autoplay]}
              className="portfolio__carousels"
            >
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>

              <div className="portfolio__buttons">
                <Button
                  type="button"
                  className="portfolio__btn portfolio__btn--left"
                >
                  <img
                    width={32}
                    height={32}
                    alt="carousel-1"
                    src={CarouselIcon1}
                    className="portfolio__btn-img"
                  />
                </Button>
                <Button
                  type="button"
                  className="portfolio__btn portfolio__btn--right"
                >
                  <img
                    width={32}
                    height={32}
                    alt="carousel-2"
                    src={CarouselIcon2}
                    className="portfolio__btn-img"
                  />
                </Button>
              </div>
            </Swiper>
          </div>
          <section className="portfolio__content">
            <hr className="portfolio__content-horizontal-rule" />
            <h3 className="portfolio__content-title">Property Wintirization</h3>
            <p className="portfolio__content-text">
              We have a wide-ranging network of licensed contractors who are
              always available to repair and upkeep your property. Whether you
              need a minor lock change or a significant sewer line repair, we're
              here to help.
            </p>
            <ul className="portfolio__medias">
              <li className="portfolio__media">
                <a target="_blank" href="#">
                  <img
                    width={32}
                    height={32}
                    src={ContactMediaIcon1}
                    alt="FixFrame instagram"
                    className="portfolio__media-icon"
                  />
                </a>
              </li>
              <li className="portfolio__media">
                <a target="_blank" href="#">
                  <img
                    width={32}
                    height={32}
                    src={ContactMediaIcon2}
                    alt="FixFrame facebook"
                    className="portfolio__media-icon"
                  />
                </a>
              </li>
              <li className="portfolio__media">
                <a target="_blank" href="#">
                  <img
                    width={32}
                    height={32}
                    src={ContactMediaIcon3}
                    alt="FixFrame telephone"
                    className="portfolio__media-icon"
                  />
                </a>
              </li>
            </ul>
          </section>
        </li>
        <li className="portfolio__container container">
          <div className="portfolio__item">
            <Swiper
              loop
              autoplay={{
                delay: 2500,
              }}
              navigation={{
                nextEl: ".portfolio__btn--right",
                prevEl: ".portfolio__btn--left",
              }}
              modules={[Navigation, Autoplay]}
              className="portfolio__carousels"
            >
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>

              <div className="portfolio__buttons">
                <Button
                  type="button"
                  className="portfolio__btn portfolio__btn--left"
                >
                  <img
                    width={32}
                    height={32}
                    alt="carousel-1"
                    src={CarouselIcon1}
                    className="portfolio__btn-img"
                  />
                </Button>
                <Button
                  type="button"
                  className="portfolio__btn portfolio__btn--right"
                >
                  <img
                    width={32}
                    height={32}
                    alt="carousel-2"
                    src={CarouselIcon2}
                    className="portfolio__btn-img"
                  />
                </Button>
              </div>
            </Swiper>
          </div>
          <section className="portfolio__content">
            <hr className="portfolio__content-horizontal-rule" />
            <h3 className="portfolio__content-title">
              Mold Remediation and Inspection Services
            </h3>
            <p className="portfolio__content-text">
              Certified and fully insured! Our commitment to honesty is the
              cornerstone of our service. We assure top-quality work at the most
              competitive prices. Give us a call today to get a free quote
            </p>
            <ul className="portfolio__medias">
              <li className="portfolio__media">
                <a target="_blank" href="#">
                  <img
                    width={32}
                    height={32}
                    src={ContactMediaIcon1}
                    alt="FixFrame instagram"
                    className="portfolio__media-icon"
                  />
                </a>
              </li>
              <li className="portfolio__media">
                <a target="_blank" href="#">
                  <img
                    width={32}
                    height={32}
                    src={ContactMediaIcon2}
                    alt="FixFrame facebook"
                    className="portfolio__media-icon"
                  />
                </a>
              </li>
              <li className="portfolio__media">
                <a target="_blank" href="#">
                  <img
                    width={32}
                    height={32}
                    src={ContactMediaIcon3}
                    alt="FixFrame telephone"
                    className="portfolio__media-icon"
                  />
                </a>
              </li>
            </ul>
          </section>
        </li>
        <li className="portfolio__container container">
          <div className="portfolio__item">
            <Swiper
              loop
              autoplay={{
                delay: 2500,
              }}
              navigation={{
                nextEl: ".portfolio__btn--right",
                prevEl: ".portfolio__btn--left",
              }}
              modules={[Navigation, Autoplay]}
              className="portfolio__carousels"
            >
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>
              <SwiperSlide className="portfolio__carousel">
                <img
                  width={610}
                  height={430}
                  alt="carousel 1"
                  src={newsHouseImage1}
                  className="portfolio__carousel-image"
                />
              </SwiperSlide>

              <div className="portfolio__buttons">
                <Button
                  type="button"
                  className="portfolio__btn portfolio__btn--left"
                >
                  <img
                    width={32}
                    height={32}
                    alt="carousel-1"
                    src={CarouselIcon1}
                    className="portfolio__btn-img"
                  />
                </Button>
                <Button
                  type="button"
                  className="portfolio__btn portfolio__btn--right"
                >
                  <img
                    width={32}
                    height={32}
                    alt="carousel-2"
                    src={CarouselIcon2}
                    className="portfolio__btn-img"
                  />
                </Button>
              </div>
            </Swiper>
          </div>
          <section className="portfolio__content">
            <hr className="portfolio__content-horizontal-rule" />
            <h3 className="portfolio__content-title">
              Landscape and Snow Removal
            </h3>
            <p className="portfolio__content-text">
              We're your comprehensive solution for all outdoor needs, offering
              services for both residential and commercial properties
            </p>
            <ul className="portfolio__medias">
              <li className="portfolio__media">
                <a target="_blank" href="#">
                  <img
                    width={32}
                    height={32}
                    src={ContactMediaIcon1}
                    alt="FixFrame instagram"
                    className="portfolio__media-icon"
                  />
                </a>
              </li>
              <li className="portfolio__media">
                <a target="_blank" href="#">
                  <img
                    width={32}
                    height={32}
                    src={ContactMediaIcon2}
                    alt="FixFrame facebook"
                    className="portfolio__media-icon"
                  />
                </a>
              </li>
              <li className="portfolio__media">
                <a target="_blank" href="#">
                  <img
                    width={32}
                    height={32}
                    src={ContactMediaIcon3}
                    alt="FixFrame telephone"
                    className="portfolio__media-icon"
                  />
                </a>
              </li>
            </ul>
          </section>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
