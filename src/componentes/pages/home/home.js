import { motion } from "framer-motion"
import { Smoke } from "../../smoke/smoke"

import { variants_home_name, variants_home_parrafo } from "../../../utils/variants-framer-motion/variants"

export const Home = () => {
    const nombre = ["B", "r", "i", "a", "n"]
    const apellido = ["C", "a", "b", "r", "e", "r", "a"]
    return (
        <div>
            <Smoke />
            <div className="home hero-container">
                <div className='container-name'>
                    <div >
                        {
                            nombre.map((text, i) =>
                                <motion.h2
                                    key={text + i}
                                    custom={i}
                                    variants={variants_home_name}
                                    initial={i % 2 === 1 ? "hidden1" : "hidden2"}
                                    animate="visible"
                                    exit={i % 2 === 1 ? "exit1" : "exit2"}
                                    className="hero glitch layers"
                                    data-text={text}>
                                    <span>
                                        {text}
                                    </span>
                                </motion.h2>
                            )
                        }
                    </div>
                    <div>
                        {
                            apellido.map((text, i) =>
                                <motion.h2
                                    key={text + i}
                                    custom={i}
                                    variants={variants_home_name}
                                    initial={i % 2 === 0 ? "hidden1" : "hidden2"}
                                    animate="visible"
                                    exit={i % 2 === 1 ? "exit1" : "exit2"}
                                    className="hero glitch layers"
                                    data-text={text}>
                                    <span>
                                        {text}
                                    </span>
                                </motion.h2>
                            )
                        }
                    </div>
                </div>
                <motion.div
                    {...variants_home_parrafo}
                >
                    <p
                        className="hero glitch layers parrafo"
                        data-text="Frontend-Developer"
                    >
                        <span>Frontend </span>
                        <span>Developer</span>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}