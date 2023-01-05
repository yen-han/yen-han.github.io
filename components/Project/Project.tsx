import classnames from "classnames";
import styles from "./Project.module.scss";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

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

  return (
    <section className={classnames(styles.Project)}>
      <div className={classnames(styles.videoContainer)}>
        <video autoPlay muted>
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <div className={styles.prjContainer}>
        <h3 className={styles.prjTitle}>{data.title}</h3>
        <p className={styles.prjDesc}>{data.description}</p>
        <div className={styles.features}>
          {data.features.map((feature, index) => {
            return <li key={index}>- {feature}</li>;
          })}
        </div>
        <div className={styles.skills}>
          - Coded with
          {data.skills.map((skill, index) => {
            if (index + 1 == data.skills.length)
              return <span key={index}> {skill}</span>;
            else return <span key={index}> {skill},</span>;
          })}
        </div>
        <AnimatedButton data={data.detail} />
      </div>
    </section>
  );
}
export default Project;
