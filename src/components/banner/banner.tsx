import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import htmlIcon from '../../assets/html5.svg';
import cssIcon from '../../assets/css3.svg';
import javascriptIcon from '../../assets/javascript.svg';
import reactIcon from '../../assets/react-40.svg';
import scssIcon from '../../assets/scss.svg';
import styledComponentsIcon from '../../assets/styled-components.png';

import '../../styles/components/banner.css';

function Banner() {
  const skillIcons = [
    {
      item: htmlIcon,
      title: 'HTML5',
    },
    {
      item: cssIcon,
      title: 'CSS3',
    },
    {
      item: javascriptIcon,
      title: 'JavaScript',
    },
    {
      item: reactIcon,
      title: 'React',
    },
    {
      item: scssIcon,
      title: 'Scss',
    },
    {
      item: styledComponentsIcon,
      title: 'Styled Components',
    },
  ];

  return (
    <section className='banner'>
      <div className='container'>
        <div className='content'>
          <div className='banner-top'>
            <div className='banner-text'>
              <h1>Front-End React Developer</h1>
              <p>Hi, I&apos;m Edward Park. A passionate Front-end React Developer based in Los Angeles, California.</p>
              <span>
                <a aria-label='linkedIn' href='https://www.linkedin.com/in/edwardparkwork/'>
                  <FontAwesomeIcon icon={faLinkedin} size='sm' />
                </a>

                <a aria-label='github' href='https://github.com/eddypjr'>
                  <FontAwesomeIcon icon={faGithub} size='sm' />
                </a>
              </span>
            </div>
            <div className='banner-right' />
          </div>

          <div className='banner-bottom'>
            <p>Tech Stack</p>
            <div className='tech-stack'>
              <ul>
                {skillIcons.map((skill) => (
                  <li key={skill.title}>
                    <img src={skill.item} title={skill.title} alt={`${skill.title}`} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
