import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroFooter = ({darkMode}) => {
    return (
        <div className={"w-full absolute bottom-0" + (darkMode ? " py-4 px-48" : "")}>
            <nav className={"flex items-center justify-between px-6 w-full" + (darkMode ? " glass-mid py-3 rounded-2xl" : " py-2 bg-base-100 border-t border-neutral")}>
                <div className="border rounded-full p-3 border-bline border-neutral">
                    <a href="https://www.dropbox.com/scl/fi/fo7evq74nobeje19lmufn/Resume-mn.pdf?rlkey=m89try7965luyj0gb1d5s4vxl&st=cqtctx2q&dl=1" className="hover:text-primary transition-all flex items-center">
                        <FontAwesomeIcon size="lg" icon="fa-solid fa-clipboard-list" fixedWidth />
                        <div className="hidden md:block">Resume</div>
                    </a>
                </div>
                <div className="border rounded-full p-3 border-bline border-neutral">
                    <ul className="gap-5 flex">
                        <li className="hover:scale-125 hover:text-sky-600 hover:mx-1 transition-all"><a href="https://www.linkedin.com/in/ethansaso/">
                            <FontAwesomeIcon size="lg" icon="fa-brands fa-linkedin" fixedWidth />
                        </a></li>
                        <li className="hover:scale-125 hover:text-cyan-900 hover:mx-1 transition-all"><a href="https://github.com/ethansaso">
                            <FontAwesomeIcon size="lg" icon="fa-brands fa-github" fixedWidth />
                        </a></li>
                        <li className="hover:scale-125 hover:text-lime-600 hover:mx-1 transition-all"><a href="https://www.inaturalist.org/people/ethansaso">
                            <FontAwesomeIcon size="lg" icon="fa-solid fa-dove" fixedWidth />
                        </a></li>
                    </ul>
                </div>
                <div
                className="border rounded-full p-3 border-bline border-neutral"
                >
                    <a href="mailto:ethansaso@berkeley.edu" className="flex items-center hover:text-primary transition-all">
                        <FontAwesomeIcon size="lg" icon="fa-solid fa-envelope" fixedWidth />
                        <div className="hidden md:block ml-1">Contact</div>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default HeroFooter;