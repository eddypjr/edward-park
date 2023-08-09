import NavBar from '../../components/layout/nav-bar/nav-bar';
import Banner from '../../components/banner/banner';
import AboutMe from '../../components/about-me/about-me';
import Projects from '../../components/projects/projects';
import Contact from '../../components/contact/contact';
import Footer from '../../components/layout/footer/footer';

function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
