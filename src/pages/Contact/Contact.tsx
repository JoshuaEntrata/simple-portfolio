import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const githubSrc = "https://github.com/JoshuaEntrata";
  const linkedinSrc = "https://www.linkedin.com/in/joshua-kyle-entrata/";
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.text}>
          For any questions, please email me:
          <br />
          <span className={styles.name}>kesselentrata@gmail.com</span>
        </h1>

        <div className={styles.icons}>
          <a href={githubSrc} target="_blank" rel="noopener noreferrer">
            <FaGithub size={100} />
          </a>
          <a href={linkedinSrc} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={100} />
          </a>
        </div>
      </div>
    </>
  );
};

export { Contact };
