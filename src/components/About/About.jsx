import { useState } from "react";
import comp from "../../assets/comp.png";
import css from "./About.module.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const items = t("about_items", { returnObjects: true });

  return (
    <section id="about" className={css.about}>
      <h2 className={css.aboutTitle}>{t("about_title")}</h2>
      <div className={css.aboutWrapper}>
        <div className={css.accordion}>
          <ul className={css.aboutList}>
            {items.map((item, index) => (
              <li className={css.aboutItem} key={index}>
                <h3 className={css.aboutSubtitle}>
                  <button
                    type="button"
                    className={css.aboutBtn}
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}
                  </button>
                </h3>
                {openIndex === index && (
                  <p className={css.aboutText}>
                    {item.content.split("<br/>").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.aboutImg}>
          <img className={css.img} src={comp} alt="computer" />
        </div>
      </div>
      <div className={css.btnDownload}>
        <a
          className={`${css.cv} ${css.baseBtn}`}
          href="https://drive.google.com/file/d/1QGVp3iAFxVCqPWwWC02b-9_kNRNPjUFR/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("about_cv")}
        </a>
      </div>
    </section>
  );
};

export default About;
