import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Box = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x + 10,
            y: mousePosition.y + 10
        }
    };

    return (
        <motion.div
            className="cursor circle"
            variants={variants}
            animate="default"
        >
            <svg>
                <filter id="wavy">
                    <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
                        <animate attributeName="baseFrequency" dur="60s" values="0.02; 0.005; 0.02" repeatCount="indefinite" />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="12" />
                </filter>
            </svg>
        </motion.div>

    );
};