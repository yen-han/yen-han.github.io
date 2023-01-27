import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./AnimatedText.module.scss";
import classNames from "classnames";
export type Props = {
  key?: number;
  text: string;
  type: string;
};
function AnimatedText({ text, type }: Props) {
  const spanRef = useRef(null);
  const words = text.split(" ");
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".mask",
      {
        y: 30,
        opacity: 0,
        delay: 0.5,
      },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.3, ease: "power4.out" }
    );
    tl.fromTo(
      ".paragraph",
      {
        y: 30,
        opacity: 0,
        delay: 1,
      },
      { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" }
    );
    tl.fromTo(
      ".list",
      {
        y: 30,
        opacity: 0,
        delay: 1,
      },
      { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" }
    );
  }, []);

  function renderingText() {
    if (type === "title") {
      return words.map((word, index) => (
        <span
          className={classNames("mask", styles.mask)}
          key={index}
          ref={spanRef}
        >
          {word}{" "}
        </span>
      ));
    } else if (type == "paragraph") {
      return (
        <p className={classNames("paragraph", styles.desc)} ref={spanRef}>
          {text}
        </p>
      );
    } else {
      return (
        <p className={classNames("list", styles.list)} ref={spanRef}>
          {text}
        </p>
      );
    }
  }

  return <>{renderingText()}</>;
}
export default AnimatedText;
