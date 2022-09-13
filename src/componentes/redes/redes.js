import { AnimatePresence, motion } from "framer-motion"
import { useContext } from "react"
import { RouteChangeContext } from "../../context/routeChangeContext"

import { container_redes, item_redes, linea_redes } from "../../utils/variants-framer-motion/variants"

export const Redes = () => {
    const redes=["mailto:brian_cabrera123@outlook.es", "https://github.com/brian432", "https://www.linkedin.com/in/brian-cabrera1"]
    const icons = ["far fa-envelope", "fa-github", "fa-linkedin-in"]
    const { isVisible } = useContext(RouteChangeContext)

    return (
        <AnimatePresence>
            {
                isVisible &&
                <motion.div
                    className='links-redes'
                    variants={container_redes}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {
                        redes.map((elem, index) =>
                            <motion.div
                                key={elem}
                                className='works'
                                variants={item_redes}
                                data-text="[]"
                            >
                                <a href={elem} target="blank" >
                                    <i className={`fab ${icons[index]}`} />
                                </a>

                            </motion.div>
                        )
                    }
                    <motion.span
                        className='linea'
                        {...linea_redes}
                    />
                </motion.div>
            }
        </AnimatePresence>
    )
}