import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import resumeIcon from '../../../assets/resume.png';
import './footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-content'>
          <h1>Edward Park 2023.</h1>
          <div className='footer-content__socials'>
            <a
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
              href='https://www.linkedin.com/in/edwardparkwork/'
            >
              <FontAwesomeIcon icon={faLinkedin} size='2xl' />
            </a>

            <a target='_blank' rel='noreferrer' aria-label='Github' href='https://github.com/eddypjr'>
              <FontAwesomeIcon icon={faGithub} size='2xl' />
            </a>

            <a target='_blank' rel='noreferrer' aria-label='Resume' href='https://eddypjr.github.io/resume/'>
              <img src={resumeIcon} alt='resume-icon' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
