import ProjectCard from '../project-card/project-card';
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
              description='Discover Sun Co., a serverless ecommerce web application that combines an intuitive design with a seamless user experience, utilizing the Stripe API ensuring a clutter-free shopping experience.
              '
              technologies={['React', 'TypeScript', 'Styled Components', 'Firebase', 'Vite', 'Netlify']}
              code='https://github.com/eddypjr/dot-technical-assessment'
              demo='https://storied-centaur-cce0fd.netlify.app/'
              reversed={false}
              scrollSpeed='-10%'
            />
            <ProjectCard
              title='Colosseum Combat'
              image='https://i.ibb.co/cNH1YCc/home.webp'
              description='Explore Colosseum Combat, a full stack martial arts gym that utilizes the new Server Components of Next 13. Leverages Server Side Rendering for lightning-fast load times with excellent SEO optimization for high discoverability.'
              technologies={['NextJS', 'MongoDB', 'TypeScript', 'Tailwind', 'Vercel']}
              code='https://github.com/eddypjr/colosseum-combat'
              demo='https://colosseum-combat.vercel.app/'
              reversed
              scrollSpeed='-75%'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
