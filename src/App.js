import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Projects from "./views/projects";
import { useContext, useEffect } from "react";
import { contextSideBar } from "./context/contextSideBar";
import SideBar from "./components/sidebar";
import AboutMe from "./views/aboutMe";
import TechStack from "./views/techStack";
import Contact from "./views/contact";
import Hero from "./views/hero";
import { contextDarkMode } from "./context/contextDarkMode";
import Aos from "aos";
import "aos/dist/aos.css";
import "devicon/devicon.min.css";
import "./App.css";

function App() {
  const { isSideBar } = useContext(contextSideBar);
  const { itsDark } = useContext(contextDarkMode);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (itsDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [itsDark]);

  return (
    <>
      {isSideBar ? (
        <SideBar />
      ) : (
        <>
          <NavBar />

          <Hero />
          <AboutMe />
          <TechStack />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
