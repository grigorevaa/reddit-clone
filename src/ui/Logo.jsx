import styles from '../styles/Logo.module.css';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img
        className={styles.logo}
        src="./public/img/reddit-logo-transparent.webp"
      />
    </div>
  );
}

export default Logo;
