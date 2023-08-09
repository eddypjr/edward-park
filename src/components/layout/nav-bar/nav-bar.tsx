import '../../../styles/components/nav-bar.scss';
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {
  const navlinks = [
    {
      name: 'Home',
      link: '#home',
    },
    {
      name: 'About',
      link: '#about',
    },
    {
      name: 'Projects',
      link: '#projects',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  return (
    <nav className='navbar'>
      <h3 className='logo'>Edward Park</h3>
      <ul>
        {navlinks.map((navItem) => (
          <li key={navItem.name}>
            <Link to={navItem.link}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
