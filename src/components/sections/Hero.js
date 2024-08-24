import EthanPortrait from "../../assets/img/ethansaso.jpeg"

const Hero = ({darkMode}) => {
    return (
        <div className="flex flex-row mx-20 w-full max-w-5xl items-center justify-center my-auto">
            <div className="max-w-xl">
                <div className="text-5xl mb-2">
                    <h1 className="mb-1">Hi! 👋</h1>
                    <h1>My name is <span className="text-primary">Ethan Saso</span>.</h1>
                </div>
                {darkMode ? (
                    <h1 className="text-xl">I'm
                        a <span className="text-secondary">full-stack developer </span>
                        from Berkeley, CA dedicated to the intersection of 
                        <span className="text-accent"> digital design</span> and <span className="text-accent">the environment</span>.
                    </h1>  
                ) : (
                    <h1 className="text-xl">I'm
                        a <span className="text-secondary">naturalist </span> and
                        <span className="text-secondary"> macro photographer </span>
                        from Berkeley, CA fascinated by the unseen worlds of
                        nearly-microscopic creatures like 
                        <span className="text-accent"> slime molds</span> and
                        <span className="text-accent"> fungi</span>.
                    </h1>  
                )}

            </div>
            <div className="flex-grow" />
            <div>
                <img src={EthanPortrait} className="rounded-full" alt="Ethan Saso"/>
            </div>
        </div>
    )
    
}

export default Hero;