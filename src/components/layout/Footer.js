import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="mt-16 lg:mt-24">
            <div className="h-auto footer w-full border-t border-neutral px-3 py-2">
                <div className="flex justify-between w-full">
                    <h1 className="text-lg">Ethan Saso ©2024</h1>
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
                    <h1 className="text-lg">Berkeley, CA</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer;