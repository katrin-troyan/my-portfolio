import css from './Quote.module.scss';
import codeImage from '../../assets/code.png';

const Quote = () => {
  return (
    <section id="quote" className={css.quote}>
      <div className={css.quoteImage}>
        <img className={css.img} src={codeImage} alt="code" />
         </div>
      <div className={css.quoteText}>
        <p className={css.text} >FROM IDEA <br />TO INTERACTIVE <br /> INTERFACE – <br /> WITH INSPIRATION <br /> AND CARE.</p>
        </div>
    </section>
  );
};
export default Quote;
