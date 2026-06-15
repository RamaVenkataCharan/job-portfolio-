import { useTheme } from './hooks/useTheme';
import MouseGlow from './components/ui/MouseGlow';
import Navbar from './components/layout/Navbar';
import ScrollProgress from './components/layout/ScrollProgress';
import LoadingScreen from './components/layout/LoadingScreen';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import GitHubStats from './components/sections/GitHubStats';
import Achievements from './components/sections/Achievements';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';

function App() {
  const { isDark, toggle } = useTheme();

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <MouseGlow />

      {/* Skip to content */}
      <a href="#about" className="skip-to-content">
        Skip to main content
      </a>

      <Navbar isDark={isDark} toggleTheme={toggle} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <GitHubStats />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
