import { useState } from "react";
import Header from "../layout/Header";
import Photos from '../sections/Photos';
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Footer from "../layout/Footer";
import About from "../sections/About";
import BottomCTA from "../sections/BottomCTA";

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <div id="home"></div>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className={"overflow-hidden" + (darkMode ? " bg-base-200" : " bg-base-100")}>
                <div className="splash-wrapper h-dvh max-h-[750px] pt-20 lg:pt-0">
                    {/*
                    <div className={darkMode ? "" : "hidden"}>
                        <div className="site-bg-gradient" />
                        <div className="absolute -top-16 -left-32 w-[20vw] h-[20vw] content-[''] rounded-full bg-gradient-to-br from-accent from-20% to-primary" style={{filter: 'blur(300px)'}} />
                        <div className="absolute -right-8 -bottom-16 w-72 h-72 content-[''] rounded-full bg-secondary" style={{filter: 'blur(250px)'}}/>
                    </div>
                    */}
                    <Hero darkMode={darkMode}/>
                </div>
                {darkMode ? (
                    <>
                        <About />
                        <Projects />
                        <Skills />
                        <BottomCTA />
                    </>
                ) : (
                    <Photos />
                )}
            </main>
            <Footer darkMode={darkMode}/>
        </>
    );
}

export default Home;