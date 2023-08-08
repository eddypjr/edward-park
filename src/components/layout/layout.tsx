import { Outlet } from 'react-router-dom';
import NavBar from './nav-bar/nav-bar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
