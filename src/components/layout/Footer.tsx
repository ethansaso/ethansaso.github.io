import { faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FooterProps {
    darkMode: boolean;
}

const Footer = ({darkMode}: FooterProps) => {
    return (
        <footer className={"h-auto footer w-full border-t border-neutral px-3 py-4" + (darkMode ? ' bg-base-300' : '')}>
            <div className="w-full container flex items-center justify-center transition-all px-8 2xl:px-32 mx-auto text-sm  text-neutral-content">
                <div className="flex-1 mr-auto">
                    <div className="flex gap-2">
                        ©
                        <time dateTime="2024">2024</time>
                        –
                        <span>present</span>
                        <span>Ethan Saso.</span>
                    </div>
                </div>
                <div className="hidden md:block border rounded-full px-3 py-2 border-bline border-neutral text-base-content">
                    <ul className="gap-5 flex">
                        <li className="hover:scale-125 hover:text-sky-600 hover:mx-1"><a href="https://www.linkedin.com/in/ethansaso/">
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                        </a></li>
                        <li className="hover:scale-125 hover:text-cyan-900 hover:mx-1"><a href="https://github.com/ethansaso">
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                        </a></li>
                        <li className="hover:scale-125 hover:text-lime-600 hover:mx-1"><a href="https://www.inaturalist.org/people/ethansaso">
                            <FontAwesomeIcon icon={faDove} fixedWidth />
                        </a></li>
                        <li className="hover:scale-125 hover:text-red-500 hover:mx-1"><a href="https://www.youtube.com/@ethansaso">
                            <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </a></li>
                    </ul>
                </div>
                <div className="flex-1 ml-auto text-right">
                    <p className="ml-auto">Berkeley, CA</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;