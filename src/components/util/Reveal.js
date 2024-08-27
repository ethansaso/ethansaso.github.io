// Thanks to Tom is Loading https://www.youtube.com/watch?v=hjbxaYTMhy0
import React, {useEffect, useRef} from "react"
import { useInView, motion, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = "fit-content", from='bottom' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} className="reveal" style={{position: 'relative', width, overflow: 'hidden'}}>
            <motion.div
                variants={{
                    left: {opacity: 0, x: -75, y: 0},
                    right: {opacity: 0, x: 75, y: 0},
                    top: {opacity: 0, x: 0, y: -75},
                    bottom: {opacity: 0, x: 0, y: 75},
                    visible: {opacity: 1, x: 0, y: 0}
                }}
                initial={from}
                animate={mainControls}
                transition={{duration: 0.3, delay: 0.1}}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal;