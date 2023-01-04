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
        <Link href="#projects" className={styles.link}>
          Projects
        </Link>
        <Link href="#contact" className={styles.link}>
          Connect
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
