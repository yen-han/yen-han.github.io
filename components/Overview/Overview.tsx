import { useEffect } from "react";
import styles from "../Overview/Overview.module.scss";
import { gsap } from "gsap";
import classnames from "classnames";
export type Props = {
  data: {
    id: number;
    title: string;
    description: string;
    media: string;
    image: string;
    features: string[];
    skills: string[];
    detail: {
      copy: string;
      link: string;
    };
  };
};

function Overview({ data }: Props) {
  let image_src = "/assets/images/" + data.image;
  useEffect(() => {
    gsap.fromTo(
      ".container",
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);
  return (
    <section className={styles.Overview} id="">
      <div className={classnames("container", styles.container)}>
        <img
          className={styles.image}
          src={image_src}
          alt="Picture of the message generator"
        />
        <div className={styles.detail}>
          <h1>{data.title}</h1>
          <p className={styles.desc}>{data.description}</p>
          <div className={styles.skills}>
            {data.skills.map((skill, index) => (
              <div className={styles.eachSkill} key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Overview;
