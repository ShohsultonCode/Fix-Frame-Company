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
              alt="Fix&Frame logo"
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
                  1715 East Roosevelt Road,City Wheaton
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
                >
                  <path
                    fill="black"
                    d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"
                  />
                </svg>
                <span className="footer__contact-text">(844) 255 23 36</span>
              </a>
            </li>
            <li className="footer__contact">
              <a href="#" target="_blank">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="black"
                    d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.3584 9.38246C11.3857 9.78702 9.4418 10.6244 6.5266 11.8945C6.05321 12.0827 5.80524 12.2669 5.78266 12.4469C5.74451 12.7513 6.12561 12.8711 6.64458 13.0343C6.71517 13.0565 6.78832 13.0795 6.8633 13.1039C7.37388 13.2698 8.06071 13.464 8.41776 13.4717C8.74164 13.4787 9.10313 13.3452 9.50222 13.0711C12.226 11.2325 13.632 10.3032 13.7203 10.2832C13.7826 10.269 13.8689 10.2513 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9739 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4351 12.9661 11.2101 13.1853 10.9833 13.4039C10.509 13.8611 10.1533 14.204 11.003 14.764C11.8644 15.3317 12.7323 15.8982 13.5724 16.4971C13.9867 16.7925 14.359 17.0579 14.8188 17.0156C15.0861 16.991 15.3621 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.3821 16.6352 8.80083C16.6484 8.6623 16.6318 8.485 16.6185 8.40717C16.6052 8.32934 16.5773 8.21844 16.4762 8.13635C16.3563 8.03913 16.1714 8.01863 16.0887 8.02009C15.7125 8.02672 15.1355 8.22737 12.3584 9.38246Z"
                  />
                </svg>

                <span className="footer__contact-text">team@Fix&Frame</span>
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
        width="1000"
        height="290"
        loading="lazy"
        className="footer-map"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.5518631999507!2d-88.08540942290733!3d41.859471671243774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e53837e51b83b%3A0x9211aa680a29e6a!2s1715%20E%20Roosevelt%20Rd%2C%20Wheaton%2C%20IL%2060187%2C%20USA!5e0!3m2!1sen!2s!4v1724474931714!5m2!1sen!2s"
      ></iframe>
    </footer>
  );
};

export default Footer;
