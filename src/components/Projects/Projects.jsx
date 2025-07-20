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

import css from "./Projects.module.scss";

const projects = [
  {
    id: 1,
    img: simply,
    title: "Simply Chocolate",
    description:
      "A website for a premium chocolate brand using modern responsive layout, semantic HTML structure, interactive effects and smooth animation. The site is targeted at a premium audience with a strong visual focus. It is fully optimised for tablet and mobile devices.",
    github: "https://github.com/katrin-troyan/simply-chocolate-project",
    view: "https://katrin-troyan.github.io/simply-chocolate-project/",
  },
  {
    id: 2,
    img: move,
    title: "KinoClick",
    description:
      "A web application developed in React.js using Vite that integrates with an external API to search for movies and display their posters, titles, and short descriptions. ",
    github: "https://github.com/katrin-troyan/MOVIE-SEARCH",
    view: "https://movie-search-five-opal.vercel.app/",
  },
  {
    id: 3,
    img: game,
    title: "Wacky Battles",
    description:
      "The Wacky Battles website for Evoplay is a team project that demonstrates a dynamic landing page of the game. We implemented adaptive, easy-to-navigate and visually appealing sections: Header, Hero, About the Game, How to Play, GameFeatures and Main Characters.",
    github: "https://github.com/TetianaHushnovska/stp-8885",
    view: "https://tetianahushnovska.github.io/stp-8885/",
  },
  {
    id: 4,
    img: vin,
    title: "Happy Cake",
    description:
      "Developed a fully responsive website for a cake company using HTML and CSS. Implemented hover effects, animation and a modal window. The design complies with the mobile-first approach and modern web standards. ",
    github: "https://github.com/katrin-troyan/vin-cake-project",
    view: "https://katrin-troyan.github.io/vin-cake-project/",
  },
  {
    id: 5,
    img: search,
    title: "Seek and you shall find",
    description:
      "A web application developed in React.js using a public API. For searching images by keywords with interactive interface elements. Used CSS for responsive design.",
    github: "https://github.com/katrin-troyan/Seek-and-you-shall-find",
    view: "https://seek-and-you-shall-find-yshc.vercel.app/",
  },
  {
    id: 6,
    img: phone,
    title: "Phonebook",
    description:
      "Developed a React web application for storing and managing user contacts with implemented authorisation and registration. Ensured that contacts were stored on the server, added search, deletion of records, and verification of the correctness of the entered data.",
    github: "https://github.com/katrin-troyan/phonebook",
    view: "https://phonebook-chi.vercel.app/",
  },
];

const Projects = () => {
    const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLargeScreen = windowWidth >= 1300;

  const visibleProjects = () => {
    if (isLargeScreen) {
      return projects.slice(index, index + 3);
    }
    return [projects[index]];
  };

  const chanchProject = (direction) => {
    setIndex((prev) => {
      const maxIndex = window.innerWidth >= 1300 ? projects.length - 3 : projects.length - 1;
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
      <h2 className={css.projectTitle}>Projects</h2>
      <div {...handlers} className={css.projectWrapper}>
        <ul className={css.projectList}>
          {displayedProjects.map((project) => (
            <li key={project.id} className={css.projectItem}>
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
                  <FaGithub className={css.projectIcon} /> GitHub
                </a>
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.projectButton}
                >
                  <FaEye className={css.projectIcon} /> View
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
              window.innerWidth >= 1300 ? index >= projects.length - 3 : index === projects.length - 1
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
