import "./style.scss";
import { Button } from "components";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  Media1,
  Media2,
  Media3,
  CarouselIcon1,
  CarouselIcon2,
} from "assets/images/svg";
import {
  HeroImage2,
  // newsHouseImage12,
  // newsHouseImage13,
  // newsHouseImage14,
  // newsHouseImage15,
  // newsHouseImage16,
  // newsHouseImage17,
  // newsHouseImage18,
  // newsHouseImage19,
  ServicesImage27,
  ServicesImage28,
  ServicesImage29,
  newsHouseImage5,
  newsHouseImage6,
  newsHouseImage7,
  newsHouseImage8,
  ServicesImage30,
  ServicesImage31,
  ServicesImage32,
  ServicesImage33,
  ServicesImage34,
  ServicesImage35,
  ServicesImage36,
} from "assets/images/jpg";

const News = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const navigate = useNavigate();

  type imageTypes = {
    id: number;
    image: string;
  };

  type newDataTypes = {
    id: number;
    text: string;
    title: string;
    images: imageTypes[];
  };

  const newsData: newDataTypes[] = [
    {
      id: 1,
      images: [
        {
          id: 1,
          image: ServicesImage27,
        },
        {
          id: 2,
          image: ServicesImage28,
        },
        {
          id: 3,
          image: ServicesImage29,
        },
      ],
      title:
        "Transforming Spaces: Experts in Retail and Residential Construction Services bу Fix&Frame",
      text: `
        Creating an inviting ambiance and a captivating design can continually draw devoted customers to your business. From the outward appearance to the internal intricacies, every facet of a retail establishment mirrors your brand and plays a crucial role in advancing your business growth. Understanding the significance of your business in the future is essential for retail development.
      `,
    },
    {
      id: 2,
      images: [
        {
          id: 1,
          image: newsHouseImage5,
        },
        {
          id: 2,
          image: newsHouseImage6,
        },
        {
          id: 3,
          image: newsHouseImage7,
        },
        {
          id: 4,
          image: newsHouseImage8,
        },
      ],
      title: "How To Clean Up Mold Properly",
      text: `
           Mold contamination is a troublesome issue that damages your home and jeopardizes your health. If left unaddressed, it can propagate and escalate, particularly for individuals with respiratory ailments. Therefore, it's imperative to rid your house of mold promptly.  Here are the steps to follow for proper cleaning up of mold:
      `,
    },
    {
      id: 3,
      images: [
        {
          id: 1,
          image: ServicesImage30,
        },
        {
          id: 2,
          image: ServicesImage31,
        },
        {
          id: 3,
          image: ServicesImage32,
        },
        {
          id: 4,
          image: ServicesImage33,
        },
      ],
      title: "Landscape and Snow Removal",
      text: `
        Welcome to Fix&Frame , your trusted partner for all your landscaping and snow removal needs. We believe that your outdoor spaces deserve the same attention to detail and care as your indoor spaces. Whether it’s creating a lush, vibrant landscape or ensuring safe and snow-free pathways during winter, Fix&Frame Inc is here to make your outdoor dreams a reality.
      `,
    },
    {
      id: 4,
      images: [
        {
          id: 1,
          image: ServicesImage34,
        },
        {
          id: 2,
          image: ServicesImage35,
        },
        {
          id: 3,
          image: ServicesImage36,
        },
      ],
      title: "Building Your Dream Bathroom",
      text: `
         The bathroom is one of the most used rooms in your home. It's a place where you can relax after a long day. Updating your bathroom or adding a new one is a great way to increase the value of your home. The Fix&Frame team can help you plan, design, and coordinate the perfect bathroom remodel that fits your budget.
      `,
    },
  ];

  const arrowLeftBtnRef = useRef<HTMLButtonElement | null>(null);
  const arrowRightBtnRef = useRef<HTMLButtonElement | null>(null);
  const backgroundColor = "rgba(0, 20, 96, 0.700)";

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(${backgroundColor}, ${backgroundColor}), url(${HeroImage2})`,
  };

  return (
    <section className="news">
      <div className="news__background" style={backgroundStyle}>
        <div className="container">
          <h2 className="news__background-title">News</h2>
          <p className="news__background-text">
            Credibly reintermediate backend ideas for cross-platform models.
            Continually enhance integrated processes through technically sound
            intellectual capital. Holistically foster superior methodologies
            independent of market-driven best practices.
          </p>
        </div>
      </div>

      <div className="container">
        <ul className="news__cards">
          {newsData.length > 0 &&
            newsData.map((el: newDataTypes) => {
              return (
                <li key={el.id} className="news__card">
                  <div className="news-carousel">
                    <Swiper
                      loop
                      autoplay={{
                        delay: 2500,
                      }}
                      modules={[Navigation, Autoplay]}
                      className="news-carousel__list"
                      navigation={{
                        nextEl: ".news-buttons__btn--right",
                        prevEl: ".news-buttons__btn--left",
                      }}
                    >
                      {el.images.length > 0 &&
                        el.images.map((el) => {
                          return (
                            <SwiperSlide
                              key={el.id}
                              className="news-carousel__item"
                            >
                              <img
                                height={520}
                                src={el.image}
                                loading="lazy"
                                alt="news-image-5"
                                className="news-carousel__item-image"
                              />
                            </SwiperSlide>
                          );
                        })}

                      <div className="news-buttons">
                        <Button
                          type="button"
                          buttonRef={arrowLeftBtnRef}
                          className="news-buttons__btn news-buttons__btn--left"
                        >
                          <img
                            alt="icon"
                            width={32}
                            height={32}
                            loading="lazy"
                            src={CarouselIcon1}
                            className="news-buttons__btn-image"
                          />
                        </Button>
                        <Button
                          type="button"
                          buttonRef={arrowRightBtnRef}
                          className="news-buttons__btn news-buttons__btn--right"
                        >
                          <img
                            alt="icon"
                            width={32}
                            height={32}
                            loading="lazy"
                            src={CarouselIcon2}
                            className="news-buttons__btn-image"
                          />
                        </Button>
                      </div>
                    </Swiper>
                  </div>

                  <hr className="news__card-horizontal-rule" />

                  <div className="news__content">
                    <h3 className="news__content-title">{el.title}</h3>

                    <p className="news__content-text">{el.text}</p>
                  </div>

                  <footer className="news-footer">
                    <ul className="news-footer__medias">
                      <li className="news-footer__media">
                        <a
                          className="news-footer-link"
                          target="_blank"
                          href="#"
                        >
                          <img
                            width={32}
                            height={32}
                            src={Media1}
                            loading="lazy"
                            alt="Fix&Frame instagram"
                            className="news-footer__media-image"
                          />
                        </a>
                      </li>
                      <li className="news-footer__media">
                        <a
                          className="news-footer-link"
                          target="_blank"
                          href="#"
                        >
                          <img
                            width={32}
                            height={32}
                            src={Media2}
                            loading="lazy"
                            alt="Fix&Frame facebook"
                            className="news-footer__media-image"
                          />
                        </a>
                      </li>
                      <li className="news-footer__media">
                        <a
                          className="news-footer-link"
                          target="_blank"
                          href="#"
                        >
                          <img
                            width={32}
                            height={32}
                            src={Media3}
                            loading="lazy"
                            alt="Fix&Frame twitter"
                            className="news-footer__media-image"
                          />
                        </a>
                      </li>
                    </ul>

                    <Button
                      type="button"
                      className="news-footer-btn"
                      onClick={() => navigate(`/pages/news/${el.id}`)}
                    >
                      Continue reading
                    </Button>
                  </footer>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default News;
