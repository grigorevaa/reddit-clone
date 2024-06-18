/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from '../styles/LinkWithIcon.module.css';

function LinkWithIcon({ icon, path, title }) {
  return (
    <Link to={path} className={styles.linkWithIcon}>
      <span className={styles.icon}>{icon}</span>
      <span>{title}</span>
    </Link>
  );
}

export default LinkWithIcon;
