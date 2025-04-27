import { RefObject, useEffect, useRef, useState } from "react";
import Header from "../layout/Header";
import Photos from '../sections/PhotographyMosaic';
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Footer from "../layout/Footer";
import About from "../sections/About";
import BottomCTA from "../sections/BottomCTA";
import PhotoScroller from "../sections/PhotoScroller";

const Home = ({scrollRef}: {scrollRef: RefObject<HTMLDivElement | null>}) => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <div id="home"></div>
            <Header pageRef={scrollRef} darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className={(darkMode ? "bg-base-200" : "bg-base-100")}>
                <div className="splash-wrapper h-dvh max-h-[730px] pt-20 lg:pt-10">
                    <Hero darkMode={darkMode}/>
                </div>
                {darkMode ? (
                    <>
                        <PhotoScroller />
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