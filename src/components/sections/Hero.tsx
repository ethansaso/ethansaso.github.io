import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EthanPortrait from "../../assets/img/ethansaso.jpeg";

interface HeroProps {
  devPortfolio: boolean;
}

const Hero = ({ devPortfolio }: HeroProps) => {
  return (
    <div className="container flex flex-col grow px-7.5 xl:px-32 h-full">
      <div
        className={"w-full h-full flex items-center justify-center rounded-2xl"}
      >
        <div
          className={
            "w-full h-full lg:h-auto relative" +
            (devPortfolio ? " hero-dark" : " hero-light")
          }
        >
          <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-end lg:justify-between w-full h-full">
            <div className="max-w-xl font-medium text-left">
              <div className="text-4xl md:text-5xl font-bold">
                <h1 className="mb-1 block">Hi! 👋</h1>
                <h1>
                  <span className="md:hidden">I'm</span>{" "}
                  <span className="hidden md:inline">My name is </span>{" "}
                  <span
                    className={devPortfolio ? "text-gradient" : "text-primary"}
                  >
                    Ethan Saso
                  </span>
                  .
                </h1>
              </div>
              {devPortfolio ? (
                <h1 className="text-lg my-8 text-neutral-content">
                  I'm a{" "}
                  <span className="font-semibold text-accent">
                    full-stack developer
                  </span>{" "}
                  from{" "}
                  <span className="font-semibold text-accent">
                    Berkeley, CA
                  </span>{" "}
                  dedicated to crafting interactive, user-friendly applications
                  and tackling intersectoral challenges with technology.
                </h1>
              ) : (
                <h1 className="text-xl my-8">
                  I'm a{" "}
                  <span className="text-secondary font-semibold">
                    naturalist{" "}
                  </span>{" "}
                  and
                  <span className="text-secondary font-semibold">
                    {" "}
                    macro photographer{" "}
                  </span>
                  from Berkeley, CA fascinated by the unseen worlds of
                  nearly-microscopic creatures like
                  <span className="text-accent font-semibold">
                    {" "}
                    slime molds
                  </span>{" "}
                  and
                  <span className="text-accent font-semibold"> fungi</span>.
                </h1>
              )}
              <div
                className={
                  "flex flex-col sm:flex-row mt-4 gap-3" +
                  (devPortfolio ? "" : " hidden")
                }
              >
                <a
                  href="https://www.dropbox.com/scl/fi/xpuhhda0vd0jgqo8vbj0y/Resume.pdf?rlkey=mworl9bjt0c9b5p539mlykk7r&st=qgu653s4&dl=1"
                  className="transition-all flex items-center justify-center py-2 px-4 gap-1 border rounded-full border-bline border-neutral bg-white text-black hover:bg-neutral-content hover:scale-105 shadow-xl shadow-black/20"
                >
                  <div className="block">Resume</div>
                </a>
                <a
                  href="mailto:ethansaso@berkeley.edu"
                  className="flex items-center transition-all py-2 px-4 gap-1 glass-high border border-neutral rounded-full justify-center hover:scale-105 hover:bg-neutral! shadow-xl shadow-black/20"
                >
                  Contact me
                </a>
              </div>
            </div>
            <div className="flex flex-col">
              <img
                src={EthanPortrait}
                className="rounded-full w-24 h-24 lg:h-[17rem] lg:w-[17rem] mb-12 lg:mb-4"
                alt="Ethan Saso"
              />
              <div className="w-full hidden lg:flex justify-center align-center">
                <ul className="gap-2.5 flex">
                  <a href="https://www.linkedin.com/in/ethansaso/">
                    <li
                      className={
                        "hover:scale-105 hover:text-sky-600 transition-transform duration-200 rounded-full p-2.5 " +
                        (devPortfolio
                          ? "glass-high shadow-xl shadow-black/20"
                          : "bg-base-100 border-neutral border")
                      }
                    >
                      <FontAwesomeIcon
                        size="lg"
                        icon={faLinkedin}
                        className="relative top-px"
                      />
                    </li>
                  </a>
                  <a href="https://github.com/ethansaso">
                    <li
                      className={
                        "hover:scale-105 hover:text-cyan-900 transition-transform duration-200 rounded-full p-2.5 " +
                        (devPortfolio
                          ? "glass-high shadow-xl shadow-black/20"
                          : "bg-base-100 border-neutral border")
                      }
                    >
                      <FontAwesomeIcon size="lg" icon={faGithub} />
                    </li>
                  </a>
                  <a href="https://www.inaturalist.org/people/ethansaso">
                    <li
                      className={
                        "hover:scale-105 hover:text-lime-600 transition-transform duration-200 rounded-full p-2.5 " +
                        (devPortfolio
                          ? "glass-high shadow-xl shadow-black/20"
                          : "bg-base-100 border-neutral border")
                      }
                    >
                      <FontAwesomeIcon size="lg" icon={faDove} />
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
