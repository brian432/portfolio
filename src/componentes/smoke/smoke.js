import { motion } from "framer-motion"

export const Smoke = () => {
    return (
        <motion.div
            className="cup-wrap"
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: [0, .2, .5, 0.8, 1],
                transition: {
                    delay: .5
                }
            }}
            exit={{
                opacity: [1, 0.8, 0.5, 0],
                transition: {
                    type: "spring",
                    duration: .5,
                }
            }}
        >
            <div className="smoke-wrap">
                <img className="smoke" src="images/smoke.png" alt="smoke" />
            </div>
            <div className="smoke-wrap">
                <img className="smoke2" src="images/smoke.png" alt="smoke" />
            </div>
            <div className="smoke-wrap">
                <img className="smoke3" src="images/smoke.png" alt="smoke" />
            </div>
        </motion.div>
    )
}