import css from './Quote.module.scss';
import codeImage from '../../assets/code.png';
import { useTranslation } from 'react-i18next';

const Quote = () => {
  const { t } = useTranslation();

  return (
    <section id="quote" className={css.quote}>
      <div className={css.quoteImage}>
        <img className={css.img} src={codeImage} alt="code" />
      </div>
      <div className={css.quoteText}>
        <p className={css.text}>{t("quote_text")}</p>
      </div>
    </section>
  );
};

export default Quote;
