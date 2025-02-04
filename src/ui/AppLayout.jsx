import { Outlet } from 'react-router-dom';
import styles from '../styles/AppLayout.module.css';
import Header from './Header';
import SideBar from './SideBar';

function AppLayout() {
	return (
		<div>
			<Header />
			<main className={styles.container}>
				<SideBar />
				<Outlet />
			</main>
		</div>
	);
}

export default AppLayout;
