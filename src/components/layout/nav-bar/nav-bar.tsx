import { HashLink as Link } from 'react-router-hash-link';
import './nav-bar.scss';

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

  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className='navbar'>
      <h3 className='logo' onClick={pageUp} role='presentation' aria-label='To the top'>
        Edward Park
      </h3>
      <ul>
        {navlinks.map((navItem) => (
          <li key={navItem.name}>
            <Link to={navItem.link} aria-label={navItem.name}>
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
