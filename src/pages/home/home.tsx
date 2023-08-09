import NavBar from '../../components/layout/nav-bar/nav-bar';
import Banner from '../../components/banner/banner';
import AboutMe from '../../components/about-me/about-me';
import Projects from '../../components/projects/projects';

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <AboutMe />
      <Projects />
    </>
  );
}

export default Home;
