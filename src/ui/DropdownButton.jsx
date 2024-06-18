/* eslint-disable react/prop-types */
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import styles from '../styles/DropdownButton.module.css';

function DropdownButton({ title, status, setStatus, icon }) {
  return (
    <button
      className={styles.dropdownButton}
      onClick={() => setStatus(!status)}
    >
      {icon ? (
        <div className={styles.container}>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.titleWithIcon}>{title}</span>
        </div>
      ) : (
        <span className={styles.title}>{title}</span>
      )}
      <span className={styles.iconArrow}>
        {status ? <SlArrowUp /> : <SlArrowDown />}
      </span>
    </button>
  );
}

export default DropdownButton;
