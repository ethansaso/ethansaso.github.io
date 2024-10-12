import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EthanPortrait from "../../assets/img/ethanportrait.png";

const Hero = ({ darkMode }) => {
  return (
    <div className="container flex flex-col flex-grow px-8 xl:px-32 h-full">
      <div className={"w-full h-full flex items-center justify-center rounded-2xl"}>
        <div className={"hero-appears w-full h-full lg:h-auto transition-all z-999 relative" + (darkMode ? ' hero-dark' : ' hero-light')}>
          <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-center lg:justify-between w-full h-full">
            <div className="max-w-xl text-left">
              <div className="text-4xl md:text-5xl font-bold">
                <h1 className="mb-1 block">Hi! 👋</h1>
                <h1>
                  My name is <span className="text-primary">Ethan Saso.</span>
                </h1>
              </div>
              {darkMode ? (
                <h1 className="text-xl my-8 text-neutral-content">
                  I'm a <span className="text-secondary font-semibold">full-stack developer </span>
                  from <span className="text-secondary font-semibold">Berkeley, CA</span> dedicated to crafting
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
              <div className={"flex flex-col sm:flex-row mt-4 gap-3" + (darkMode ? '' : ' hidden')}>
                <button href="https://www.dropbox.com/scl/fi/fo7evq74nobeje19lmufn/Resume-mn.pdf?rlkey=m89try7965luyj0gb1d5s4vxl&st=cqtctx2q&dl=1" className="transition-all flex items-center justify-center py-2.5 px-4 border rounded-full border-bline border-neutral bg-white text-black hover:scale-110">
                    <FontAwesomeIcon size="lg" icon="fa-solid fa-clipboard-list" fixedWidth />
                    <div className="block">Resume</div>
                </button>
                <button href="mailto:ethansaso@berkeley.edu" className="flex items-center transition-all py-2.5 px-4 glass-high rounded-full justify-center shadow-black/70 shadow-lg hover:scale-110">
                    <FontAwesomeIcon size="lg" icon="fa-solid fa-envelope" fixedWidth />
                    <div className="block ml-1">Contact</div>
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={EthanPortrait} className="rounded-full w-24 h-24 lg:h-[17rem] lg:w-[17rem] mb-12 lg:mb-4" alt="Ethan Saso" />
              <div className="w-full hidden lg:flex justify-center align-center">
                <ul className="gap-2.5 flex">
                  <a href="https://www.linkedin.com/in/ethansaso/">
                    <li className={"hover:scale-110 hover:text-sky-600 transition-all rounded-full p-3" + (darkMode ? ' glass-high' : ' bg-base-100 border-neutral border')}>
                      <FontAwesomeIcon size="lg" icon="fa-brands fa-linkedin" fixedWidth />
                    </li>
                  </a>
                  <a href="https://github.com/ethansaso">
                    <li className={"hover:scale-110 hover:text-cyan-900 transition-all rounded-full p-3" + (darkMode ? ' glass-high' : ' bg-base-100 border-neutral border')}>
                      <FontAwesomeIcon size="lg" icon="fa-brands fa-github" fixedWidth />
                    </li>
                  </a>
                  <a href="https://www.inaturalist.org/people/ethansaso">
                    <li className={"hover:scale-110 hover:text-lime-600 transition-all rounded-full p-3" + (darkMode ? ' glass-high' : ' bg-base-100 border-neutral border')}>
                      <FontAwesomeIcon size="lg" icon="fa-solid fa-dove" fixedWidth />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
