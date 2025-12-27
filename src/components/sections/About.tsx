import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";
import companiesBerkeley from "../../assets/img/companies/berkeley.png";
import companiesHUMR from "../../assets/img/companies/humr.png";
import useWindowSize from "../../hooks/useWindowSize";

const About = () => {
  const { width } = useWindowSize();
  const [readMoreClicked, setReadMoreClicked] = useState(false);

  const showReadMore = width < 640 && !readMoreClicked;

  const handleReadMoreClicked = () => {
    setReadMoreClicked(true);
  };

  return (
    <section
      id="about"
      className="container flex flex-col gap-8 mx-auto px-7.5 2xl:px-32 mb-48"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center">
        <div className="flex flex-col card card-lg border border-neutral bg-base-100 flex-1 relative">
          <div className="card-body">
            <h1 className="text-2xl card-title font-bold mb-4">About me</h1>
            <div
              className={classNames(
                "text-md leading-normal font-medium text-neutral-content",
                { "max-h-80 overflow-hidden": showReadMore }
              )}
            >
              <p className="mb-4">
                Hi! I'm Ethan, a software engineer passionate about building
                accessible, impactful tools with code.
              </p>
              <p className="mb-4">
                Growing up mushroom hunting in California's diverse landscapes,
                I developed an early appreciation for interconnected systems. I
                initially carried that fascination into biology at UC Berkeley.
                However, once I was introduced to programming through
                bioinformatics coursework, I found myself increasingly drawn to
                software as a way to design and model ideas.
              </p>
              <p className="mb-4">
                I went on to explore topics ranging from digital circuit design
                to database architecture, ultimately settling on full-stack
                development as a way to build universally accessible
                applications that address real-world problems.
              </p>
              <p className="">
                When I'm not programming, you can find me out in the hills
                and/or behind a camera lens. Feel free to check out my
                photography portfolio using the switch in the upper right
                corner!
              </p>
            </div>
            {showReadMore && (
              <div className="absolute bottom-0 left-0 flex justify-center w-full">
                <button
                  onClick={handleReadMoreClicked}
                  className="glass-high px-4 py-1.5 mb-8 rounded-full border border-neutral text-sm z-10 shadow-black/20 shadow-xl hover:scale-105 transition-all duration-200"
                >
                  Read more
                </button>
                <div className="absolute w-full h-36 bottom-0 bg-linear-to-t from-base-100 from-20% to-transparent z-1" />
              </div>
            )}
          </div>
        </div>
        <div className="xl:w-4/12 flex flex-col card card-lg border border-neutral bg-base-100">
          <div className="card-body">
            <h1 className="card-title text-2xl font-bold mb-6">
              Education & Experience
            </h1>
            <ol className="flex flex-col gap-7">
              <li className="flex items-end">
                <div className="rounded-full overflow-hidden w-9 h-9 md:w-10 md:h-10 bg-white p-2 shrink-0">
                  <img alt="Apteron Logo" src={companiesHUMR} />
                </div>
                <div className="font-medium ml-5 text-xs w-full">
                  <div className="flex flex-col-reverse sm:flex-row justify-between gap-2 sm:gap-4">
                    <a
                      href="https://www.apteron.org/"
                      className="rounded-full px-2 -my-0.5 -ml-2 py-0.5 hover:bg-neutral duration-200 text-sm"
                    >
                      Apteron
                    </a>
                    <div className="font-normal text-neutral-content flex gap-2">
                      <time dateTime="2024-10">Oct 2024</time>–
                      <span>Dec 2025</span>
                    </div>
                  </div>
                  <div className="mt-0.5 text-neutral-content">
                    Full-Stack Engineer
                  </div>
                </div>
              </li>
              <li className="flex items-end">
                <div className="rounded-full overflow-hidden w-9 h-9 md:w-10 md:h-10 shrink-0">
                  <img alt="UC Berkeley Logo" src={companiesBerkeley} />
                </div>
                <div className="font-medium ml-5 text-xs w-full">
                  <div className="flex flex-col-reverse sm:flex-row justify-between gap-2 sm:gap-4">
                    <a
                      href="https://www.berkeley.edu/"
                      className="rounded-full px-2 -my-0.5 -ml-2 py-0.5 hover:bg-neutral transition-color duration-200 text-sm"
                    >
                      UC Berkeley
                    </a>
                    <div className="font-normal text-neutral-content flex gap-2">
                      <time dateTime="2022-08">Aug 2022</time>–
                      <time dateTime="2022-12">Dec 2022</time>
                    </div>
                  </div>
                  <div className="mt-0.5 text-neutral-content">
                    Academic Intern
                  </div>
                </div>
              </li>
              <li className="flex items-end">
                <div className="rounded-full overflow-hidden w-9 h-9 md:w-10 md:h-10 shrink-0">
                  <img alt="UC Berkeley Logo" src={companiesBerkeley} />
                </div>
                <div className="font-medium ml-5 text-xs w-full">
                  <div className="flex flex-col-reverse sm:flex-row justify-between gap-2 sm:gap-4">
                    <a
                      href="https://www.berkeley.edu/"
                      className="rounded-full px-2 -my-0.5 -ml-2 py-0.5 hover:bg-neutral transition-color duration-200 text-sm"
                    >
                      UC Berkeley
                    </a>
                    <div className="font-normal text-neutral-content flex gap-2">
                      <time dateTime="2020">Fall 2020</time>–
                      <time dateTime="2024">Spring 2024</time>
                    </div>
                  </div>
                  <div className="mt-0.5 text-neutral-content">
                    B.S. Molecular Environmental Biology
                  </div>
                  <div className="mt-0.5 text-neutral-content">
                    Minor in Computer Science
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="card card-lg border border-neutral bg-base-100">
        <div className="card-body">
          <h1 className="text-2xl card-title font-bold mb-4">Skills</h1>
          <p className="mb-4 text-neutral-content font-medium">
            I primarily work with open-source tools and frameworks that support
            long-term maintainability and public collaboration. Some of the
            technologies I particularly enjoy:
          </p>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <li className="flex items-center gap-3 group">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary text-xs group-hover:translate-x-1 transition"
              />{" "}
              TypeScript
            </li>
            <li className="flex items-center gap-3 group">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary text-xs group-hover:translate-x-1 transition"
              />{" "}
              React
            </li>
            <li className="flex items-center gap-3 group">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary text-xs group-hover:translate-x-1 transition"
              />{" "}
              Node.js
            </li>
            <li className="flex items-center gap-3 group">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary text-xs group-hover:translate-x-1 transition"
              />{" "}
              TanStack
            </li>
            <li className="flex items-center gap-3 group">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary text-xs group-hover:translate-x-1 transition"
              />{" "}
              Python
            </li>
            <li className="flex items-center gap-3 group">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary text-xs group-hover:translate-x-1 transition"
              />{" "}
              CSS (Tailwind)
            </li>
            <li className="flex items-center gap-3 group">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary text-xs group-hover:translate-x-1 transition"
              />{" "}
              Go
            </li>
            <li className="flex items-center gap-3 group">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary text-xs group-hover:translate-x-1 transition"
              />{" "}
              PostgreSQL
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
