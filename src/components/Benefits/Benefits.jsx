import { MdCenterFocusStrong, MdOutlineSms,MdCalendarMonth } from "react-icons/md";
import css from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <section id="benefist" className={css.benefits}>
      <h2 className={css.benefitsTitle}>Benefits of working with me</h2>
      <ul className={css.benefitsList}>
              <li className={css.benefitItem}>
            <MdCenterFocusStrong className={css.benefitIcon} />
          <h3 className={css.benefitSubtitle}>
            Focus on results and effective cooperation
          </h3>
          <p className={css.benefitText}>
            My goal is not just to create an interface, but to help your
            business work more efficiently. The result for me is not just code, but real value for you and your customers.
          </p>
        </li>
              <li className={css.benefitItem}>
            <MdOutlineSms className={css.benefitIcon} />
          <h3 className={css.benefitSubtitle}>Responsibility and
          сommunication</h3>
          <p className={css.benefitText}>
          I am attentive to tasks, meet deadlines, and am open to constructive criticism. It is important to me that the result meets your expectations.
          </p>
        </li>
              <li className={css.benefitItem}>
            <MdCalendarMonth className={css.benefitIcon} />
          <h3 className={css.benefitSubtitle}>Fast and 
          diligent execution</h3>
          <p className={css.benefitText}>
          I understand the value of time. I do my work conscientiously, with a focus on quality and detail, even under tight deadlines.
          </p>
        </li>
      </ul>
    </section>
  );
};
export default Benefits;
