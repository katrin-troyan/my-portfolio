import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiFigma,
  SiVite,
  SiAxios,
  SiTypescript,
} from "react-icons/si";
import css from "./Techskills.module.scss";

const icons = [
  <FaHtml5 key="html" />,
  <FaCss3Alt key="css" />,
  <SiJavascript key="js" />,
  <FaReact key="react" />,
  <SiVite key="vite" />,
  <SiTypescript key="typescrip" />,
  <SiAxios key="axios" />,
  <FaGithub key="github" />,
  <SiFigma key="figma" />,
];

const Techskills = () => {
  return (
    <section className={css.techskills}>
      <div className={css.slider}>
        <div className={css.slideTrack}>
          {[...icons, ...icons].map((icon, index) => (
            <div className={css.slide} key={index}>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techskills;
