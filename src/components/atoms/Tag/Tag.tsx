import styles from "./Tag.module.css";

type TagProps = {
  label: string;
  theme?: "green" | "red" | "yellow" | "blue" | "gray";
};

const Tag = ({ label, theme = "gray" }: TagProps) => {
  return (
    <>
      <div className={`${styles.tag} ${styles[theme]}`}>{label}</div>
    </>
  );
};

export { Tag };
