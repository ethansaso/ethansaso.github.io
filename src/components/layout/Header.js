import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = ({darkMode, setDarkMode}) => {
    const toggleTheme = () => {
        console.log(darkMode)
        setDarkMode(!darkMode);
    };

    return (
        <>
            <div className="z-10 px-2 py-2 w-full sticky top-0 border-b-neutral-content border-b bg-base-100">
                <nav className="flex items-center justify-center mx-1 lg:mx-4">
                    <div className="px-3 font-bold text-lg flex-grow basis-0">Ethan Saso</div>
                    <div className="lg:border rounded-3xl p-3 border-bline border-neutral-content flex">
                        <ul className="gap-5 lg:flex px-1 transition-all">
                            <li><a href="#home" className="flex items-center hover:text-primary transition-all">
                                <FontAwesomeIcon size="xs" icon="fa-solid fa-house" fixedWidth />
                                <h1 className="ml-0.5">Home</h1>
                            </a></li>
                            {darkMode ? (
                                <>
                                    <li><a href="#projects" className="flex items-center hover:text-primary transition-all">
                                        <FontAwesomeIcon size="xs" icon="fa-solid fa-folder-open" fixedWidth />
                                        <h1 className="ml-0.5">Projects</h1>
                                    </a></li>
                                    <li><a href="#skills" className="flex items-center hover:text-primary transition-all">
                                        <FontAwesomeIcon size="xs" icon="fa-solid fa-wrench" fixedWidth />
                                        <h1 className="ml-0.5">Skills</h1>
                                    </a></li>
                                </>
                            ) : (
                                <>
                                    <li><a href="#photos" className="flex items-center hover:text-primary transition-all">
                                        <FontAwesomeIcon size="xs" icon="fa-solid fa-camera" fixedWidth />
                                        <h1 className="ml-0.5">Photos</h1>
                                    </a></li>
                                </>
                            )}
                            
                        </ul>
                    </div>
                    <div className="flex gap-3 flex-grow basis-0 justify-end">
                        <h1>{darkMode ? "Developer Portfolio" : "Photography Portfolio"}</h1>
                        <label class="grid cursor-pointer place-items-center">
                            <input
                                type="checkbox"
                                value="lemonade"
                                onChange={toggleTheme}
                                class="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                            />
                            <FontAwesomeIcon className="text-base-100 col-start-1 row-start-1" style={{pointerEvents: 'none'}} icon="fa-solid fa-code" fixedWidth />
                            <FontAwesomeIcon className="text-base-100 col-start-2 row-start-1 z-10" style={{pointerEvents: 'none'}} icon="fa-brands fa-pagelines" fixedWidth />
                        </label>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;