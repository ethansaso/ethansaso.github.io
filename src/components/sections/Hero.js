import EthanPortrait from "../../assets/img/ethansaso.jpeg";

const Hero = ({ darkMode }) => {
  return (
    <div className="w-full h-[calc(100dvh-110px)] flex items-center justify-center">
      <div className={"" + (darkMode ? ' hero-dark' : ' hero-light')}>
        <div className="hero-appears items-center justify-center flex flex-col-reverse lg:flex-row max-h-full p-8 max-w-full">
          <div className="max-w-xl text-center lg:text-left lg:pr-8 transition-all">
            <div className="text-5xl mb-2">
              <h1 className="mb-1 hidden lg:block">Hi! 👋</h1>
              <h1>
                My name is <span className="text-primary font-semibold">Ethan Saso</span>.
              </h1>
            </div>
            {darkMode ? (
              <h1 className="text-xl">
                I'm a <span className="text-secondary font-semibold">software engineer </span>
                and <span className="text-secondary font-semibold">full-stack developer </span>
                from Berkeley, CA dedicated to the intersection of
                <span className="text-accent font-semibold"> digital design</span> and{" "}
                <span className="text-accent font-semibold">environmental systems</span>.
              </h1>
            ) : (
              <h1 className="text-xl">
                I'm a <span className="text-secondary font-semibold">naturalist </span> and
                <span className="text-secondary font-semibold"> macro photographer </span>
                from Berkeley, CA fascinated by the unseen worlds of
                nearly-microscopic creatures like
                <span className="text-accent font-semibold"> slime molds</span> and
                <span className="text-accent font-semibold"> fungi</span>.
              </h1>
            )}
          </div>
          <div className="ethan-portrait hide-if-short rounded-full my-4 h-[300px] min-h-0 lg:ml-10">
            <img src={EthanPortrait} className="rounded-full h-full box-border" alt="Ethan Saso" />
          </div>
          <h1 className="mb-1 text-5xl block lg:hidden">Hi! 👋</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
