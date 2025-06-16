import { FaLinkedin, FaGithub,  FaTelegramPlane } from 'react-icons/fa';
import fotoPortfolio from '../../assets/myfoto.png';
import css from './Hero.module.scss';

const Hero = () => {
  return (
    <section id="hero" className={css.hero}>
      <div className={css.heroText}>
        <p className={css.text} >Hello I`m</p>
        <h2 className={css.subtitle} >Troyan Katerina</h2>
        <h1 className={css.title}>Front-end Developer</h1>
        <div className={css.socialLinks}>
      <a className={css.socialLinksItem} href="https://www.linkedin.com/in/kateryna-troyan-b21328356/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a className={css.socialLinksItem} href="https://t.me/Katrin_tro" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane  />
      </a>
      <a className={css.socialLinksItem} href="https://github.com/katrin-troyan" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
        </div>
        <div className={css.description}>
        <button className={`${css.button} ${css.baseBtn}`}>Hire Me</button>
        <a
          className={`${css.cv} ${css.baseBtn}`}
          href="https://drive.google.com/file/d/1QGVp3iAFxVCqPWwWC02b-9_kNRNPjUFR/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
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
