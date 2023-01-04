import styles from "./Intro.module.scss";
import ContactRef from "../ContactRef/ContactRef";

export type Props = {
  data: {
    title: string;
    description: string[];
  };
};

function Intro({ data }: Props) {
  return (
    <section className={styles.Intro} id="title">
      <div className={styles.container}>
        <h6 className={styles.preface}>Hi, I&apos;m</h6>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.desc}>
          {data.description.map((desc, index) => {
            return (
              <span key={index}>
                {desc}
                <br />
              </span>
            );
          })}
        </p>
        <ContactRef />
      </div>
    </section>
  );
}
export default Intro;
