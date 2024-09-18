import TaxoKeys from "../../assets/img/projects/taxogif.gif"
import WebRecon2 from "../../assets/img/projects/wrgif.gif"
import Volleyball from "../../assets/img/projects/volleygif.gif"
import Reveal from "../util/Reveal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Projects = () => {
    return (
        <div id="projects" className="container flex flex-col mx-auto items-center justify-center px-8 2xl:px-32">
            <div className="mb-12 w-full">
                <h1 className="text-3xl text-left font-bold mb-4">Projects</h1>
                <div className="flex items-end flex-col md:flex-row">
                    <p className="text-lg text-neutral-content max-w-2xl">I'm passionate about building tools that address real-world challenges. I focus on users' needs and delivering experiences that exceed expectations.</p>
                    <a href="https://github.com/ethansaso" className="text-lg flex-grow text-left lg:text-right text-primary hover:underline hover:text-secondary font-semibold text-nowrap ml-4">Visit my GitHub<FontAwesomeIcon size="xs" icon="fa-solid fa-arrow-right" className="ml-2"/></a>
                </div>
            </div>
            <div className="project-section grid lg:grid-cols-2 gap-8 max-w-6xl">
                <Reveal width='w-full' from='bottom'>
                    <div className="project-card rounded-2xl flex flex-col lg:flex-col items-center flex-grow group overflow-hidden">
                        <div className="absolute w-[200%] h-[200%] -top-1/2 left-0 group-hover:scale-110 group-hover:opacity-30 transition duration-300 bg-gradient-c from-lime-500 to-transparent to-[70%] opacity-20 -z-20"/>
                        <div className="h-full p-8 flex-grow flex flex-col w-full">
                            <div className="w-full border-b border-neutral mb-6">
                                <h1 className="text-4xl font-bold">TaxoKeys</h1>
                                <h2 className="text-md text-accent">MERN stack, Python, Digital Ocean</h2>
                            </div>
                            <div className="flex-grow text-neutral-content">
                                <p className="text mb-4">Using classification algorithms, TaxoKeys generates elegant, flowchart-style guides to identifying wild organisms in real time, resolving complex relationships between species with minimal error.</p>
                                <p>TaxoKeys was created to combat a lack of educational resources for a wide variety of subfields in naturalism. It aims to make citizen science accessible to all audiences.</p>
                            </div>
                            <div className="layered-button-frame">
                                <button href="https://taxokeys.org" className="layered-button-a">
                                    <div className="layered-button">Visit Site</div>
                                </button>
                            </div>
                        </div>
                        <div className="lg:h-full w-full flex items-center">
                            <img className="img-fade-top w-full aspect-video h-full object-cover rounded-b-2xl opacity-100 brightness-75 group-hover:brightness-100 saturate-0 group-hover:scale-110 group-hover:saturate-100 transition duration-700" src={TaxoKeys} alt="TaxoKeys" loading="lazy"/>
                        </div>
                    </div>
                </Reveal>
                <Reveal width='w-full' from='bottom'>
                    <div className="project-card rounded-2xl flex flex-col lg:flex-col items-center flex-grow h-full group overflow-hidden">
                        <div className="absolute w-[180%] h-[180%] -top-1/2 -right-2/3 group-hover:scale-110 group-hover:opacity-40 transition duration-300 bg-gradient-c from-yellow-500 to-transparent to-[80%] opacity-20 -z-20"/>
                        <div className="h-full p-8 flex-grow flex flex-col w-full">
                            <div className="w-full border-b border-neutral mb-6">
                                <h1 className="text-4xl font-bold">Cal Men's Volleyball</h1>
                                <h2 className="text-md text-accent">React.js, Github Pages</h2>
                            </div>
                            <div className="flex-grow text-neutral-content">
                                <p className="mb-4">Official website for UC Berkeley's Men's Club Volleyball Team, Division I competitors and six-time national club champions.</p>
                                <p>Why site was made, accessible design for team w/ collaboration, ?.</p>
                            </div>
                            <div className="layered-button-frame">
                                <button href="https://ethansaso.github.io/cal-mens-volleyball">
                                    <div className="bg-base-content text-primary-content py-2 px-4 rounded-full border-neutral border text-sm">Visit Site<FontAwesomeIcon size="xs" icon="fa-solid fa-arrow-right" className="ml-2"/></div>
                                </button>
                                <button href="https://github.com/ethansaso/cal-mens-volleyball">
                                    <div className="glass-mid py-2 px-4 rounded-full border-neutral border text-sm">GitHub<FontAwesomeIcon size="xs" icon="fa-solid fa-arrow-right" className="ml-2"/></div>
                                </button>
                            </div>
                        </div>
                        <div className="lg:h-full w-full flex items-center">
                            <img className="img-fade-top w-full aspect-video h-full object-cover rounded-b-2xl opacity-100 brightness-75 group-hover:brightness-100 saturate-0 group-hover:scale-110 group-hover:saturate-100 transition duration-700" src={Volleyball} alt="Cal Men's Volleyball"/>
                        </div>
                    </div>
                </Reveal>
                <Reveal width='w-full' from='bottom'>
                    <div className="project-card rounded-2xl flex flex-col items-center flex-grow group overflow-hidden">
                        <div className="absolute w-[200%] h-[200%] -top-1/2 left-0 group-hover:scale-110 group-hover:opacity-30 transition duration-300 bg-gradient-c from-accent to-transparent to-[70%] opacity-20 -z-20"/>
                        <div className="h-full p-8 flex-grow flex flex-col w-full">
                            <div className="w-full border-b border-neutral mb-2">
                                <h1 className="text-4xl font-bold text-secondary">WebRecon2</h1>
                                <h2 className="text-md text-accent">Golang, Amass, DNSGen, ...</h2>
                            </div>
                            <div className="text-neutral-content">
                                <p className="flex-grow">WebRecon2 leverages a variety of best-in-class cybersecurity tools
                                    to automate a workflow for performing subdomain enumeration.</p>
                            </div>
                            <div className="layered-button-frame">
                                <button href="https://github.com/sammooredev/WebRecon2" className="layered-button-a">
                                    <div className="layered-button">Visit Site<FontAwesomeIcon size="xs" icon="fa-solid fa-arrow-right" className="ml-2"/></div>
                                </button>
                            </div>
                        </div>
                        <div className="md:h-full w-full flex items-center"> 
                            <img className="img-fade-top w-full aspect-video h-full object-cover rounded-b-2xl opacity-100 brightness-75 group-hover:brightness-100 saturate-0 group-hover:scale-110 group-hover:saturate-100 transition duration-700" src={WebRecon2} alt="Web Recon 2"/>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}

export default Projects;