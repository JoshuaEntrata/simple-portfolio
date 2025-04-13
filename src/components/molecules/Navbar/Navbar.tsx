import { Link } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <img
          src={"/logo/logo-dark-mode.png"}
          alt={"Logo"}
          className={styles.logo}
        />

        <div className={styles.links}>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/about">
            About
          </Link>
          <Link className={styles.link} to="/techstack">
            Tech Stack
          </Link>
          <Link className={styles.link} to="/projects">
            Projects
          </Link>
          <Link className={styles.link} to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
