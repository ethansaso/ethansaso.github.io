import companiesHUMR from "../../assets/img/companies/humr.png"
import companiesBerkeley from "../../assets/img/companies/berkeley.png"

const About = () => (
    <section id="about" className="container flex lg:flex-row gap-8 mx-auto items-stretch justify-center px-8 2xl:px-32 mb-32">
        <div className="flex flex-col border border-neutral bg-base-100 rounded-2xl flex-1 p-8">
            <h1 className="text-2xl font-bold mb-7">
                About me
            </h1>
            <div className="text-md leading-relaxed font-medium text-neutral-content">
                <p className="mb-4">
                    Hi! I'm Ethan, a software engineer dedicated to building beautiful products with code.
                </p>
                <p className="mb-4">
                    Even since my early childhood, I've always been fascinated by how things work. I'd spend hours with Snap Circuits, snapping pieces together to light LEDs and spin tiny motors. Simultaneously, I was enamored with the complexity and diversity of the natural world, leading me to study organisms like fungi and amoebae in the field, and eventually at UC Berkeley.
                </p>
                <p className="mb-4">
                    Halfway through my degree, I began to explore programming through bioinformatics, and was instantly hooked. I began to explore everything from digital circuit design to large-scale web architectures, always eager to learn new concepts and tech. I ultimately settled on full-stack development, since it provided me the tools to build projects that solved real problems and brought my ideas to life.
                </p>
                <p className="mb-4">
                    When I'm not engineering new features, you can find me out in the hills and/or behind a camera lens. There's a button in the upper-right corner of this site if you'd like to check out my photography portfolio, the other way I share my creative vision with the world.
                </p>
            </div>
        </div>
        <div className="xl:w-4/12 flex flex-col border border-neutral bg-base-100 rounded-2xl p-8">
            <h1 className="text-2xl font-bold mb-7">
                Experience
            </h1>
            <ol className="flex flex-col gap-7">
                <li className="flex">
                    <div className="rounded-full overflow-hidden w-9 h-9 md:w-10 md:h-10 bg-white p-2 shrink-0">
                        <img alt="ASO Engineering Logo" src={companiesHUMR} />
                    </div>
                    <div className="font-medium ml-5 text-xs w-full">
                        <div className="flex justify-between gap-2 sm:gap-4">
                            <a href="https://www.aso-engineering.com/" className="rounded-full px-2 -my-0.5 -ml-2 py-0.5 hover:bg-base-100 text-sm">
                                ASO (HUMR)
                            </a>
                            <div className="font-normal text-neutral-content flex gap-2">
                                <time datetime="2024-10">October 2024</time>
                                – 
                                <span>Present</span>
                            </div>
                        </div>
                        <div className="mt-0.5 text-neutral-content">
                            Full-Stack Engineer
                        </div>
                    </div>
                </li>
                <li className="flex">
                    <div className="rounded-full overflow-hidden w-9 h-9 md:w-10 md:h-10 shrink-0">
                        <img alt="UC Berkeley Logo" src={companiesBerkeley} />
                    </div>
                    <div className="font-medium ml-5 text-xs w-full">
                        <div className="flex justify-between gap-2 sm:gap-4">
                            <a href="https://www.berkeley.edu/" className="rounded-full px-2 -my-0.5 -ml-2 py-0.5 hover:bg-base-100 text-sm">
                                UC Berkeley
                            </a>
                            <div className="font-normal text-neutral-content flex gap-2">
                                <time datetime="2022-08">August 2022</time>
                                –
                                <time datetime="2022-12">December 2022</time>
                            </div>
                        </div>
                        <div className="mt-0.5 text-neutral-content">
                            Academic Intern
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    </section>
)

export default About;