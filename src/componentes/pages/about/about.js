import { motion } from "framer-motion"
import { variants_about_img, variants_about_description, variants_about_title } from "../../../utils/variants-framer-motion/variants"

export const About = () => {
    return (
        <div className='container'>
            <motion.div
                style={{ backgroundImage: "url(images/avatar.png)" }}
                className='glitch-img'
                {...variants_about_img}
            >
                <div className='channel r' />
                <div className='channel g' />
                <div className='channel b' />
            </motion.div >
            <motion.div className='container-about hero-container' >
                <motion.div
                    className='div-about'
                    {...variants_about_description}  
                >
                    <p>
                        Mi nombre es Brian y soy un desarrollador front-end. Me encanta crear sitios web simples con una gran experiencia de usuario.
                        <br /><br />
                        Me gusta construir todo tipo de proyectos. Soy una persona que se motiva a si misma y que tiene pasión por los detalles.
                        <br /><br />
                        Estoy en continuo aprendizaje de nuevas tecnologías y predispuesto a asumir nuevos desafíos.
                    </p>
                </motion.div>
                <motion.h1
                    className='hero glitch layers'
                    data-text="ABOUT"
                    {...variants_about_title}
                >
                    <span>ABOUT</span>
                </motion.h1>
            </motion.div>
        </div >
    )
}