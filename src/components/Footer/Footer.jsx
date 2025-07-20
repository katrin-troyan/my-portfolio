import Logo from "../../assets/logon.png";
import { FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";
import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <div className={css.footerLogo}>
          <div className={css.logo}>
            <a href="#about">
              <img
                className={css.image}
                src={Logo}
                alt="Troyan Katerina"
                width="163"
                height="56"
              />
            </a>
          </div>

          <div className={css.socialLinks}>
            <a
              className={css.socialLinksItem}
              href="https://www.linkedin.com/in/kateryna-troyan-b21328356/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className={css.socialLinksItem}
              href="https://t.me/Katrin_tro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
            <a
              className={css.socialLinksItem}
              href="https://github.com/katrin-troyan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={css.footerContacts}>
          <p className={css.footerContactEmail}>katerynatroyan.dev@gmail.com</p>
          <p className={css.footerContactPhone}>+38 067 416 64 63</p>
        </div>

        <p className={css.footerText}>
          © 2025 My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
