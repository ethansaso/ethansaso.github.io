import { useState } from "react";
import Header from "../layout/Header.js";
import Photos from '../sections/Photos.js';
import Hero from "../sections/Hero.js";
import HeroFooter from "../layout/HeroFooter.js";
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
                <div className="splash-wrapper h-dvh">
                    <div className={darkMode ? "" : "hidden"}>
                        <div className="site-bg-gradient" />
                        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] content-[''] rounded-full bg-gradient-to-br from-accent from-20% to-primary" />
                        <div className="absolute right-[40%] bottom-[15%] w-72 h-72 content-[''] rounded-full bg-gradient-to-br from-secondary from-20% to-accent" />
                    </div>
                    <Hero darkMode={darkMode}/>
                    <HeroFooter darkMode={darkMode}/>
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