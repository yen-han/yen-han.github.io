import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./ContactRef.module.scss";

function ContactRef() {
  useEffect(() => {
    gsap.fromTo(
      ".icon",
      {
        y: 70,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className={styles.ContactRef}>
      <div className={styles.reference}>
        <div className={"icon"}>
          <a
            href="https://github.com/yen-han"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className={"bi bi-github"}></i>
          </a>
        </div>
        <div className={"icon"}>
          <a
            href="https://www.linkedin.com/in/yen-han/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className={"bi bi-linkedin"}></i>{" "}
          </a>
        </div>
        <div className={"icon"}>
          <a href="assets/YenHan_Resume.pdf" download>
            <i className="bi bi-file-earmark-person-fill"></i>
          </a>
        </div>
        <div className={"icon"}>
          <a href="mailto:yenhan.dev@gmail.com">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
export default ContactRef;
