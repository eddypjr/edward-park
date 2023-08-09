import ProjectCard from '../project-card/project-card';
import SunCo from '../../assets/images/SunCo.png';
import '../../styles/components/projects.scss';

export default function Projects() {
  return (
    <section className='projects' id='projects'>
      <div className='container'>
        <div className='content'>
          <h3>Portfolio</h3>
          <h4>A showcase of my work</h4>
          <div className='projects-grid'>
            <ProjectCard
              title='Sun Co.'
              image={SunCo}
              description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              technologies={['React', 'TypeScript', 'Styled Components']}
              code='https://github.com/eddypjr/dot-technical-assessment'
              demo='https://fabulous-travesseiro-5c7afa.netlify.app/'
            />
            <ProjectCard
              title='Crown Clothing V2'
              image={SunCo}
              description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              technologies={['React', 'TypeScript', 'Styled Components']}
              code='https://github.com/eddypjr/dot-technical-assessment'
              demo='https://fabulous-travesseiro-5c7afa.netlify.app/'
            />
            <ProjectCard
              title='Sun Co.'
              image={SunCo}
              description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              technologies={['React', 'TypeScript', 'Styled Components']}
              code='https://github.com/eddypjr/dot-technical-assessment'
              demo='https://fabulous-travesseiro-5c7afa.netlify.app/'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
