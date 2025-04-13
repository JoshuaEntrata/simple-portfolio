import styles from "./TechStackIcon.module.css";

type TechStackIconProps = {
  imgSrc: string;
  alt?: string;
};

const TechStackIcon = ({ imgSrc, alt = "" }: TechStackIconProps) => {
  return (
    <>
      <img
        src={imgSrc}
        alt={alt}
        className={styles.icon}
        height={105}
        width={105}
      />
    </>
  );
};

export { TechStackIcon };
