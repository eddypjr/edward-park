import '../../../styles/components/nav-bar.css';

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
        {navlinks.map((link) => (
          <li key={link.name}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
