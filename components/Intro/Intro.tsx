import styles from "./Intro.module.scss";
import ContactRef from "../ContactRef/ContactRef";
import AnimatedText from "../AnimatedText/AnimatedText";
import { gsap } from "gsap";
import { useEffect } from "react";
import classnames from "classnames";

export type Props = {
  data: {
    title: string;
    description: string[];
  };
};

function Intro({ data }: Props) {
  useEffect(() => {
    gsap.effects.popIn(".description");
  }, []);
  return (
    <section className={styles.Intro} id="title">
      <div className={styles.container}>
        <h6 className={styles.preface}>
          <AnimatedText text={"Hi, I'm"} />
        </h6>
        <h1 className={styles.title}>
          <AnimatedText text={data.title} />
        </h1>
        <div className={classnames("description", styles.desc)}>
          {data.description.map((desc, index) => {
            return <p key={index}>{desc}</p>;
          })}
        </div>
        <ContactRef />
      </div>
    </section>
  );
}
export default Intro;
