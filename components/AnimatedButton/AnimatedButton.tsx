import { useEffect, useRef } from "react";
import styles from "./AnimatedButton.module.scss";

export type Props = {
  data: {
    copy: string;
    link: string;
  };
};

function AnimatedButton({ data }: Props) {
  const chevronRef = useRef<HTMLDivElement>(null);
  return (
    <section className={styles.AnimatedButton}>
      <a
        className={styles.background}
        target="_blank"
        href={data.link}
        rel="noreferrer"
      >
        <div className={styles.copy}>{data.copy}</div>
        <svg className={styles.chevron} viewBox="0 0 7 4">
          <path
            d="M3.5 2.4L.9.1l-.9 1 3.1 2.7c.3.2.7.2.9 0L7 1 6 0 3.5 2.4z"
            fillRule="evenodd"
            fill="currentColor"
          />
        </svg>
      </a>
    </section>
  );
}
export default AnimatedButton;
