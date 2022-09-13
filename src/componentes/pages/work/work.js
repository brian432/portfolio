import { motion } from "framer-motion"
import { variants_work_h1 } from "../../../utils/variants-framer-motion/variants"

import { Carousel } from "../../carousel/carousel"

export const Work = () => {
    
    return (
        <motion.div className='container-portafolio'>
            <div className='div-img'>
                <motion.h1
                    {...variants_work_h1}
                    className='hero glitch layers portfolio'
                    data-text="PORTFOLIO">
                    <span>PORTFOLIO</span>
                </motion.h1>
            </div>
        <Carousel />
        </motion.div>
    )
}