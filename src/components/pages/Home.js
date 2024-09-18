import { useState } from "react";
import Header from "../layout/Header.js";
import Photos from '../sections/Photos.js';
import Hero from "../sections/Hero.js";
import Projects from "../sections/Projects.js";
import Skills from "../sections/Skills.js";
import Footer from "../layout/Footer.js";
import whiteCircles from "../../assets/img/background/circle-scatter-haikei (1).svg"

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <div id="home"></div>
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main>
                <div className="splash-wrapper h-dvh max-h-[750px]">
                    <div className={darkMode ? "" : "hidden"}>
                        <div className="site-bg-gradient" />
                        <div className="absolute -top-16 -left-32 w-[20vw] h-[20vw] content-[''] rounded-full bg-gradient-to-br from-accent from-20% to-primary" style={{filter: 'blur(300px)'}} />
                        <div className="absolute -right-8 -bottom-16 w-72 h-72 content-[''] rounded-full bg-gradient-to-br from-secondary from-20% to-accent" style={{filter: 'blur(250px)'}}/>
                    </div>
                    <Hero darkMode={darkMode}/>
                </div>
                {darkMode ? (
                    <>
                        <Projects />
                        <Skills />
                    </>
                ) : (
                    <Photos />
                )}
            </main>
            <Footer />
        </>
    );
}

export default Home;