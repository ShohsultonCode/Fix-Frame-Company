import "./style.scss";
import { Button } from "components";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderImage1,  SliderImage3, SliderImage4, SliderImage5, SliderImage6 } from "assets/images/png";
//sliders
const Slider = () => {
  const backgroundImage1 = {
    height: "550px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `url(${SliderImage1})`,
  };


  const backgroundImage3 = {
    height: "550px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `url(${SliderImage3})`,
  };
  const backgroundImage4 = {
    height: "550px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `url(${SliderImage4})`,
  };

  const backgroundImage5 = {
    height: "550px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `url(${SliderImage5})`,
  };

  const backgroundImage6 = {
    height: "550px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `url(${SliderImage6})`,
  };



  return (
    <section className="slider">
      <div className="container">
        <div className="slider__top">
          <h2 className="slider__top-title">Meet the team</h2>
          <div className="slider__buttons">
            <Button
              type="button"
              className="slider__buttons-btn slider__buttons-btn--left"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#001460"
                  d="M8.32843 10.9999H20.5V12.9999H8.32843L13.6924 18.3638L12.2782 19.778L4.5 11.9999L12.2782 4.22168L13.6924 5.63589L8.32843 10.9999Z"
                />
              </svg>
            </Button>
            <Button
              type="button"
              className="slider__buttons-btn slider__buttons-btn--right"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#001460"
                  d="M21.5622 14.6665L14.4102 7.51452L16.2958 5.62891L26.6667 15.9999L16.2958 26.3707L14.4102 24.4851L21.5622 17.3332H5.33337V14.6665H21.5622Z"
                />
              </svg>
            </Button>
          </div>
        </div>
        <Swiper
          navigation={{
            nextEl: ".slider__buttons-btn--right",
            prevEl: ".slider__buttons-btn--left",
          }}
          spaceBetween={30}
          slidesPerView={4}
          className="slider__list"
          breakpoints={{
            1350: {
              slidesPerView: 4,
            },

            900: {
              slidesPerView: 3,
            },

            300: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
          }}
        >
          <SwiperSlide className="slider__item">
            <div className="slider__image" style={backgroundImage1}>
            
            </div>
          </SwiperSlide>
             
          <SwiperSlide className="slider__item">
            <div className="slider__image" style={backgroundImage3}>
           
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__item">
            <div className="slider__image" style={backgroundImage4}>
    
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__item">
            <div className="slider__image" style={backgroundImage5}>
       
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider__item">
            <div className="slider__image" style={backgroundImage6}>
             
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
