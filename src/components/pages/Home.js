import { useState } from "react";
import Header from "../layout/Header.js";
import Photos from '../sections/Photos.js';
import Hero from "../sections/Hero.js";
import HeroFooter from "../layout/HeroFooter.js";

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className="w-full text-base-content">
            <div id="home"></div>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex flex-col min-h-[calc(100vh-67px)] mx-auto items-center justify-center">
                <Hero darkMode={darkMode}/>
            <HeroFooter />
            </div>
            {darkMode ? (
                <>
                    <div id="projects" className="flex flex-col min-h-screen mx-auto items-center justify-center">
                        <div className="project-section mb-96">
                            <h1 className="text-5xl mb-2">Projects</h1>
                            <h1 className="project">TaxoKeys</h1>
                            <h1 className="project">iNaturalist Site</h1>
                            <h1 className="project">Cal Volleyball Site</h1>
                        </div>
                    </div>
                    <div id="skills" className="flex flex-col min-h-screen mx-auto items-center justify-center">
                        <h1>Skills</h1>
                        <h1>Portion of site currently unimplemented;</h1>
                    </div>
                    <div>
                        <div className="tech-stack">

                        </div>
                    </div>
                </>
            ) : (
                <div id="photos" className="w-full p-20 flex justify-center items-center">
                    <div className="w-full max-w-7xl">
                        <Photos />
                    </div>
                </div>
            )}
            <div className="footer w-full">
                <div className="footer-contact">
                    <h1>Contact</h1>
                    <p>?</p>
                </div>
                <div className="footer-follow">
                    <h1></h1>
                </div>
            </div>
            <div className="footer w-full border-t border-neutral-content px-3 py-2">
                <div className="flex justify-between w-full">
                    <h1 className="text-lg">Ethan Saso ©2024</h1>
                    <h1 className="text-lg">Berkeley, CA</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;