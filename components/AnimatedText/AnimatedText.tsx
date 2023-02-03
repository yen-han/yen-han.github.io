import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./AnimatedText.module.scss";
import classNames from "classnames";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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
      gsap.fromTo(
        text.querySelectorAll(".mask"),
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
          },
        }
      );
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
