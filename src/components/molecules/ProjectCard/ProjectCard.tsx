import styles from "./ProjectCard.module.css";
import { IconLabel } from "../../atoms";
import { FaGithub, FaLink } from "react-icons/fa";

type ProjectCardProps = {
  imgSrc: string;
  title: string;
  description: string;
  techStack: string;
  previewSrc: string;
  githubSrc: string;
};

const ProjectCard = ({
  imgSrc,
  title,
  description,
  techStack,
  previewSrc,
  githubSrc,
}: ProjectCardProps) => {
  return (
    <>
      <div className={styles.card}>
        <img src={imgSrc} className={styles.image} alt="sample asdfasdf asdf" />

        <div className={styles.body}>
          <div>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <p className={styles.techstack}>
              <span>Tech stack:</span> {techStack}
            </p>
          </div>

          <div className={styles.links}>
            <IconLabel
              icon={<FaLink />}
              text={"Live Preview"}
              isLink={true}
              src={previewSrc}
            />
            <IconLabel
              icon={<FaGithub />}
              text={"View Code"}
              isLink={true}
              src={githubSrc}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { ProjectCard };
