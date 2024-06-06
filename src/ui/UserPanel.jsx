import { BsQrCodeScan, BsThreeDots } from 'react-icons/bs';
import styles from '../styles/UserPanel.module.css';

function UserPanel() {
  return (
    <div className={styles.userPanel}>
      <button className={styles.getAppBtn}>
        <BsQrCodeScan size={'1.6rem'} />
        <span>Get app</span>
      </button>
      <button className={styles.loginBtn}>Log in</button>
      <button className={styles.optionsBtn}>
        <BsThreeDots size={'1.8rem'} />
      </button>
    </div>
  );
}

export default UserPanel;
