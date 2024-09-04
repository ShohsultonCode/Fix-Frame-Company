import {
  ResultImage1,
  ResultImage2,
  ResultImage3,
  ResultImage4,
} from "assets/images/svg";
import "./style.scss";
import { ResultImage } from "assets/images/png";

const Result = () => {
  return (
    <section className="result">
      <div className="container">
        <div className="result__container">
          <ul className="result__list">
            <li className="result__item">
              <div className="result__box">
                <img
                  width={100}
                  height={100}
                  loading="lazy"
                  src={ResultImage1}
                  alt="State Licenses"
                  className="result__box-image"
                />
                <hgroup className="result__content">
                  <h2 className="result__content-title">6+</h2>
                  <h3 className="result__content-sub-title">State Licenses</h3>
                </hgroup>
              </div>
              <hr className="result__box-horizontal-rule" />
              <p className="result__box-text">
                Taking seamless key performance indicators.
              </p>
            </li>
            <li className="result__item">
              <div className="result__box">
                <img
                  width={100}
                  height={100}
                  loading="lazy"
                  src={ResultImage2}
                  alt="State Licenses"
                  className="result__box-image"
                />
                <hgroup className="result__content">
                  <h2 className="result__content-title">20+</h2>
                  <h3 className="result__content-sub-title">Employees</h3>
                </hgroup>
              </div>
              <hr className="result__box-horizontal-rule" />
              <p className="result__box-text">
                Leverage other resource leveling convergence.
              </p>
            </li>
            <li className="result__item">
              <div className="result__box">
                <img
                  width={100}
                  height={100}
                  loading="lazy"
                  src={ResultImage3}
                  alt="State Licenses"
                  className="result__box-image"
                />
                <hgroup className="result__content">
                  <h2 className="result__content-title">95%</h2>
                  <h3 className="result__content-sub-title">Project success</h3>
                </hgroup>
              </div>
              <hr className="result__box-horizontal-rule" />
              <p className="result__box-text">
                Engage fully tested process improvement platforms.
              </p>
            </li>
            <li className="result__item">
              <div className="result__box">
                <img
                  width={100}
                  height={100}
                  loading="lazy"
                  src={ResultImage4}
                  alt="State Licenses"
                  className="result__box-image"
                />
                <hgroup className="result__content">
                  <h2 className="result__content-title">6+</h2>
                  <h3 className="result__content-sub-title">
                    Nationwide clients
                  </h3>
                </hgroup>
              </div>
              <hr className="result__box-horizontal-rule" />
              <p className="result__box-text">
                Globally network focused material products.
              </p>
            </li>
          </ul>
          <img
            width={400}
            height={455}
            loading="lazy"
            src={ResultImage}
            alt="Fix&Frame phone"
            className="result__container-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Result;
