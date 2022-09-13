import { useCallback, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { variants_header } from "../../utils/variants-framer-motion/variants";
import { RouteChangeContext } from "../../context/routeChangeContext";

export const Header = () => {
    const [menu, setMenu] = useState("");
    const { pathname } = useLocation()

    const { isVisible, setIsVisible } = useContext(RouteChangeContext)

    const nav = ["Home", "About", "Work"];

    const handleMenu = useCallback(() => {
        !menu ? setMenu("encendido") : setMenu("")
    }, [menu])

    const handleMenuLink = useCallback(() => {
        setMenu("")
        setIsVisible(false)
        setTimeout(() => {
            setIsVisible(true)
        }, 1000)
    }, [menu])

    return (
        <AnimatePresence>
            {isVisible &&
                <motion.header
                    className="header"
                    {...variants_header}
                >
                    <div className="logo">
                        <span>BC</span>
                    </div>
                    <ul className={!menu ? "nav-links" : "nav-links nav-active"} >
                        {
                            nav.map((link, index) =>
                                <li key={link} onClick={handleMenuLink}
                                    style={
                                        menu === "" ?
                                            {} :
                                            { "animation": `navLinkFade 0.5s ease forwards ${index / 7 + .2}s` }
                                    }
                                >
                                    <Link
                                        className={pathname === "/" + link.toLocaleLowerCase() ? "neon-link" : pathname === "/" && link === "Home" ? "neon-link" : ""}
                                        to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                        data-text={link}
                                    >
                                        <span id={link}>{link}
                                        </span>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                    <div id="hamburguesa" onClick={handleMenu}>
                        <div className={!menu ? "" : "linea1"}></div>
                        <div className={!menu ? "" : "linea2"}></div>
                        <div className={!menu ? "" : "linea3"}></div>
                    </div>
                </motion.header>
            }
        </AnimatePresence>
    )
}