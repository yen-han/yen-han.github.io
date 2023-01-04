import styles from "./ContactRef.module.scss";

function ContactRef() {
  return (
    <section className={styles.ContactRef}>
      <div className={styles.reference}>
        <a
          href="https://github.com/yen-han"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yen-han/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="assets/YenHan_Resume.pdf" download>
          <i className="bi bi-file-earmark-person-fill"></i>
        </a>
        <a href="mailto:yenhan.dev@gmail.com">
          <i className="bi bi-envelope-fill"></i>
        </a>
      </div>
    </section>
  );
}
export default ContactRef;
