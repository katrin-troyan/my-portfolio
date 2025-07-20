import Logo from "../../assets/logon.png";
import { IoMdList } from "react-icons/io";
import { useState } from "react";
import css from "./Header.module.scss";

const Header = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={css.header}>
      <IoMdList className={css.menuIcon} onClick={() => setIsModalOpen(prev => !prev)}  />
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
            <a href="#home">Home</a>
          </li>
          <li className={css.navItem}>
            <a href="#about">About me</a>
          </li>
          <li className={css.navItem}>
            <a href="#benefist">Benefist</a>
          </li>
          <li className={css.navItem}>
            <a href="#project">Projects</a>
          </li>
          <li className={css.navItem}>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
      <a href="#contact" className={css.baseBtn}>
        Hire Me
          </a>
          {isModalOpen && (
  <div className={css.modalNav}>
    <ul className={css.modalNavList}>
      <li className={css.modalNavItem}><a href="#home" onClick={() => setIsModalOpen(false)}>Home</a></li>
      <li className={css.modalNavItem}><a href="#about" onClick={() => setIsModalOpen(false)}>About me</a></li>
      <li className={css.modalNavItem}><a href="#benefist" onClick={() => setIsModalOpen(false)}>Benefist</a></li>
      <li className={css.modalNavItem}><a href="#project" onClick={() => setIsModalOpen(false)}>Projects</a></li>
      <li className={css.modalNavItem}><a href="#contact" onClick={() => setIsModalOpen(false)}>Contact me</a></li>
    </ul>
  </div>
)}
    </header>
  );
};
export default Header;
