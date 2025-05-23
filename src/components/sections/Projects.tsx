import TaxoKeys from "../../assets/img/projects/taxogif.gif"
import WebRecon2 from "../../assets/img/projects/wrgif.gif"
import Volleyball from "../../assets/img/projects/volleygif.gif"
import TaxoKeysLogo from "../../assets/img/projects/taxokeysLogo.svg?react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCode, faVolleyball } from "@fortawesome/free-solid-svg-icons"

const Projects = () => {
    return (
        <section id="projects" className="container flex flex-col mx-auto items-center justify-center px-8 2xl:px-32 mt-32 md:mt-0">
            <div className="mb-12 w-full">
                <h1 className="text-3xl text-left font-bold mb-6">Projects</h1>
                <div className="text-md flex font-medium items-start md:items-end flex-col md:flex-row gap-4 leading-relaxed justify-between">
                    <p className="text-neutral-content max-w-2xl">I'm passionate about building tools that address real-world challenges. I focus on users' needs and delivering experiences that exceed expectations.</p>
                    <a href="https://github.com/ethansaso" className="text-right text-primary hover:underline hover:text-secondary font-semibold text-nowrap">Visit my GitHub<FontAwesomeIcon size="xs" icon={faArrowRight} className="ml-2"/></a>
                </div>
            </div>
            <div className="project-section grid lg:grid-cols-2 gap-8 max-w-6xl">
                <div className="project-card rounded-2xl flex flex-col lg:flex-col items-center flex-grow group overflow-hidden">
                    <TaxoKeysLogo
                        width={400}
                        height={400}
                        className="project-icon-bg"
                    />
                    <div className="absolute h-[100%] aspect-square -z-20 bottom-20 -right-1/2 group-hover:scale-150 group-hover:opacity-50 transition duration-300 bg-gradient-c from-[#12748a] to-transparent to-[70%] opacity-30"/>
                    <div className="h-full p-8 sm:py-12 flex-grow flex flex-col w-full">
                        <div className="w-full">
                            <h1 className="text-4xl font-bold">TaxoKeys</h1>
                            <h2 className="text-md text-accent">MERN stack, Python, Digital Ocean</h2>
                        </div>
                        <div className="text-sm flex-grow text-neutral-content my-8 leading-[1.8] font-semibold relative">
                            <p className="mb-6">TaxoKeys is a dynamic web application that streamlines the identification of wild organisms. Powered by classification algorithms, it generates interactive, flowchart-style guides to help users identify species on demand.</p>
                            <p>I created TaxoKeys to address the scarcity of freely available educational resources in organismal biology. I believe this knowledge should be accessible to all audiences, from researchers to citizen scientists.</p>
                        </div>
                        <div className="layered-button-frame mb-2">
                            <a href="https://taxokeys.org" className="font-medium flex items-center bg-base-content text-primary-content py-2 px-4 rounded-full ring ring-neutral text-sm hover:scale-105 hover:bg-neutral-content transition duration-300">
                                Visit Site<FontAwesomeIcon size="xs" icon={faArrowRight} className="ml-2"/>
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex items-center">
                        <img className="img-fade-top w-full aspect-video h-full object-cover rounded-b-2xl opacity-100 saturate-0 group-hover:scale-110 group-hover:saturate-100 transition duration-700" src={TaxoKeys} alt="TaxoKeys" loading="lazy"/>
                    </div>
                </div>
                <div className="project-card rounded-2xl flex flex-col lg:flex-col items-center flex-grow h-full group overflow-hidden">
                    <FontAwesomeIcon width={400} height={400} className="project-icon-bg" icon={faVolleyball}/>
                    <div className="absolute h-[100%] aspect-square -z-20 bottom-20 -right-1/2 group-hover:scale-150 group-hover:opacity-50 transition duration-300 bg-gradient-c from-[#b70] to-transparent to-[70%] opacity-30"/>
                    <div className="h-full p-8 sm:py-12 flex-grow flex flex-col w-full">
                        <div className="w-full">
                            <h1 className="text-4xl font-bold">Cal Men's Volleyball</h1>
                            <h2 className="text-md text-accent">React.js, Github Pages</h2>
                        </div>
                        <div className="text-sm flex-grow text-neutral-content my-8 leading-[1.8] font-semibold">
                            <p className="mb-4">Official website for UC Berkeley's Men's Club Volleyball Team, Division I competitors and six-time national club champions.</p>
                            <p>This site was the product of close collaboration with the team to ensure that updating and maintaining content could be performed regardless of technical experience.</p>
                        </div>
                        <div className="layered-button-frame mb-2">
                            <a href="https://ethansaso.github.io/cal-mens-volleyball" className="font-medium flex items-center bg-base-content text-primary-content py-2 px-4 rounded-full ring ring-neutral text-sm hover:scale-105 hover:bg-neutral-content transition duration-300">
                                Visit Site<FontAwesomeIcon size="xs" icon={faArrowRight} className="ml-2"/>
                            </a>
                            <a href="https://github.com/ethansaso/cal-mens-volleyball" className="font-medium flex items-center glass-mid py-2 px-4 rounded-full text-sm hover:scale-105 transition duration-300 shadow-black/20 shadow-lg">
                                GitHub<FontAwesomeIcon size="xs" icon={faArrowRight} className="ml-2"/>
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex items-center">
                        <img className="img-fade-top w-full aspect-video h-full object-cover rounded-b-2xl opacity-100 saturate-0 group-hover:scale-110 group-hover:saturate-100 transition duration-700" src={Volleyball} alt="Cal Men's Volleyball"/>
                    </div>
                </div>
                <div className="project-card rounded-2xl flex flex-col items-center flex-grow group overflow-hidden">
                    <FontAwesomeIcon width={400} height={400} className="project-icon-bg" icon={faCode}/>
                    <div className="absolute h-[100%] aspect-square -z-20 bottom-20 -right-1/2 group-hover:scale-150 group-hover:opacity-50 transition duration-300 bg-gradient-c from-[#76c] to-transparent to-[70%] opacity-30"/>
                    <div className="h-full p-8 sm:py-12 flex-grow flex flex-col w-full">
                        <div className="w-full">
                            <h1 className="text-4xl font-bold mt-2">WebRecon2</h1>
                            <h2 className="text-md text-accent">Golang, Bash</h2>
                        </div>
                        <div className="text-sm flex-grow text-neutral-content my-8 leading-[1.8] font-semibold">
                            <p className="flex-grow mb-6">WebRecon2 is a modular command-line reconnaissance tool that leverages a variety of best-in-class cybersecurity tools (Amass, Subfinder, dnsgen, PureDNS) to automate a workflow for efficiently enumerating subdomains.</p>
                            <p className="flex-grow">I co-developed WebRecon2 to augment my own suite of closed-source bug bounty tools which perform vulnerability scans for subdomain takeover attacks.</p>
                        </div>
                        <div className="layered-button-frame mb-2">
                            <div />
                            <a href="https://github.com/sammooredev/WebRecon2" className="font-medium flex items-center glass-mid py-2 px-4 rounded-full text-sm hover:scale-105 transition duration-300 shadow-black/20 shadow-lg">
                                GitHub<FontAwesomeIcon size="xs" icon={faArrowRight} className="ml-2"/>
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex items-center"> 
                        <img className="img-fade-top w-full aspect-video h-full object-cover rounded-b-2xl opacity-100 saturate-0 group-hover:scale-110 group-hover:saturate-100 transition duration-700" src={WebRecon2} alt="Web Recon 2"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;