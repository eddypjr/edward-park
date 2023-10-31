import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import htmlIcon from '../../assets/html5.svg';
import cssIcon from '../../assets/css3.svg';
import typescriptIcon from '../../assets/typescript.svg';
import reactIcon from '../../assets/react-40.svg';
import styledComponentsIcon from '../../assets/styled-components.png';
import nodeJsIcon from '../../assets/nodejs.svg';
import resumeIcon from '../../assets/resume.png';
import nextJsIcon from '../../assets/nextjs.svg';

import './hero.scss';

function Hero() {
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
      item: typescriptIcon,
      title: 'TypeScript',
    },
    {
      item: reactIcon,
      title: 'React',
    },
    {
      item: nextJsIcon,
      title: 'Next.js',
    },
    {
      item: styledComponentsIcon,
      title: 'Styled Components',
    },
    {
      item: nodeJsIcon,
      title: 'Node.js',
    },
  ];

  return (
    <>
      <section className='hero' id='home'>
        <div className='hero-container'>
          <div className='hero-content'>
            <div className='hero-top'>
              <div className='hero-text'>
                <h1>Full Stack React Developer</h1>
                <p>Hi, I&apos;m Edward Park. A versatile Front-End Developer from Los Angeles, California. 📍</p>
                <span>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    aria-label='linkedIn'
                    title='LinkedIn'
                    href='https://www.linkedin.com/in/edwardparkwork/'
                  >
                    <FontAwesomeIcon icon={faLinkedin} size='sm' />
                  </a>

                  <a
                    target='_blank'
                    rel='noreferrer'
                    aria-label='github'
                    title='Github'
                    href='https://github.com/eddypjr'
                  >
                    <FontAwesomeIcon icon={faGithub} size='sm' />
                  </a>

                  <a
                    target='_blank'
                    rel='noreferrer'
                    aria-label='resume'
                    title='Resume'
                    href='https://eddypjr.github.io/resume/'
                  >
                    <img src={resumeIcon} alt='resume-icon' />
                  </a>
                </span>
              </div>
              <div className='hero-image' aria-label='Personal photo' />
            </div>

            <div className='hero-bottom'>
              <p>Tech Stack</p>
              <div>
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
      <div className='waves' />
    </>
  );
}

export default Hero;
