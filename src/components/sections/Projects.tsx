import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container flex flex-col mx-auto items-center justify-center px-8 2xl:px-32 mt-32 md:mt-0 mb-36"
    >
      <div className="mb-12 w-full">
        <h1 className="text-3xl text-left font-bold mb-6">Featured Projects</h1>
        <div className="text-md flex font-medium items-start md:items-end flex-col md:flex-row gap-4 leading-relaxed justify-between">
          <p className="text-neutral-content max-w-2xl">
            I'm motivated by projects where software helps people understand,
            classify, and care for the world around them. I focus on designing
            systems that feel intuitive and accessible to users from all
            backgrounds.
          </p>
          <a
            href="https://github.com/ethansaso"
            className="text-right text-primary hover:underline hover:text-accent font-semibold text-nowrap"
          >
            Visit my GitHub
            <FontAwesomeIcon size="xs" icon={faArrowRight} className="ml-2" />
          </a>
        </div>
      </div>
      <div className="project-section grid lg:grid-cols-3 gap-8 max-w-6xl">
        {/* Klados */}
        <a
          href="https://klados.bio"
          className="project-card rounded-2xl flex flex-col items-center grow group overflow-hidden transition"
        >
          <div className="w-full flex aspect-video h-full items-center overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-t-2xl opacity-100 transition group-hover:scale-110 duration-500"
              src={"/projects/kladosguide.png"}
              alt="Klados"
              loading="lazy"
            />
          </div>

          <div className="h-full p-6 grow flex flex-col w-full">
            <div className="w-full mb-2">
              <h1 className="text-2xl font-bold transition">Klados</h1>
            </div>

            <div className="text-sm grow text-neutral-content mb-5 leading-relaxed font-semibold relative">
              <p>
                Klados is a web-based platform for learning to identify
                organisms through collaborative visual guides that model
                relationships between branches of life.
              </p>
            </div>

            <div className="flex gap-2 mb-4 flex-wrap">
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                React
              </div>
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                TypeScript
              </div>
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                Start
              </div>
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                PostgreSQL
              </div>
            </div>

            <div className="layered-button-frame">
              <span
                className="
      btn btn-sm w-full bg-white text-black
    "
              >
                Visit Site
                <FontAwesomeIcon
                  size="xs"
                  icon={faArrowRight}
                  className="ml-0"
                />
              </span>
            </div>
          </div>
        </a>

        {/* TaxoKeys */}
        <a
          href="https://taxokeys.org"
          className="project-card rounded-2xl flex flex-col items-center grow group overflow-hidden hover:border-primary transition"
        >
          <div className="w-full flex aspect-video h-full items-center overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-t-2xl opacity-100 transition group-hover:scale-110 duration-500"
              src={"/projects/taxokeys-mosaic.png"}
              alt="TaxoKeys"
              loading="lazy"
            />
          </div>

          <div className="h-full p-6 grow flex flex-col w-full">
            <div className="w-full mb-2">
              <h1 className="text-2xl font-bold transition">TaxoKeys</h1>
            </div>

            <div className="text-sm grow text-neutral-content mb-5 leading-relaxed font-semibold relative">
              <p>
                TaxoKeys was an earlier iteration of Klados, and my first
                exploration into algorithmically generating taxonomic keys and
                visual flowcharts for biological classification.
              </p>
            </div>

            <div className="flex gap-2 mb-4 flex-wrap">
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                MongoDB
              </div>
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                Express
              </div>
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                React
              </div>
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                Python
              </div>
            </div>

            <div className="layered-button-frame">
              <span
                className="
      btn btn-sm w-full bg-white text-black
    "
              >
                Visit Site
                <FontAwesomeIcon
                  size="xs"
                  icon={faArrowRight}
                  className="ml-0"
                />
              </span>
            </div>
          </div>
        </a>

        {/* Cal Men's Volleyball */}
        <a
          href="https://ethansaso.github.io/cal-mens-volleyball"
          className="project-card rounded-2xl flex flex-col items-center grow group overflow-hidden hover:border-primary transition"
        >
          <div className="w-full flex aspect-video h-full items-center overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-t-2xl opacity-100 transition group-hover:scale-110 duration-500"
              src={"/projects/volleygif.gif"}
              alt="Cal Men's Volleyball"
              loading="lazy"
            />
          </div>

          <div className="h-full p-6 grow flex flex-col w-full">
            <div className="w-full mb-2">
              <h1 className="text-2xl font-bold transition">
                Cal Men's Volleyball
              </h1>
            </div>

            <div className="text-sm grow text-neutral-content mb-5 leading-relaxed font-semibold relative">
              <p>
                Official website for UC Berkeley&apos;s Men&apos;s Club
                Volleyball Team. Built for easy updates and maintenance by team
                members with limited technical experience.
              </p>
            </div>

            <div className="flex gap-2 mb-4 flex-wrap">
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                React
              </div>
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                Bootstrap
              </div>
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                Vite
              </div>
              <div className="badge badge-neutral text-base-content badge-sm shrink-0">
                Node
              </div>
            </div>

            <div className="layered-button-frame flex flex-col gap-2">
              <span
                className="
      btn btn-sm w-full bg-white text-black
    "
              >
                Visit Site
                <FontAwesomeIcon
                  size="xs"
                  icon={faArrowRight}
                  className="ml-0"
                />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
