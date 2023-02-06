import styles from "./Contact.module.scss";
import ContactRef from "../ContactRef/ContactRef";
import AnimatedText from "../AnimatedText/AnimatedText";
import classnames from "classnames";
import { gsap } from "gsap";
import { useEffect } from "react";
function Contact() {
  useEffect(() => {
    gsap.effects.popIn(".contact-desc");
  }, []);
  return (
    <section className={styles.Contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.contactTitle}>
          <AnimatedText text={"Connect with Yen"} />
        </h2>
        <p className={classnames("contact-desc", styles.contactDesc)}>
          Thank you for visiting my page!
          <br /> Please feel free to get in touch with me via
        </p>
        <ContactRef />
      </div>
    </section>
  );
}
export default Contact;
