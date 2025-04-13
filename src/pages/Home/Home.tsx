import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.text}>
          Hi 👋, <br />
          My name is <br />
          <span className={styles.name}>Joshua Kyle Entrata</span>
          <br />I build things for web
        </h1>

        <img
          src="/images/profile-placeholder.jpeg"
          alt="Avatar"
          className={styles.avatar}
        />
      </div>
    </>
  );
};

export { Home };
