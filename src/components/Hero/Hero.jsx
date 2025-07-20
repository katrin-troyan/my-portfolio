import { FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa";
import fotoPortfolio from "../../assets/myfoto.png";
import css from "./Hero.module.scss";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className={css.hero}>
      <div className={css.heroWrapperText}>
        <p className={css.heroText}>{t("hero_hello")}</p>
        <h2 className={css.heroSubtitle}>{t("hero_name")}</h2>
        <h1 className={css.heroTitle}>{t("hero_title")}</h1>
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
        <div className={css.description}>
          <a href="#contact" className={`${css.button} ${css.baseBtn}`}>
            {t("hero_hire")}
          </a>
          <a
            className={`${css.cv} ${css.baseBtn}`}
            href="https://drive.google.com/file/d/1QGVp3iAFxVCqPWwWC02b-9_kNRNPjUFR/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("hero_cv")}
          </a>
        </div>
      </div>
      <div className={css.heroImage}>
        <a href="#about">
          <img
            className={css.image}
            src={fotoPortfolio}
            alt="Troyan Katerina"
            width="476"
            height="506"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
