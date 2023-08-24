import laptopImage from '../../assets/images/laptop.png';
import './about-me.scss';

function AboutMe() {
  return (
    <section className='about' id='about'>
      <div className='about-me-container'>
        <div className='about-me-content'>
          <div className='about-me-image'>
            <img src={laptopImage} alt='laptop' />
          </div>
          <div className='about-me-text'>
            <h2>About Me</h2>
            <h4>A Passionate Front-End Developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
