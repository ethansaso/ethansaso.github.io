import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomCTA = () => (
    <section id="cta" className="container mx-auto my-36 px-8 2xl:px-32">
        <div className="flex flex-col md:flex-row mx-auto items-center justify-between px-8 lg:px-16 py-16 lg:py-24 bg-base-100 border border-neutral rounded-2xl">
            <div className="">
                <h1 className="text-4xl font-bold mb-8">
                    Let's get <span className="text-primary">in touch</span>
                </h1>
                <p className="text-lg font-medium max-w-xl text-neutral-content">
                    I'm always open to hearing about exciting new opportunities. Feel free to reach out if you have any questions, or just to say hi!
                </p>
            </div>
            <div className="w-full md:w-auto shrink-0 flex justify-end mt-8">
                <a href="mailto:ethansaso@berkeley.edu" className="w-full md:w-auto text-md font-medium flex items-center justify-center bg-base-content text-primary-content py-2 px-4 rounded-full border-neutral border hover:scale-105 hover:bg-neutral-content transition duration-300">
                    Start a conversation
                    <FontAwesomeIcon size="xs" icon={faArrowRight} className="ml-2"/>
                </a>
            </div>
        </div>
    </section>
)

export default BottomCTA;