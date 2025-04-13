import styles from "./About.module.css";
import { CollapseCard } from "../../components/molecules";
import { workExperiences, education } from "./data";

const About = () => {
  const about =
    "The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.";

  return (
    <>
      <section>
        <h1 className={styles.header}>About Me</h1>
        <p className={styles.aboutText}>{about}</p>
      </section>
      <section>
        <h1 className={styles.header}>Work Experience</h1>

        {workExperiences.map((exp, index) => (
          <div key={index}>
            <CollapseCard
              title={exp.title}
              organization={exp.organization}
              dateRange={exp.dateRange}
              description={exp.description}
              tagLabel={exp.tagLabel}
              tagTheme={"blue"}
              {...(exp.location && { location: exp.location })}
            />
          </div>
        ))}
      </section>
      <section>
        <h1 className={styles.header}>Education</h1>
        <CollapseCard
          title={education.title}
          organization={education.organization}
          location={education.location}
          dateRange={education.dateRange}
          description={education.description}
          tagLabel={education.tagLabel}
          tagTheme={"green"}
        />
      </section>
    </>
  );
};

export { About };
