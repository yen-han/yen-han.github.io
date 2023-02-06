import classnames from "classnames";
import styles from "./Project.module.scss";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import AnimatedText from "../AnimatedText/AnimatedText";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
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

    const descriptions = gsap.utils.toArray(".desc");
    descriptions.forEach((desc: any) => {
      gsap.effects.popIn(desc, { duration: 0.7 });
    });
    const features = gsap.utils.toArray(".feature");
    features.forEach((feat: any) => {
      gsap.effects.popIn(feat, { duration: 0.7, delay: 1.5 });
    });
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
          <AnimatedText text={data.title} />
        </h3>
        <p className={classnames("desc", styles.prjDesc)}>{data.description}</p>
        <div className={classnames("feature", styles.features)}>
          {data.features.map((feature, index) => {
            return <li key={index}>{"- " + feature}</li>;
          })}
          <li>{skillSet}</li>
        </div>
        <AnimatedButton data={data.detail} />
      </div>
    </section>
  );
}
export default Project;
