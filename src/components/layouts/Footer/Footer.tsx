import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { fixFrameLogo } from "assets/images/svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <Link to="/">
            <img
              width="180"
              height="100"
              loading="lazy"
              src={fixFrameLogo}
              alt="FixFrame logo"
              className="footer__container-logo"
            />
          </Link>
          <ul className="footer__contacts">
            <li className="footer__contact">
              <a href="#" target="_blank">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="black"
                    d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
                  />
                </svg>
                <span className="footer__contact-text">
                  1715 East Roosevelt Road,Wheaton, IL 60187
                </span>
              </a>
            </li>
            <li className="footer__contact">
              <a href="tel:+8442552336">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ><path
                    fill="black"
                    d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"
                  />
                </svg>
                <span className="footer__contact-text">+1 (224) 355-6417</span>
              </a>
            </li> 
            <li className="footer__contact">
              <a href="#" target="_blank">
                <svg
                  id="Layer_1"
                  width="24px"
                  fill="black"
                  height="24px"
                  version="1.1"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Mail"
                    d="M58.0034485,8H5.9965506c-3.3136795,0-5.9999995,2.6862001-5.9999995,6v36c0,3.3137016,2.6863203,6,5.9999995,6  h52.006897c3.3137016,0,6-2.6862984,6-6V14C64.0034485,10.6862001,61.3171501,8,58.0034485,8z M62.0034485,49.1108017  L43.084549,30.1919994l18.9188995-12.0555992V49.1108017z M5.9965506,10h52.006897c2.2056007,0,4,1.7943001,4,4v1.7664003  L34.4677505,33.3134003c-1.4902,0.9492989-3.3935013,0.9199982-4.8495998-0.0703011L1.9965508,14.4694996V14  C1.9965508,11.7943001,3.7910507,10,5.9965506,10z M1.9965508,16.8852005L21.182251,29.9251003L1.9965508,49.1108017V16.8852005z   M58.0034485,54H5.9965506c-1.6473999,0-3.0638998-1.0021019-3.6760998-2.4278984l20.5199013-20.5200024l5.6547985,3.843401  c1.0859013,0.7383003,2.3418007,1.1083984,3.5995998,1.1083984c1.1953011,0,2.3925018-0.3339996,3.4463005-1.0048981  l5.8423996-3.7230015l20.2961006,20.2961025C61.0673485,52.9978981,59.6508713,54,58.0034485,54z"
                  />
                </svg>
                <span className="footer__contact-text">fixframe@fixframeinvest.com</span>
              </a>
            </li>
          </ul>
          <nav className="footer-nav">
            <ul className="footer-nav__list">
              <li className="footer-nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "footer-nav__item-link footer-nav__item-link--active"
                      : "footer-nav__item-link"
                  }
                >
                  About us
                </NavLink>
              </li>
              <li className="footer-nav__item">
                <NavLink
                  to="/pages/services"
                  className={({ isActive }) =>
                    isActive
                      ? "footer-nav__item-link footer-nav__item-link--active"
                      : "footer-nav__item-link"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="footer-nav__item">
                <NavLink
                  to="/pages/portfolio"
                  className={({ isActive }) =>
                    isActive
                      ? "footer-nav__item-link footer-nav__item-link--active"
                      : "footer-nav__item-link"
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="footer-nav__item">
                <NavLink
                  to="/pages/news"
                  className={({ isActive }) =>
                    isActive
                      ? "footer-nav__item-link footer-nav__item-link--active"
                      : "footer-nav__item-link"
                  }
                >
                  News
                </NavLink>
              </li>
              <li className="footer-nav__item">
                <NavLink
                  to="/pages/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "footer-nav__item-link footer-nav__item-link--active"
                      : "footer-nav__item-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <iframe
        width="900"
        height="290"
        loading="lazy"
        className="footer-map"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5943.103695846509!2d-88.082834!3d41.859472!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e53837e51b83b%3A0x9211aa680a29e6a!2s1715%20E%20Roosevelt%20Rd%2C%20Wheaton%2C%20IL%2060187!5e0!3m2!1sen!2sus!4v1724692070609!5m2!1sen!2sus"
      ></iframe>
    </footer>

  );
};

export default Footer;
