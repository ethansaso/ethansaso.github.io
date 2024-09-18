import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = ({ darkMode, setDarkMode }) => {
  const [hasClickedSwitch, setHasClickedSwitch] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setHasClickedSwitch(true);
  };

  return (
    <div className={"pointer-events-none fixed overflow-hidden top-0 z-10 mt-8 w-full flex justify-center"}>
      <nav className="flex container items-center justify-center w-full gap-3 px-8 2xl:px-32 mx-auto text-sm font-semibold">
        <div className={"flex items-center gap-2 font-bold transition-all py-2.5 px-5 rounded-full mr-auto " + (darkMode ? 'glass-high' : 'bg-base-100 border-neutral border')}>
          <svg
            className="size-5 fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 735.000000 735.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,735.000000) scale(0.100000,-0.100000)"
              fill="primary"
              stroke="none"
            >
              <path
                d="M1800 7329 c-427 -48 -840 -241 -1151 -537 -642 -610 -811 -1541
                  -425 -2327 201 -408 515 -722 921 -921 405 -197 835 -252 1279 -163 211 43
                  485 154 659 268 43 28 82 51 86 51 23 0 120 -306 165 -517 46 -220 59 -358 60
                  -633 1 -222 -2 -271 -21 -375 -52 -279 -72 -614 -53 -890 11 -174 33 -365 50
                  -445 22 -105 39 -213 35 -220 -2 -4 -53 -10 -112 -14 -518 -33 -947 -175
                  -1455 -480 -82 -48 -148 -92 -148 -96 0 -4 30 -10 68 -13 88 -9 3796 -9 3895
                  -1 43 4 77 10 77 14 0 11 -287 179 -418 244 -385 192 -705 282 -1140 320 -84
                  7 -155 16 -158 18 -12 13 -73 346 -88 481 -20 186 -21 508 -1 687 53 470 200
                  888 437 1244 67 100 182 248 221 284 l25 23 58 -51 c328 -287 779 -427 1222
                  -380 553 60 1047 414 1288 925 183 387 201 824 52 1235 -161 446 -538 815
                  -994 973 -188 66 -293 82 -524 81 -172 0 -221 -4 -307 -22 -650 -141 -1131
                  -618 -1275 -1269 -18 -83 -22 -130 -22 -303 -1 -232 17 -350 78 -525 l33 -96
                  -79 -87 c-43 -48 -116 -137 -161 -199 -45 -62 -84 -112 -87 -112 -3 -1 -14 32
                  -24 72 -31 122 -105 343 -162 480 l-54 130 56 86 c160 246 270 560 303 863 45
                  405 -55 865 -264 1214 -331 556 -885 915 -1517 983 -111 13 -318 12 -428 0z"
              />
            </g>
          </svg>
          <h1>Ethan Saso</h1>
        </div>
        <div className={"rounded-full py-2.5 px-5 hidden md:block " + (darkMode ? 'glass-high' : 'bg-base-100 border-neutral border')}>
          <ul className="gap-5 flex px-1 transition-all pointer-events-auto">
            <li>
              <a
                href="#home"
                className="flex items-center hover:text-primary"
              >
                <FontAwesomeIcon
                  className="responsive-fa-size"
                  icon="fa-solid fa-house"
                  fixedWidth
                />
                <h1 className="ml-0.5 hidden lg:block">Home</h1>
              </a>
            </li>
            {darkMode ? (
              <>
                <li>
                  <a
                    href="#projects"
                    className="flex items-center hover:text-primary"
                  >
                    <FontAwesomeIcon
                      className="responsive-fa-size"
                      icon="fa-solid fa-folder-open"
                      fixedWidth
                    />
                    <h1 className="ml-0.5 hidden lg:block">Projects</h1>
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="flex items-center hover:text-primary"
                  >
                    <FontAwesomeIcon
                      className="responsive-fa-size"
                      icon="fa-solid fa-wrench"
                      fixedWidth
                    />
                    <h1 className="ml-0.5 hidden lg:block">Skills</h1>
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a
                    href="#photos"
                    className="flex items-center hover:text-primary"
                  >
                    <FontAwesomeIcon
                      className="responsive-fa-size"
                      icon="fa-solid fa-camera"
                      fixedWidth
                    />
                    <h1 className="ml-0.5 hidden lg:block">Photos</h1>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className={"flex gap-3 items-center py-2.5 px-5 rounded-full " + (darkMode ? 'glass-high' : 'bg-base-100 border-neutral border')}>
          <h1>
            <span className="inline lg:hidden">{darkMode ? "Dev Portfolio" : "Photography"}</span>
            <span className="hidden lg:inline">
              {darkMode ? "Development Portfolio" : "Photography Portfolio"}
            </span>
          </h1>
          <label className="grid cursor-pointer place-items-center relative">
            <input
              type="checkbox"
              value="lemonade"
              onChange={toggleTheme}
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1 pointer-events-auto"
            />
            <FontAwesomeIcon
              className="text-base-100 col-start-1 row-start-1"
              style={{ pointerEvents: "none" }}
              icon="fa-solid fa-code"
              fixedWidth
            />
            <FontAwesomeIcon
              className="text-base-100 col-start-2 row-start-1 z-10"
              style={{ pointerEvents: "none" }}
              icon="fa-brands fa-pagelines"
              fixedWidth
            />
            {!hasClickedSwitch && (
              <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 flex size-3 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
            )}
          </label>
        </div>
      </nav>
        
    </div>
  );
};

export default Header;
