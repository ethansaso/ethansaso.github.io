import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroFooter = () => {
    return (
        <div className="px-2 py-2 w-full border-t border-neutral">
            <nav className="flex items-center justify-center mx-1 lg:mx-4">
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
                        <li className="hover:scale-125 hover:text-red-500 hover:mx-1 transition-all"><a href="https://www.youtube.com/@ethansaso">
                            <FontAwesomeIcon size="lg" icon="fa-brands fa-youtube" fixedWidth />
                        </a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default HeroFooter;