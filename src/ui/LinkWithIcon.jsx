/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from '../styles/LinkWithIcon.module.css';

function LinkWithIcon({ children, path, name }) {
  return (
    <Link to={path} className={styles.linkWithIcon}>
      <span className={styles.icon}>{children}</span>
      <span>{name}</span>
    </Link>
  );
}

export default LinkWithIcon;
