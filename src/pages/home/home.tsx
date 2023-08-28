import NavBar from '../../components/layout/nav-bar/nav-bar';
import Hero from '../../components/hero/hero';
import Projects from '../../components/portfolio/portfolio';
import Experience from '../../components/experience/experience';
import Contact from '../../components/contact/contact';
import Footer from '../../components/layout/footer/footer';

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
