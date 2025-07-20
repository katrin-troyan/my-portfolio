import {
  MdCenterFocusStrong,
  MdOutlineSms,
  MdCalendarMonth
} from "react-icons/md";
import css from "./Benefits.module.scss";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();
  const benefits = t("benefits_items", { returnObjects: true });

  const icons = [
    <MdCenterFocusStrong className={css.benefitIcon} />,
    <MdOutlineSms className={css.benefitIcon} />,
    <MdCalendarMonth className={css.benefitIcon} />
  ];

  return (
    <section id="benefist" className={css.benefits}>
      <h2 className={css.benefitsTitle}>{t("benefits_title")}</h2>
      <ul className={css.benefitsList}>
        {benefits.map((item, index) => (
          <li className={css.benefitItem} key={index}>
            {icons[index]}
            <h3 className={css.benefitSubtitle}>{item.title}</h3>
            <p className={css.benefitText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
