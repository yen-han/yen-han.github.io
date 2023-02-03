import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./ContactRef.module.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import classNames from "classnames";
gsap.registerPlugin(ScrollTrigger);

function ContactRef() {
  const contactRef = useRef(null);

  useEffect(() => {
    const contacts = gsap.utils.toArray(".contact");
    contacts.forEach((contact: any) => {
      gsap.fromTo(
        contact.querySelectorAll(".icon"),
        {
          y: 70,
          opacity: 0,
          delay: 0.5,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contact,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.ContactRef} ref={contactRef}>
      <div className={classNames("contact", styles.reference)}>
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
