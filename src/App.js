import { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import StarCanvas from "./components/canvas/Stars";
import { AnimatePresence } from "framer-motion";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import ProjectDetails from "./components/Dialog/ProjectDetails";
import { useState } from "react";
import ScrollButton from "./components/TopScrollButton";

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <div
          className="w-full relative overflow-x-hidden"
          style={{ backgroundColor: darkTheme.bg }}
        >
          <StarCanvas />
          <AnimatePresence>
            <div>
              <Hero />

              <div
                className="w-full pb-24"
                style={{
                  background: `linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
                              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)`,
                  clipPath: `polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)`,
                }}
              >
                <Skills />
                <Experience />
              </div>

              <Projects openModal={openModal} setOpenModal={setOpenModal} />

              <div
                className="w-full pb-24"
                style={{
                  background: `linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
                              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)`,
                  clipPath: `polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%)`,
                }}
              >
                <Education />
              </div>

              <Footer />
              <ScrollButton />

              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
