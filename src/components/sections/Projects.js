import TaxoKeys from "../../assets/img/projects/taxokeys-screenshot.png"
import WebRecon2 from "../../assets/img/projects/project_webrecon2.png"

const Projects = () => {
    return (
        <div id="projects" className="container flex flex-col max-w-7xl mx-auto items-center justify-center mt-16 px-16">
            <h1 className="text-primary text-5xl text-left mb-16 w-full border-b border-neutral font-semibold">Projects</h1>
            <div className="project-section mb-24">
                <div className="card border border-neutral flex flex-col lg:flex-row justify-between mb-12">
                    <img className="h-auto rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl border-b border-neutral lg:h-80 w-auto object-contain" src={TaxoKeys} alt="TaxoKeys"/>
                    <div className="w-full px-8 p-4">
                        <div className="w-full border-b border-neutral mb-1">
                            <h1 className="text-4xl font-semibold text-secondary">TaxoKeys</h1>
                            <h2 className="text-lg text-neutral-content">MERN stack, Python, Digital Ocean</h2>
                        </div>
                        <p className="text-lg">Using dynamic algorithms, TaxoKeys generates elegant, flowchart-style guides to identification in real time,
                        resolving complex relationships between species with minimal error.</p>
                    </div>
                </div>
                <div className="card border border-neutral flex flex-col lg:flex-row-reverse justify-between mb-12">
                    <img className="h-auto rounded-t-2xl lg:rounded-t-none lg:rounded-r-2xl border-b border-neutral lg:h-80 w-auto object-contain" src={WebRecon2} alt="Web Recon 2"/>
                    <div className="w-full px-8 p-4">
                        <div className="w-full border-b border-neutral mb-1">
                            <h1 className="text-4xl font-semibold text-secondary">WebRecon2</h1>
                            <h2 className="text-lg text-neutral-content">Golang, Amass, DNSGen, ...</h2>
                        </div>
                        <p className="text-lg">WebRecon2 utilizes the best tools available, each great at their own job, and combines them
                        into a single script to automate a workflow that would typically be followed manually when performing subdomain enumeration.</p>
                    </div>
                </div>
                <div className="card border border-neutral flex flex-col lg:flex-row justify-between mb-12">
                    <img className="h-auto rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl border-b border-neutral lg:h-80 w-auto object-contain"/>
                    <div className="w-full px-8 p-4">
                        <div className="w-full border-b border-neutral mb-1">
                            <h1 className="text-4xl font-semibold text-secondary">Cal Men's Volleyball</h1>
                            <h2 className="text-lg text-neutral-content">React.js, Github Pages</h2>
                        </div>
                        <p className="text-lg">Official website for UC Berkeley's Division-I Men's Volleyball Team.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;