/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from '../styles/DropdownItem.module.css';

function DropdownItem({ icon, path, title }) {
  const linkStyle = icon ? styles.linkWithIcon : styles.linkWithoutIcon;

  return (
    <Link to={path} className={linkStyle}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{title}</span>
    </Link>
  );
}

export default DropdownItem;
