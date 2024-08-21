import "./style.scss";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  LeaderImage1,
  LeaderImage2,
  LeaderImage3,
  LeaderImage4,
  LeaderImage5,
} from "assets/images/png";

const Leader = () => {
  return (
    <section className="leader">
      <div className="container">
        <h2 className="leader-title">Trusted by Industry Leaders</h2>
        <Swiper
          loop
          breakpoints={{
            1000: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 3,
            },

            600: {
              slidesPerView: 2,
            },

            320: {
              slidesPerView: 1,
            },
          }}
          slidesPerView={5}
          spaceBetween={20}
          modules={[Autoplay]}
          className="leader__list"
          autoplay={{
            delay: 2500,
          }}
        >
          <SwiperSlide className="leader__item">
            <a target="_blank" href="#">
              <img
                alt="MCS"
                width={180}
                height={80}
                loading="lazy"
                src={LeaderImage1}
                className="leader__item-img"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="leader__item">
            <a target="_blank" href="#">
              <img
                width={180}
                height={80}
                alt="CHICAGO"
                loading="lazy"
                src={LeaderImage2}
                className="leader__item-img"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="leader__item">
            <a target="_blank" href="#">
              <img
                width={180}
                height={80}
                loading="lazy"
                alt="Altisource"
                src={LeaderImage3}
                className="leader__item-img"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="leader__item">
            <a target="_blank" href="#">
              <img
                width={180}
                height={80}
                alt="Bello"
                loading="lazy"
                src={LeaderImage4}
                className="leader__item-img"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="leader__item">
            <a target="_blank" href="#">
              <img
                width={180}
                height={80}
                loading="lazy"
                src={LeaderImage5}
                alt="Hostel URBANIST"
                className="leader__item-img"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="leader__item">
            <a target="_blank" href="#">
              <img
                alt="MCS"
                width={180}
                height={80}
                loading="lazy"
                src={LeaderImage1}
                className="leader__item-img"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="leader__item">
            <a target="_blank" href="#">
              <img
                width={180}
                height={80}
                alt="CHICAGO"
                loading="lazy"
                src={LeaderImage2}
                className="leader__item-img"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="leader__item">
            <a target="_blank" href="#">
              <img
                width={180}
                height={80}
                loading="lazy"
                alt="Altisource"
                src={LeaderImage3}
                className="leader__item-img"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="leader__item">
            <a target="_blank" href="#">
              <img
                width={180}
                height={80}
                alt="Bello"
                loading="lazy"
                src={LeaderImage4}
                className="leader__item-img"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide className="leader__item">
            <a target="_blank" href="#">
              <img
                width={180}
                height={80}
                loading="lazy"
                src={LeaderImage5}
                alt="Hostel URBANIST"
                className="leader__item-img"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Leader;
