import classnames from "classnames";
import styles from "./Project.module.scss";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import AnimatedText from "../AnimatedText/AnimatedText";
import { useEffect, useState } from "react";
export type Props = {
  data: {
    id: number;
    title: string;
    description: string;
    media: string;
    features: string[];
    skills: string[];
    detail: {
      copy: string;
      link: string;
    };
  };
};

function Project({ data }: Props) {
  let src = "assets/video/" + data.media;
  const [skillSet, setSkillSet] = useState("");
  useEffect(() => {
    let str = "- Coded with ";
    data.skills.forEach((skill, index) => {
      if (index + 1 == data.skills.length) str += skill;
      else str += skill + ", ";
    });
    setSkillSet(str);
  });
  return (
    <section className={classnames(styles.Project)}>
      <div className={classnames(styles.videoContainer)}>
        <video autoPlay muted>
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <div className={styles.prjContainer}>
        <h3 className={styles.prjTitle}>
          <AnimatedText text={data.title} type={"title"} />
        </h3>
        <div className={styles.prjDesc}>
          <AnimatedText text={data.description} type={"paragraph"} />
        </div>
        <div className={styles.features}>
          {data.features.map((feature, index) => {
            // return <li key={index}>- {feature}</li>;
            return (
              <li key={index}>
                <AnimatedText text={"- " + feature} type={"list"} />
              </li>
            );
          })}
          <li>
            <AnimatedText text={skillSet} type={"list"} />
          </li>
        </div>
        <AnimatedButton data={data.detail} />
      </div>
    </section>
  );
}
export default Project;
