import css from './About.module.css';

const About = () => {
  return (
    <section id="about" className={css.about}>
      <div className={css.aboutWrapper}>
        <ul className={css.aboutList}>
          <li className={css.aboutItem}>
            <h3 className={css.aboutTitle}>About Me</h3>
            <p className={css.aboutText}>
            I'm Kateryna Troyan, and I'm passionate about creating fast, responsive, and user-friendly web applications.
            I work with HTML, CSS, JavaScript, and React, specialising in developing interactive and visually appealing interfaces that improve user experience and help achieve business goals. I always adhere to the principles of clean code, attention to detail, and result orientation.
            I have experience working in team projects, where I actively contribute to the discussion of ideas, joint problem solving, and support of colleagues. 
            I help companies strengthen their online reputation with high-quality, user-friendly, and technologically advanced web solutions.
            </p>
          </li>
          <li className={css.aboutItem}>
            <h3 className={css.aboutTitle}>Soft Skills</h3>
            <p className={css.aboutText}>
            Teamwork<br />
            Communicative <br />
            Meeting deadlines <br />
            Responsibility<br />
            </p>
          </li>
          <li className={css.aboutItem}>
            <h3 className={css.aboutTitle}>Education</h3>
            <p className={css.aboutText}>
            2024-2025 IT School GoIT<br />
            Fullstack Developer<br />
            2002-2007 National University of <br />
            Life and Environmental Sciences of <br/> Ukraine Master's degree Breeding and Genetics
            </p>
            </li>
        </ul>
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
