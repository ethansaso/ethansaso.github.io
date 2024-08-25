import TaxoKeys from "../../assets/img/projects/taxokeys-screenshot.png"
import WebRecon2 from "../../assets/img/projects/project_webrecon2.png"
import Volleyball from "../../assets/img/projects/volleyball-screenshot.png"

const Projects = () => {
    return (
        <div id="projects" className="container flex flex-col max-w-7xl mx-auto items-center justify-center mt-16 px-12 lg:px-16">
            <h1 className="text-primary text-5xl text-left mb-8 lg:mb-12 w-full border-b border-neutral font-semibold">Projects</h1>
            <div className="project-section">
                <div className="card border border-neutral bg-base-200 flex flex-col xl:flex-row justify-between mb-12">
                    <img className="h-auto rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl border-b border-neutral xl:h-80 w-auto object-contain" src={TaxoKeys} alt="TaxoKeys"/>
                    <div className="w-full px-8 p-4 flex flex-col">
                        <div className="w-full border-b border-neutral mb-1">
                            <h1 className="text-4xl font-semibold text-secondary">TaxoKeys</h1>
                            <h2 className="text-lg text-warning">MERN stack, Python, Digital Ocean</h2>
                        </div>
                        <p className="text-lg">Using dynamic algorithms, TaxoKeys generates elegant, flowchart-style guides to identification in real time,
                        resolving complex relationships between species with minimal error.</p>
                        <a href="https://taxokeys.org" className="w-full text-center rounded-2xl border border-neutral mt-5 xl:mt-auto p-3 hover:border-base-content bg-base-100 transition-all">Visit Site</a>
                    </div>
                </div>
                <div className="card border border-neutral bg-base-200 flex flex-col xl:flex-row-reverse justify-between mb-12">
                    <img className="h-auto rounded-t-2xl lg:rounded-tl-none lg:rounded-r-2xl border-b border-neutral xl:h-80 w-auto object-contain" src={WebRecon2} alt="Web Recon 2"/>
                    <div className="w-full px-8 p-4 flex flex-col">
                        <div className="w-full border-b border-neutral mb-1">
                            <h1 className="text-4xl font-semibold text-secondary">WebRecon2</h1>
                            <h2 className="text-lg text-warning">Golang, Amass, DNSGen, ...</h2>
                        </div>
                        <p className="text-lg">WebRecon2 leverages a variety of best-in-class cybersecurity tools
                            to automate a workflow for performing subdomain enumeration.</p>
                        <a href="https://github.com/sammooredev/WebRecon2" className="w-full text-center rounded-2xl border border-neutral mt-5 xl:mt-auto p-3 hover:border-base-content bg-base-100 transition-all">Visit Site</a>
                    </div>
                </div>
                <div className="card border border-neutral bg-base-200 flex flex-col xl:flex-row justify-between mb-12">
                    <img className="h-auto rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl border-b border-neutral xl:h-80 w-auto object-contain" src={Volleyball} alt="Cal Men's Volleyball"/>
                    <div className="w-full px-8 p-4 flex flex-col">
                        <div className="w-full border-b border-neutral mb-1">
                            <div>
                                <h1 className="text-4xl font-semibold text-secondary">Cal Men's Volleyball <span className="text-error">(WIP)</span></h1>
                            </div>
                            <h2 className="text-lg text-warning">React.js, Github Pages</h2>
                        </div>
                        <p className="text-lg">Official website for UC Berkeley's Division-I Men's Volleyball Team.</p>
                        <a href="https://ethansaso.github.io/cal-mens-volleyball" className="w-full text-center rounded-2xl border border-neutral mt-5 xl:mt-auto p-3 hover:border-base-content bg-base-100 transition-all">Visit Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;