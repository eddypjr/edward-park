import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './project-card.scss';

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  code: string;
  demo: string;
};

export default function ProjectCard({ title, image, description, technologies, code, demo }: ProjectCardProps) {
  return (
    <div className='project-card'>
      <div className='project-image'>
        <a target='_blank' href={demo} rel='noreferrer'>
          <img src={image} alt='website' />
        </a>
      </div>
      <div className='project-text'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='stack'>
          {technologies.map((technology) => (
            // LOGOS
            <p key={crypto.randomUUID()}>{technology}</p>
          ))}
        </div>
        <div className='links'>
          <a target='_blank' title='Code Repo' href={code} rel='noreferrer'>
            Code
            <FontAwesomeIcon icon={faGithub} size='sm' />
          </a>
          <a target='_blank' title='Live Demo' href={demo} rel='noreferrer'>
            Demo
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm' />
          </a>
        </div>
      </div>
    </div>
  );
}
