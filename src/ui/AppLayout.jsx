import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

function AppLayout() {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
