import ProjectCard from '../project-card/project-card';
import SunCo from '../../assets/images/SunCo.png';
import './portfolio.scss';

export default function Portfolio() {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='portfolio-container'>
        <div className='portfolio-content'>
          <h2>Portfolio</h2>
          <div className='portfolio-grid'>
            <ProjectCard
              title='Sun Co.'
              image='https://i.ibb.co/sbPxFhn/home-Large.webp'
              description='Discover Sun Co., a serverless ecommerce web application that combines an intuitive design with a seamless user experience, utilizing the Stripe API enssuring a clutter-free shopping experience.'
              technologies={['React', 'TypeScript', 'Styled Components', 'Firebase']}
              code='https://github.com/eddypjr/dot-technical-assessment'
              demo='https://storied-centaur-cce0fd.netlify.app/'
            />
            <ProjectCard
              title='Crown Clothing V2'
              image={SunCo}
              description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              technologies={['TypeScript', 'Node.js', 'Scss']}
              code='https://github.com/eddypjr/dot-technical-assessment'
              demo='https://fabulous-travesseiro-5c7afa.netlify.app/'
            />
            <ProjectCard
              title='Sun Co.'
              image={SunCo}
              description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              technologies={['React', 'Tailwind', 'Jest']}
              code='https://github.com/eddypjr/dot-technical-assessment'
              demo='https://fabulous-travesseiro-5c7afa.netlify.app/'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
