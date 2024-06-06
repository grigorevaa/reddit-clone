import { BsQrCodeScan, BsThreeDots } from 'react-icons/bs';
import styles from '../styles/UserPanel.module.css';

function UserPanel() {
  return (
    <div className={styles.userPanel}>
      <button className={styles.getAppBtn}>
        <BsQrCodeScan color={'#f3f4f7'} size={'1.6rem'} />
        <span>Get app</span>
      </button>
      <button className={styles.loginBtn}>Log in</button>
      <button className={styles.optionsBtn}>
        <BsThreeDots color={'#f3f4f7'} size={'1.8rem'} />
      </button>
    </div>
  );
}

export default UserPanel;
