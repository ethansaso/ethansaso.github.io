import { useState } from "react";
import Header from "../layout/Header.js";
import Photos from '../sections/Photos.js';
import Hero from "../sections/Hero.js";
import HeroFooter from "../layout/HeroFooter.js";
import Projects from "../sections/Projects.js";
import Skills from "../sections/Skills.js";
import Footer from "../layout/Footer.js";

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <div id="home"></div>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main>
                <div className="flex flex-col h-[calc(100dvh-112px)] md:h-[calc(100dvh-130px)] lg:h-[calc(100dvh-134px)] mx-auto items-center justify-center">
                    <Hero darkMode={darkMode}/>
                </div>
                <HeroFooter />
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