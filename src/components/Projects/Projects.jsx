import game from "../../assets/game.jpg";
import move from "../../assets/move.jpg";
import phone from "../../assets/phone.jpg";
import search from "../../assets/search.jpg";
import simply from "../../assets/simply.jpg";
import vin from "../../assets/vin.jpg";

import {
  FaGithub,
  FaEye,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { useTranslation } from "react-i18next";

import css from "./Projects.module.scss";

const images = [simply, move, game, vin, search, phone];

const githubLinks = [
  "https://github.com/katrin-troyan/simply-chocolate-project",
  "https://github.com/katrin-troyan/MOVIE-SEARCH",
  "https://github.com/TetianaHushnovska/stp-8885",
  "https://github.com/katrin-troyan/vin-cake-project",
  "https://github.com/katrin-troyan/Seek-and-you-shall-find",
  "https://github.com/katrin-troyan/phonebook",
];

const viewLinks = [
  "https://katrin-troyan.github.io/simply-chocolate-project/",
  "https://movie-search-five-opal.vercel.app/",
  "https://tetianahushnovska.github.io/stp-8885/",
  "https://katrin-troyan.github.io/vin-cake-project/",
  "https://seek-and-you-shall-find-yshc.vercel.app/",
  "https://phonebook-chi.vercel.app/",
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { t } = useTranslation();

  const projects = t("projects_list", { returnObjects: true });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLargeScreen = windowWidth >= 1300;

  const visibleProjects = () => {
    if (isLargeScreen) {
      return projects.slice(index, index + 3).map((p, i) => ({ ...p, img: images[index + i], github: githubLinks[index + i], view: viewLinks[index + i] }));
    }
    return [{
      ...projects[index],
      img: images[index],
      github: githubLinks[index],
      view: viewLinks[index],
    }];
  };

  const chanchProject = (direction) => {
    setIndex((prev) => {
      const maxIndex = isLargeScreen ? projects.length - 3 : projects.length - 1;
      if (direction === "left" && prev > 0) return prev - 1;
      if (direction === "right" && prev < maxIndex) return prev + 1;
      return prev;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => chanchProject("right"),
    onSwipedRight: () => chanchProject("left"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const displayedProjects = visibleProjects();

  return (
    <section id="project" className={css.project}>
      <h2 className={css.projectTitle}>{t("projects_title")}</h2>
      <div {...handlers} className={css.projectWrapper}>
        <ul className={css.projectList}>
          {displayedProjects.map((project, i) => (
            <li key={i} className={css.projectItem}>
              <div className={css.projectTitleWrapper}>
                <img
                  src={project.img}
                  alt={project.title}
                  className={css.projectImg}
                />
                <div className={css.descriptionOverlay}>
                  <h3 className={css.descriptionTitle}>{project.title}</h3>
                  <p className={css.descriptionText}>{project.description}</p>
                </div>
              </div>
              <div className={css.projectBtnWrapper}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.projectButton}
                >
                  <FaGithub className={css.projectIcon} /> {t("projects_github")}
                </a>
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.projectButton}
                >
                  <FaEye className={css.projectIcon} /> {t("projects_view")}
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className={css.arrowWrapper}>
          <button
            className={css.arrowButton}
            onClick={() => chanchProject("left")}
            disabled={index === 0}
          >
            <FaRegArrowAltCircleLeft className={css.iconBtn} />
          </button>
          <button
            className={css.arrowButton}
            onClick={() => chanchProject("right")}
            disabled={
              isLargeScreen ? index >= projects.length - 3 : index === projects.length - 1
            }
          >
            <FaRegArrowAltCircleRight className={css.iconBtn} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;