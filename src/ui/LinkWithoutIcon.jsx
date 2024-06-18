/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from '../styles/LinkWithoutIcon.module.css';

function LinkWithoutIcon({ title, path }) {
  return (
    <Link to={path} className={styles.linkWithoutIcon}>
      <span>{title}</span>
    </Link>
  );
}

export default LinkWithoutIcon;
