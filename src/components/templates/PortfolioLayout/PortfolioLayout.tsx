import React from "react";
import { Navbar } from "../../molecules";
import styles from "./PortfolioLayout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const PortfolioLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.layout}>
        <Navbar />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export { PortfolioLayout };
