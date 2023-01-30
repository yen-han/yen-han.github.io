import { useRef } from "react";
import styles from "./AnimatedButton.module.scss";
import { gsap } from "gsap";

export type Props = {
  data: {
    copy: string;
    link: string;
  };
};

function AnimatedButton({ data }: Props) {
  const chevronRef = useRef<HTMLDivElement>(null);

  const onEnter = ({ currentTarget }: { currentTarget: any }) => {
    gsap.to(currentTarget, { backgroundColor: "teal" });
    gsap.to(chevronRef.current, { x: 7, duration: 0.3, ease: "power3.out" });
  };

  const onLeave = ({ currentTarget }: { currentTarget: any }) => {
    gsap.to(currentTarget, { backgroundColor: "#575757" });
    gsap.to(chevronRef.current, { x: 0, duration: 0.3, ease: "none" });
  };

  return (
    <section className={styles.AnimatedButton}>
      <a
        className={styles.background}
        target="_blank"
        href={data.link}
        rel="noreferrer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className={styles.copy}>{data.copy}</div>
        <div ref={chevronRef}>
          <svg className={styles.chevron} viewBox="0 0 7 4">
            <path
              d="M3.5 2.4L.9.1l-.9 1 3.1 2.7c.3.2.7.2.9 0L7 1 6 0 3.5 2.4z"
              fillRule="evenodd"
              fill="currentColor"
            />
          </svg>
        </div>
      </a>
    </section>
  );
}
export default AnimatedButton;
