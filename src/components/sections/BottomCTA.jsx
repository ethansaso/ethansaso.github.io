import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomCTA = () => (
    <section id="cta" className="container flex flex-col mx-auto items-center justify-center px-8 2xl:px-32 mt-32 md:mt-0">
        <div className="container flex mx-auto items-center justify-between px-8 lg:px-16 py-24 my-24 bg-base-100 border border-neutral rounded-2xl">
            <div className="">
                <h1 className="text-4xl font-bold mb-8">
                    Let's get <span className="text-primary">in touch</span>
                </h1>
                <p className="text-lg font-medium max-w-xl text-neutral-content">
                    I'm always open to hearing about exciting new opportunities. Feel free to reach out if you have any questions, or just to say hi!
                </p>
            </div>
            <div className="shrink-0 flex justify-end">
                <a href="mailto:ethansaso@berkeley.edu" className="w-fit text-md font-medium flex items-center bg-base-content text-primary-content py-2 px-4 rounded-full border-neutral border hover:scale-110 hover:bg-neutral-content transition duration-300">
                    Start a conversation
                    <FontAwesomeIcon size="xs" icon={faArrowRight} className="ml-2"/>
                </a>
            </div>
        </div>
    </section>
)

export default BottomCTA;