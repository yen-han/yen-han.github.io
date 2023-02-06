import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./AnimatedText.module.scss";
import classNames from "classnames";

export type Props = {
  key?: number;
  text: string;
};
function AnimatedText({ text }: Props) {
  const titleRef = useRef(null);
  const words = text.split(" ");
  useEffect(() => {
    const textAnimators = gsap.utils.toArray(".textAnimators");
    textAnimators.forEach((text: any) => {
      gsap.effects.popIn(text.querySelectorAll(".mask"), {
        stagger: 0.3,
        y: 30,
        delay: 0,
        duration: 0.7,
      });
    });
  }, []);

  return (
    <div className={"textAnimators"}>
      {words.map((word, index) => (
        <span
          className={classNames("mask", styles.mask)}
          key={index}
          ref={titleRef}
        >
          {word}{" "}
        </span>
      ))}
    </div>
  );
}
export default AnimatedText;
