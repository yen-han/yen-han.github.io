import Link from "next/link";
import classnames from "classnames";
import styles from "./Nav.module.scss";

function Nav() {
  return (
    <nav className={classnames(styles.Nav, "nav-bar")}>
      <div className={classnames(styles.logo)}>
        <Link href="/">
          YEN
          <br />
          <span className={styles.lastname}>HAN</span>
        </Link>
      </div>
      <div className={styles.container}>
        <Link href="/#projects" className={styles.link}>
          PROJECTS
        </Link>
        <Link href="/#contact" className={styles.link}>
          CONTACT
        </Link>
      </div>
      <div className={styles.contact}>
        <a className={styles.ask} href="mailto:yenhan.dev@gmail.com">
          CONTACT ME
        </a>
        <a className={styles.resume} href="assets/YenHan_Resume.pdf" download>
          RESUME
        </a>
      </div>
    </nav>
  );
}
export default Nav;
