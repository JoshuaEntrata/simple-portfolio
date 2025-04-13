import styles from "./TechStack.module.css";
import { TechStackIcon } from "../../components/atoms";
import { techStackLogos } from "./data";

const TechStack = () => {
  return (
    <>
      <h1 className={styles.header}>My Tech Stack</h1>
      <p className={styles.description}>
        Technologies I've been working with recently
      </p>

      <div className={styles.logos}>
        {techStackLogos.map((logo, index) => (
          <div key={index} className={styles.center}>
            <TechStackIcon imgSrc={logo.imgSrc} />
          </div>
        ))}
      </div>
    </>
  );
};

export { TechStack };
