import styles from "./Project.module.css";
import { projects } from "./data";
import { ProjectCard } from "../../components/molecules";

const Projects = () => {
  console.log(projects);
  return (
    <>
      <h1 className={styles.header}>Projects</h1>
      <p className={styles.description}>Things I've built for</p>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              imgSrc={project.imgSrc}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              previewSrc={project.previewSrc}
              githubSrc={project.githubSrc}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export { Projects };
