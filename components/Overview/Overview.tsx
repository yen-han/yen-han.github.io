import styles from "../Overview/Overview.module.scss";
import Image from "next/image";
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
  let src = "../assets/video/" + data.media;
  let image_src = "/assets/images/" + data.image;
  return (
    <section className={styles.Overview} id="">
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={image_src}
          alt="Picture of the message generator"
          width={400}
          height={400}
        />
        <div className={styles.detail}>
          <h1>{data.title}</h1>
          <p className={styles.desc}>{data.description}</p>
          <div className={styles.skills}>
            {data.skills.map((skill, index) => (
              <>
                <span key={index}>{skill}</span>
                <span className={styles.bar}> | </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Overview;
