import styles from "./Contact.module.scss";
import ContactRef from "../ContactRef/ContactRef";

function Contact() {
  return (
    <section className={styles.Contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.contactTitle}>Connect with Yen</h2>
        <p className={styles.contactDesc}>
          Thank you for visiting my page!
          <br /> Please feel free to get in touch with me via
        </p>
        <ContactRef />
      </div>
    </section>
  );
}
export default Contact;
