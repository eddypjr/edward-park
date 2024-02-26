import ExperienceItem from '../experience-item/experience-item';
import './experience.scss';

function Experience() {
  const experienceItems = [
    {
      dates: 'August 2023 - January 2024',
      desc: 'Developed a bespoke server-side rendered storefront for an online clothing brand, leveraging the power of Shopify, Hydrogen, and Remix, with deployment via Oxygen.',
      position: 'Software Engineer',
      company: '@MadMadWorld',

      open: true,
      techStack: ['Shopify', 'Hydrogen', 'React', 'Remix', 'Oxygen', 'Tailwind'],
    },
    {
      dates: 'July 2021 - April 2022',
      desc: 'At Bitovi, I executed frontend client work for a major fast food corporation. Worked on the development of an internal tool that validated new features, endpoints, and quality enhancement discoveries.',
      position: 'Junior React Developer',
      company: '@Bitovi',

      open: true,
      techStack: ['Docker', 'GraphQL', 'TypeScript', 'Tailwind', 'React', 'Jira', 'Figma'],
    },
    {
      dates: 'March 2021 - July 2021',
      desc: 'ReacType is a visual prototyping tool for developers employing React component architecture alongside the comprehensive type-checking framework of TypeScript.',
      position: 'Software Engineer',
      company: '@ReacType',

      open: true,
      techStack: ['React', 'TypeScript', 'GraphQL', 'Material UI', 'MongoDB', 'Webpack'],
    },
  ];

  return (
    <section className='experience' id='experience'>
      <div className='exp-container'>
        <h2>Experience</h2>
        <div className='exp-item-container'>
          {experienceItems.map((expItem) => {
            const { dates, desc, position, company, open, techStack } = expItem;
            return (
              <ExperienceItem
                dates={dates}
                desc={desc}
                position={position}
                company={company}
                open={open}
                techStack={techStack}
                key={crypto.randomUUID()}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
