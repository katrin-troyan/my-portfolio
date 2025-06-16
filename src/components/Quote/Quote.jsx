import css from './Quote.module.scss';

const Quote = () => {
  return (
    <section id="quote" className={css.quote}>
      <div className={css.quoteImage}>
        <img className={css.img} src="/src/assets/code.png" alt="code" />
         </div>
      <div className={css.quoteText}>
        <p className={css.text} >FROM IDEA <br />TO INTERACTIVE <br /> INTERFACE – <br /> WITH INSPIRATION <br /> AND CARE.</p>
        </div>
    </section>
  );
};
export default Quote;
