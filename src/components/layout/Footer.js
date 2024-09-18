import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({darkMode}) => {
    return (
        <div>
            <div className={"h-auto footer w-full border-t border-neutral px-3 py-2" + (darkMode ? ' bg-base-300' : '')}>
                <div className="w-full container flex items-center justify-center transition-all px-8 2xl:px-32 mx-auto text-sm font-semibold">
                    <div className="flex-1 mr-auto">
                        <h1>Ethan Saso ©2024</h1>
                    </div>
                    <div className="hidden md:block border rounded-full px-3 py-2 border-bline border-neutral">
                        <ul className="gap-5 flex">
                            <li className="hover:scale-125 hover:text-sky-600 hover:mx-1"><a href="https://www.linkedin.com/in/ethansaso/">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin" fixedWidth />
                            </a></li>
                            <li className="hover:scale-125 hover:text-cyan-900 hover:mx-1"><a href="https://github.com/ethansaso">
                                <FontAwesomeIcon icon="fa-brands fa-github" fixedWidth />
                            </a></li>
                            <li className="hover:scale-125 hover:text-lime-600 hover:mx-1"><a href="https://www.inaturalist.org/people/ethansaso">
                                <FontAwesomeIcon icon="fa-solid fa-dove" fixedWidth />
                            </a></li>
                            <li className="hover:scale-125 hover:text-red-500 hover:mx-1"><a href="https://www.youtube.com/@ethansaso">
                                <FontAwesomeIcon icon="fa-brands fa-youtube" fixedWidth />
                            </a></li>
                        </ul>
                    </div>
                    <div className="flex-1 ml-auto text-right">
                        <h1 className="ml-auto">Berkeley, CA</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;