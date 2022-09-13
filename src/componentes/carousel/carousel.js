import { variants_work_carousel } from "../../utils/variants-framer-motion/variants"

import { motion } from "framer-motion"

import { Buttons } from "../buttonsCarousel/buttons"
import { useContext } from "react"
import { CarouselContext } from "../../context/carouselContext"
import { useResize } from "../../hooks/useResize"

export const Carousel = () => {
    const { button, imagen, imageRotation, numero } = useContext(CarouselContext)
    const { isTablet, isPhone } = useResize()

    return (
        <motion.div
            {...variants_work_carousel}
            className='div-carousel'
        >
            <div
                className='glitch-img div-absolute'
                style={{
                    backgroundImage: `url(images/${isPhone ? imagen + "-phone" : isTablet ? imagen + "-tablet" : imagen}.jpg)`,
                    display: button ? "none" : "block"
                }}
            >
                <div className='channel r' />
                <div className='channel g' />
                <div className='channel b' />
                <Buttons />
            </div>
            {
                [1, 2, 3].map((img, index) =>
                    <motion.div
                        key={img}
                        initial={{
                            rotate: 0
                        }}
                        animate={{
                            rotate: imageRotation === "" ? 0 : imageRotation === "next" ? 360 : -360, //imageRotation === "" => necesario para que se aplique la animacion de rotacion, si lo quitamos solo se aplica la opacidad
                            opacity: imageRotation === "" ? 1 : [1, 0, 1], // imageRotation !== "" => se aplica la animacion de la opacidad
                            transition: {
                                type: "spring",
                                duration: imageRotation === "" ? 0 : 1.2, // imageRotation === "" => la duracion de la rotacion es 0 
                                delay: imageRotation === "" ? 0 : `0.${img}`
                            }
                        }}
                        style={{ backgroundImage: `url(images/${isPhone ? imagen + "-phone" : isTablet ? imagen + "-tablet" : imagen}.jpg)` }}
                        className={`img${index} div-absolute`}
                    >
                    </motion.div>
                )
            }
            <div
                className="div-buttons"
                style={{ display: button ? "none" : "flex" }}
            >
                <a className="neon-button" href={`https://brian432.github.io/${imagen}`} target="_blank" rel="noopener noreferrer">Proyecto</a>
                <a className="neon-button" href={`https://github.com/brian432/${imagen}`} target="_blank" rel="noopener noreferrer">Codigo</a>
            </div>
        </motion.div>
    )
}