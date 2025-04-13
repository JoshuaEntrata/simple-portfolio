import { useState } from "react";
import styles from "./CollapseCard.module.css";
import { IconLabel, Tag } from "../../atoms";
import { FaBuilding, FaCalendarAlt, FaMapPin } from "react-icons/fa";

type CollapseCardProps = {
  title: string;
  organization: string;
  dateRange: string;
  description: string;
  tagLabel: string;
  location?: string;
  tagTheme?: "green" | "red" | "yellow" | "blue" | "gray";
};

const CollapseCard = ({
  title,
  organization,
  dateRange,
  description,
  tagLabel,
  location,
  tagTheme,
}: CollapseCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.card}>
        <div
          className={`${styles.content} ${isOpen ? styles.isOpen : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <Tag label={tagLabel} theme={tagTheme} />
          </div>
          <div className={styles.details}>
            <div className={styles.subdetails}>
              <IconLabel icon={<FaBuilding />} text={organization} />
              {location && <IconLabel icon={<FaMapPin />} text={location} />}
            </div>
            <IconLabel icon={<FaCalendarAlt />} text={dateRange} />
          </div>

          <div className={styles.description}>{description}</div>
        </div>
        <hr />
      </div>
    </>
  );
};

export { CollapseCard };
