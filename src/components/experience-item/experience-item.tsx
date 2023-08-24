import { useState } from 'react';
import './experience-item.scss';

type ExperienceItemProps = {
  dates: string;
  desc: string;
  position: string;
  company: string;

  open: boolean;
  techStack: string[];
};

function ExperienceItem({ dates, desc, position, company, open, techStack }: ExperienceItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  return (
    <div id={isOpen ? 'open' : ''} className='item-container'>
      <div className='first-row' onClick={() => setIsOpen((prev) => !prev)} role='presentation'>
        <h4 className='position'>{position}</h4>
        <h5 className='company'>{company}</h5>
      </div>
      <div className='second-row'>
        <p className='dates'>{dates}</p>
        <p className='desc'>{desc}</p>
        <ul className='tech'>
          {techStack.map((tech) => (
            <li key={crypto.randomUUID()}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;
