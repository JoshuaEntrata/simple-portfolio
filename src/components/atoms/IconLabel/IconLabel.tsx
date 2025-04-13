import React from "react";
import styles from "./IconLabel.module.css";

type IconLabelProps = {
  icon: React.ReactNode;
  text: string;
  src?: string;
  isLink?: boolean;
};

const IconLabel = ({ icon, text, src, isLink = false }: IconLabelProps) => {
  return (
    <>
      <div className={styles.item}>
        {icon}
        {isLink ? (
          <a
            href={src}
            className={styles.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </a>
        ) : (
          <span className={styles.label}>{text}</span>
        )}
      </div>
    </>
  );
};

export { IconLabel };
