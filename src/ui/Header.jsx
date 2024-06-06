import styles from '../styles/Header.module.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserPanel from './UserPanel';

function Header() {
  return (
    <div className={styles.headerBar}>
      <Logo />
      <SearchBar />
      <UserPanel />
    </div>
  );
}

export default Header;
