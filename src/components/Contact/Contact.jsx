import { useState } from "react";
import emailjs from "emailjs-com";
import css from "./Contact.module.scss";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_llv925s",
        "template_9misb6c",
        e.target,
        "Ku0PsR1c8EO9mUa1v"
      )
      .then(() => {
        setIsModalOpen(true);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
      });
  };

  return (
    <section id="contact" className={css.contact}>
      <h2 className={css.contactTitle}>{t("contact_title")}</h2>

      <form className={css.contactForm} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder={t("contact_name")}
          className={css.inputField}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("contact_email")}
          className={css.inputField}
          required
        />
        <textarea
          name="message"
          placeholder={t("contact_message")}
          className={css.textareaField}
          required
        ></textarea>
        <button type="submit" className={`${css.button} ${css.baseBtn}`}>
          {t("contact_send")}
        </button>
      </form>

      {isModalOpen && (
        <div className={css.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={css.modal} onClick={(e) => e.stopPropagation()}>
            <h3 className={css.modalTitle}>{t("modal_title")}</h3>
            <p className={css.modalText}>{t("modal_text")}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className={`${css.close} ${css.baseBtn}`}
            >
              {t("modal_close")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
