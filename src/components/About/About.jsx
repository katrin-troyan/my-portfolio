import { useState } from "react";
import comp from "../../assets/comp.png";
import css from "./About.module.scss";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="about" className={css.about}>
      <h2 className={css.aboutTitle}>About Me</h2>
      <div className={css.aboutWrapper}>
        <div className={css.accordion}>
          <ul className={css.aboutList}>
            {[
              {
                title: "About Me",
                content: `I'm Kateryna Troyan, and I'm passionate about creating fast, responsive, and user-friendly web applications.
                I work with HTML, CSS, JavaScript, React, specialising in developing interactive and visually appealing interfaces that improve user experience and help achieve business goals. I always adhere to the principles of clean code, attention to detail, and result orientation.
                I help companies strengthen their online reputation with high-quality, user-friendly, and technologically advanced web solutions.`,
              },
              {
                title: "Soft Skills",
                content: `Teamwork<br/>Communicative<br/>Meeting deadlines<br/>Responsibility`,
              },
              {
                title: "Goals",
                content: `Develop as a Frontend developer<br/>Participate in cool projects<br/>Create user-friendly interfaces for people`,
              },
              {
                title: "Education",
                content: `2024-2025 IT School GoIT<br/>Fullstack Developer<br/>2002-2007 National University of Life and Environmental Sciences of Ukraine, Master's degree`,
              },
            ].map((item, index) => (
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
          Download CV
        </a>
      </div>
    </section>
  );
};
export default About;
