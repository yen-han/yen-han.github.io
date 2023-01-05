import Head from "next/head";

import Intro from "../components/Intro/Intro";
import Nav from "../components/Nav/Nav";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import styles from "./index.module.scss";

import { projects } from "../data/projects";
import { introduction } from "../data/introduction";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yen Han</title>
        <meta name="description" content="Yen Han's Page" />
        <meta name="author" content="Yen Han" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={styles.Home} id="projects">
        <Intro data={introduction} />
        <hr />
        <section className={styles.projects}>
          {projects.map((project, index) => {
            if (index + 1 == projects.length)
              return <Project data={project} key={index} />;
            else
              return (
                <div key={index}>
                  <Project data={project} />
                  <hr className={styles.divider} />
                </div>
              );
          })}
        </section>
        <hr />
        <Contact />
        <hr />
      </main>

      <footer className={styles.footer}>© 2023 Yen (Yeeun) Han</footer>
    </div>
  );
}
