import { useState } from "react";
import emailjs from "emailjs-com";
import css from "./Contact.module.scss";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <h2 className={css.contactTitle}>Let’s work together</h2>

      <form className={css.contactForm} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Name" className={css.inputField} required />
        <input type="email" name="email" placeholder="Email" className={css.inputField} required />
        <textarea name="message" placeholder="Comments" className={css.textareaField} required></textarea>
        <button type="submit" className={`${css.button} ${css.baseBtn}`}>Send</button>
      </form>

      {isModalOpen && (
        <div className={css.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={css.modal} onClick={(e) => e.stopPropagation()}>
            <h3 className={css.modalTitle}>Thank you for your interest in cooperation!</h3>
            <p className={css.modalText}>
              I will be in touch with you shortly to discuss further details and
              opportunities for cooperation. Please stay in touch.
            </p>
            <button onClick={() => setIsModalOpen(false)} className={`${css.close} ${css.baseBtn}`}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};
export default Contact;
