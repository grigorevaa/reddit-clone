/* eslint-disable react/prop-types */
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import styles from '../styles/DropdownButton.module.css';

function DropdownButton({ title, status, setOpen }) {
  return (
    <button className={styles.dropdownButton} onClick={() => setOpen(!status)}>
      <span className={styles.title}>{title}</span>
      <span className={styles.icon}>
        {status ? <SlArrowUp /> : <SlArrowDown />}
      </span>
    </button>
  );
}

export default DropdownButton;
