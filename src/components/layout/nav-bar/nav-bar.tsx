import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav-bar.scss';

function NavBar() {
  const [hamburger, setHamburger] = useState(false);
  const hamburgerMenu = () => setHamburger(!hamburger);

  const navlinks = [
    {
      name: 'Home',
      link: '#',
    },
    {
      name: 'Experience',
      link: '#experience',
    },
    {
      name: 'Portfolio',
      link: '#portfolio',
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
    <>
      <nav className='navbar'>
        <h1 className='logo' onClick={pageUp} role='presentation' aria-label='To the top'>
          Edward Park
        </h1>
        <ul>
          {navlinks.map((navItem) => (
            <li key={navItem.name}>
              <Link to={navItem.link} aria-label={navItem.name}>
                {navItem.name}
              </Link>
            </li>
          ))}
          <li onClick={hamburgerMenu} aria-label='menu' role='presentation'>
            <FontAwesomeIcon icon={faBarsStaggered} className='mobile-menu' />
          </li>
        </ul>
      </nav>

      <div className={`mobile-nav ${hamburger ? 'open' : 'closed'}`}>
        <span onClick={hamburgerMenu} role='presentation'>
          <FontAwesomeIcon icon={faXmark} />
        </span>

        <ul>
          {navlinks.map((item) => (
            <li key={item.name} onClick={hamburgerMenu} role='presentation'>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
