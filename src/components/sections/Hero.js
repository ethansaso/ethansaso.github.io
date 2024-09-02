import EthanPortrait from "../../assets/img/ethanportrait.png";

const Hero = ({ darkMode }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className={"h-full lg:h-auto" + (darkMode ? ' hero-dark' : ' hero-light')}>
        <div className="hero-appears items-center justify-center flex flex-col-reverse lg:flex-row py-4 px-8 max-w-full max-h-full transition-all">
          <div className="max-w-xl text-center lg:text-left lg:pr-8">
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
                from Berkeley, CA dedicated to crafting
                <span className="text-accent font-semibold"> interactive applications</span> with
                <span className="text-accent font-semibold"> user-friendly design</span>.
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
          <img src={EthanPortrait} className="hide-if-short rounded-full max-h-[300px] my-2 lg:ml-10 min-h-0 w-auto" alt="Ethan Saso" />
          <h1 className="mb-1 text-5xl block lg:hidden">Hi! 👋</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
