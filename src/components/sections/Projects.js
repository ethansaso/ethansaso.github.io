import TaxoKeys from "../../assets/img/projects/taxogif.gif"
import WebRecon2 from "../../assets/img/projects/wrgif.gif"
import Volleyball from "../../assets/img/projects/volleygif.gif"
import Reveal from "../util/Reveal"

const Projects = () => {
    return (
        <div id="projects" className="container flex flex-col max-w-7xl mx-auto items-center justify-center">
            <h1 className="text-primary text-3xl text-center lg:text-left mb-16 w-full font-semibold">Projects</h1>
            <div className="project-section grid lg:grid-cols-2 gap-8 max-w-6xl">
                <Reveal width='w-full' from='bottom'>
                    <div className="glass-low rounded-2xl flex flex-col lg:flex-col items-center flex-grow group overflow-hidden">
                        <div className="absolute w-[200%] h-[200%] -top-1/2 left-0 group-hover:scale-110 group-hover:opacity-30 transition duration-300 bg-gradient-c from-accent to-transparent to-[70%] opacity-20 -z-20"/>
                        <div className="h-full p-8 flex-grow flex flex-col w-full">
                            <div className="w-full border-b border-neutral mb-6">
                                <h1 className="text-4xl font-semibold text-secondary">TaxoKeys</h1>
                                <h2 className="text-md text-accent">MERN stack, Python, Digital Ocean</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="text-base mb-4">Using dynamic algorithms, TaxoKeys generates elegant, flowchart-style guides to identifying wild organisms in real time, resolving complex relationships between species with minimal error.</p>
                                <p className="text-base">TaxoKeys was created to combat a lack of educational resources for a wide variety of subfields in naturalism. It aims to make citizen science accessible to all audiences.</p>
                            </div>
                            <div class="layered-button-frame">
                                <button href="https://taxokeys.org" className="layered-button-a">
                                    <div class="layered-button">Visit Site</div>
                                </button>
                            </div>
                        </div>
                        <div className="lg:h-full w-full flex items-center">
                            <img className="w-full aspect-[4/3] h-full object-cover rounded-b-2xl opacity-50" src={TaxoKeys} alt="TaxoKeys" loading="lazy"/>
                        </div>
                    </div>
                </Reveal>
                <Reveal width='md:w-[45%] lg:w-full flex-grow' from='bottom'>
                    <div className="glass-low rounded-2xl flex flex-col lg:flex-col items-center flex-grow h-full group">
                        <div className="absolute w-[200%] h-[200%] -top-1/2 left-0 group-hover:scale-110 group-hover:opacity-30 transition duration-300 bg-gradient-c from-accent to-transparent to-[70%] opacity-20 -z-20"/>
                        <div className="h-full p-8 flex-grow flex flex-col w-full">
                            <div className="w-full border-b border-neutral mb-6">
                                <h1 className="text-4xl font-semibold text-secondary">Cal Men's Volleyball</h1>
                                <h2 className="text-md text-accent">React.js, Github Pages</h2>
                            </div>
                            <div className="flex-grow">
                                <p className="text-base mb-4">Official website for UC Berkeley's Men's Club Volleyball Team, Division I competitors and six-time national club champions.</p>
                                <p className="text-base">Why site was made, accessible design for team w/ collaboration, ?.</p>
                            </div>
                            <div class="layered-button-frame">
                                <button href="https://ethansaso.github.io/cal-mens-volleyball" className="layered-button-a">
                                    <div class="layered-button">Visit Site</div>
                                </button>
                            </div>
                        </div>
                        <div className="lg:h-full w-full flex items-center">
                            <img className="w-full aspect-[4/3] h-full object-cover rounded-b-2xl opacity-50 saturate-0 group-hover:scale-110 group-hover:saturate-100 transition duration-700" src={Volleyball} alt="Cal Men's Volleyball"/>
                        </div>
                    </div>
                </Reveal>
                <Reveal width='w-full' from='bottom'>
                    <div className="glass-low rounded-2xl flex flex-col items-center flex-grow group overflow-hidden">
                        <div className="absolute w-[200%] h-[200%] -top-1/2 left-0 group-hover:scale-110 group-hover:opacity-30 transition duration-300 bg-gradient-c from-accent to-transparent to-[70%] opacity-20 -z-20"/>
                        <div className="h-full p-8 flex-grow flex flex-col w-full">
                            <div className="w-full border-b border-neutral mb-2">
                                <h1 className="text-4xl font-semibold text-secondary">WebRecon2</h1>
                                <h2 className="text-md text-accent">Golang, Amass, DNSGen, ...</h2>
                            </div>
                            <p className="text-base flex-grow">WebRecon2 leverages a variety of best-in-class cybersecurity tools
                                to automate a workflow for performing subdomain enumeration.</p>
                            <div class="layered-button-frame">
                                <button href="https://github.com/sammooredev/WebRecon2" className="layered-button-a">
                                    <div class="layered-button">Visit Site</div>
                                </button>
                            </div>
                        </div>
                        <div className="md:h-full w-full flex items-center"> 
                            <img className="w-full aspect-[4/3] h-full object-cover rounded-b-2xl opacity-50" src={WebRecon2} alt="Web Recon 2"/>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}

export default Projects;