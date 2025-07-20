import Logo from "../../assets/logon.png";
import { IoMdList } from "react-icons/io";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./Header.module.scss";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "ua";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={css.header}>
      <IoMdList
        className={css.menuIcon}
        onClick={() => setIsModalOpen((prev) => !prev)}
      />
      <div className={css.logo}>
        <a href="#about">
          <img
            className={css.image}
            src={Logo}
            alt="Troyan Katerina"
            width="126"
            height="43"
          />
        </a>
      </div>
     <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <a href="#home">{t("nav_home")}</a>
          </li>
          <li className={css.navItem}>
            <a href="#about">{t("nav_about")}</a>
          </li>
          <li className={css.navItem}>
            <a href="#benefist">{t("nav_benefits")}</a>
          </li>
          <li className={css.navItem}>
            <a href="#project">{t("nav_projects")}</a>
          </li>
          <li className={css.navItem}>
            <a href="#contact">{t("nav_contact")}</a>
          </li>
        </ul>
      </nav>
      <div>
  <button
    className={`${css.languageBtn} ${currentLang === "ua" ? css.active : ""}`}
    onClick={() => changeLanguage("ua")}
  >
    UA
  </button>
  <button
    className={`${css.languageBtn} ${currentLang === "en" ? css.active : ""}`}
    onClick={() => changeLanguage("en")}
  >
    EN
  </button>
</div>

      {isModalOpen && (
        <div className={css.modalNav}>
          <ul className={css.modalNavList}>
            <li className={css.modalNavItem}>
              <a href="#home" onClick={() => setIsModalOpen(false)}>
                {t("nav_home")}
              </a>
            </li>
            <li className={css.modalNavItem}>
              <a href="#about" onClick={() => setIsModalOpen(false)}>
                {t("nav_about")}
              </a>
            </li>
            <li className={css.modalNavItem}>
              <a href="#benefist" onClick={() => setIsModalOpen(false)}>
                {t("nav_benefits")}
              </a>
            </li>
            <li className={css.modalNavItem}>
              <a href="#project" onClick={() => setIsModalOpen(false)}>
                {t("nav_projects")}
              </a>
            </li>
            <li className={css.modalNavItem}>
              <a href="#contact" onClick={() => setIsModalOpen(false)}>
                {t("nav_contact")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
export default Header;
