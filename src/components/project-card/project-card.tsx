import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import './project-card.scss';

type Skill = {
  item: string;
  title: string;
};

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  code: string;
  demo: string;
};

export default function ProjectCard({ title, image, description, technologies, code, demo }: ProjectCardProps) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [scroll, setScroll] = useState<boolean>(false);
  const skillIconsRef = useRef([
    {
      item: '(https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
      title: 'HTML5',
    },
    {
      item: '(https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
      title: 'CSS3',
    },
    {
      item: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
      title: 'TypeScript',
    },
    {
      item: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      title: 'React',
    },
    {
      item: 'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white',
      title: 'Scss',
    },
    {
      item: 'https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white',
      title: 'Styled Components',
    },
    {
      item: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
      title: 'Node.js',
    },
    {
      item: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
      title: 'Tailwind',
    },
    {
      item: 'https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white',
      title: 'Jest',
    },
    {
      item: 'https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white',
      title: 'Firebase',
    },
  ]);

  useEffect(() => {
    const filterSkills = (iconsArray: Skill[], skillsArray: string[]) => {
      const filteredIcons = iconsArray.filter((skillIcon: Skill) => skillsArray.includes(skillIcon.title));
      return filteredIcons;
    };

    const skillsArray = filterSkills(skillIconsRef.current, technologies);
    setSkills(skillsArray);
  }, [technologies]);

  return (
    <div className='pro-card pro-card__1'>
      <div className='pro-card__image'>
        <a target='_blank' href={demo} rel='noreferrer'>
          <img
            src={image}
            style={{
              transform: scroll ? `translateY(-20%)` : 'translateY(0%)',
              transition: 'transform 5s ease-in-out',
            }}
            onMouseEnter={() => setScroll(true)}
            onMouseLeave={() => setScroll(false)}
            alt='website'
          />
        </a>
      </div>
      <div className='pro-card__text'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='stack'>
          {skills.map((skill) => (
            <img src={skill.item} key={crypto.randomUUID()} alt={`${skill.item} icon`} />
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
