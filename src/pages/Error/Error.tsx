import "./style.scss";
import { useEffect } from "react";
import { Button } from "components";
import { ErrorImage } from "assets/images/png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="error">
      <div className="error__container container">
        <div className="error__content">
          <h1 className="error__content-title">Error 404</h1>
          <h2 className="error__content-sub-title">
            There is no such a thing.
          </h2>
          <p className="error__content-text">
            You canuse search on top of thr page or coffee back to perevious
            page
          </p>
          <Button
            type="button"
            onClick={() => navigate("/")}
            className="error__content-btn"
          >
            Home
          </Button>
        </div>
      </div>
      <img
        width="100%"
        height={186}
        loading="lazy"
        src={ErrorImage}
        alt="error image"
        className="error-image"
      />
    </section>
  );
};

export default Error;
