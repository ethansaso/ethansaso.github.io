import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EthanPortrait from "../../assets/img/ethanportrait.png";

const Hero = ({ darkMode }) => {
  return (
    <div className="container flex flex-col items-center justify-center flex-grow px-8 xl:px-32">
      <div className={"w-full h-full flex items-center justify-center rounded-2xl"}>
        <div className={"hero-appears w-full h-full lg:h-auto transition-all z-999 relative" + (darkMode ? ' hero-dark' : ' hero-light')}>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full">
            <div className="max-w-xl text-center lg:text-left">
              <div className="text-5xl mb-8 font-bold">
                <h1 className="mb-1 hidden lg:block">Hi! 👋</h1>
                <h1>
                  My name is <span className="text-primary">Ethan Saso.</span>
                </h1>
              </div>
              {darkMode ? (
                <h1 className="text-xl mb-8 text-neutral-content">
                  I'm a <span className="text-secondary font-semibold">full-stack developer </span>
                  from Berkeley, CA dedicated to crafting
                  interactive, user-friendly applications and
                  tackling intersectoral challenges with technology.
                </h1>
              ) : (
                <h1 className="text-xl mb-8">
                  I'm a <span className="text-secondary font-semibold">naturalist </span> and
                  <span className="text-secondary font-semibold"> macro photographer </span>
                  from Berkeley, CA fascinated by the unseen worlds of
                  nearly-microscopic creatures like
                  <span className="text-accent font-semibold"> slime molds</span> and
                  <span className="text-accent font-semibold"> fungi</span>.
                </h1>
              )}
              <div className={"flex mt-4 gap-3" + (darkMode ? '' : ' hidden')}>
                <button href="https://www.dropbox.com/scl/fi/fo7evq74nobeje19lmufn/Resume-mn.pdf?rlkey=m89try7965luyj0gb1d5s4vxl&st=cqtctx2q&dl=1" className="hover:text-primary transition-all flex items-center py-2.5 px-4 border rounded-full border-bline border-neutral bg-white text-black">
                    <FontAwesomeIcon size="lg" icon="fa-solid fa-clipboard-list" fixedWidth />
                    <div className="hidden md:block">Resume</div>
                </button>
                <button href="mailto:ethansaso@berkeley.edu" className="flex items-center hover:text-primary transition-all py-2.5 px-4 glass-high rounded-full">
                    <FontAwesomeIcon size="lg" icon="fa-solid fa-envelope" fixedWidth />
                    <div className="hidden md:block ml-1">Contact</div>
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={EthanPortrait} className="hide-if-short rounded-full max-h-[275px] mb-4 aspect-square align-center justify-center" alt="Ethan Saso" />
              <div className="w-full flex justify-center align-center">
                  <ul className="gap-2.5 flex">
                    <li className="hover:scale-125 hover:text-sky-600 hover:mx-1 transition-all border rounded-full p-3 border-bline border-neutral bg-base-100"><a href="https://www.linkedin.com/in/ethansaso/">
                        <FontAwesomeIcon size="lg" icon="fa-brands fa-linkedin" fixedWidth />
                    </a></li>
                    <li className="hover:scale-125 hover:text-cyan-900 hover:mx-1 transition-all border rounded-full p-3 border-bline border-neutral bg-base-100"><a href="https://github.com/ethansaso">
                        <FontAwesomeIcon size="lg" icon="fa-brands fa-github" fixedWidth />
                    </a></li>
                    <li className="hover:scale-125 hover:text-lime-600 hover:mx-1 transition-all border rounded-full p-3 border-bline border-neutral bg-base-100"><a href="https://www.inaturalist.org/people/ethansaso">
                        <FontAwesomeIcon size="lg" icon="fa-solid fa-dove" fixedWidth />
                    </a></li>
                  </ul>
              </div>
              
            </div>
            <h1 className="mb-1 text-5xl block lg:hidden">Hi! 👋</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
