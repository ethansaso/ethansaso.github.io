import TaxoKeys from "../../assets/img/projects/taxogif.gif"
import WebRecon2 from "../../assets/img/projects/project_webrecon2.png"
import Volleyball from "../../assets/img/projects/volleygif.gif"

const Projects = () => {
    return (
        <div id="projects" className="container flex flex-col max-w-7xl mx-auto items-center justify-center mt-16 px-12 lg:px-16 mb:24 lg:mb-32">
            <h1 className="text-primary text-5xl text-left mb-8 lg:mb-12 w-full border-b border-neutral font-semibold">Projects</h1>
            <div className="project-section flex flex-row gap-8 md:gap-16 lg:gap-8 flex-wrap">
                <div className="bg-base-300 min-h-full border border-neutral rounded-2xl flex flex-col lg:flex-row justify-between items-center w-full md:w-[45%] lg:w-full flex-grow">
                    <img className="w-full lg:w-[40%] aspect-[4/3] lg:h-full object-cover rounded-t-2xl lg:rounded-bl-2xl lg:rounded-tr-none" src={TaxoKeys} alt="TaxoKeys"/>
                    <div className="p-8 flex-grow lg:p-12 flex flex-col lg:w-[60%] w-full">
                        <div className="w-full border-b border-neutral mb-1">
                            <h1 className="text-4xl font-semibold text-secondary">TaxoKeys</h1>
                            <h2 className="text-lg text-warning">MERN stack, Python, Digital Ocean</h2>
                        </div>
                        <p className="text-lg flex-grow">Using dynamic algorithms, TaxoKeys generates elegant, flowchart-style guides to identifying wild organisms in real time, resolving complex relationships between species with minimal error.</p>
                        <a href="https://taxokeys.org" className="w-full text-center rounded-2xl border border-neutral mt-6 md:mt-2 p-3 hover:border-base-content bg-base-100 transition-all">Visit Site</a>
                    </div>
                </div>
                <div className="bg-base-300 min-h-full border border-neutral rounded-2xl flex flex-col lg:flex-row-reverse justify-between items-center w-full md:w-[45%] lg:w-full flex-grow">
                    <img className="w-full lg:w-[40%] aspect-[4/3] lg:h-full object-cover rounded-t-2xl lg:rounded-br-2xl lg:rounded-tl-none" src={WebRecon2} alt="Web Recon 2"/>
                    <div className="p-8 flex-grow lg:p-12 flex flex-col lg:w-[60%] w-full">
                        <div className="w-full border-b border-neutral mb-1">
                            <h1 className="text-4xl font-semibold text-secondary">WebRecon2</h1>
                            <h2 className="text-lg text-warning">Golang, Amass, DNSGen, ...</h2>
                        </div>
                        <p className="text-lg flex-grow">WebRecon2 leverages a variety of best-in-class cybersecurity tools
                            to automate a workflow for performing subdomain enumeration.</p>
                        <a href="https://github.com/sammooredev/WebRecon2" className="w-full text-center rounded-2xl border border-neutral mt-6 md:mt-2 p-3 hover:border-base-content bg-base-100 transition-all">Visit Site</a>
                    </div>
                </div>
                <div className="bg-base-300 min-h-full border border-neutral rounded-2xl flex flex-col lg:flex-row justify-between items-center w-full md:w-[45%] lg:w-full flex-grow">
                    <img className="w-full lg:w-[40%] aspect-[4/3] lg:h-full object-cover rounded-t-2xl lg:rounded-bl-2xl lg:rounded-tr-none" src={Volleyball} alt="Cal Men's Volleyball"/>
                    <div className="p-8 flex-grow lg:p-12 flex flex-col lg:w-[60%] w-full">
                        <div className="w-full border-b border-neutral mb-1">
                                <h1 className="text-4xl font-semibold text-secondary">Cal Men's Volleyball <span className="text-error">(WIP)</span></h1>
                                <h2 className="text-lg text-warning">React.js, Github Pages</h2>
                        </div>
                        <p className="text-lg flex-grow">Official website for UC Berkeley's Division-I Men's Volleyball Team.</p>
                        <a href="https://ethansaso.github.io/cal-mens-volleyball" className="w-full text-center rounded-2xl border border-neutral mt-6 md:mt-2 p-3 hover:border-base-content bg-base-100 transition-all">Visit Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;