export const variants_header = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: .8,
        }
    },
    exit: {
        opacity: [0.8, 0]
    }
}

//redes

export const container_redes = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            wheen: "beforeChildren",
            delayChildren: .3,
            staggerChildren: 0.2
        }
    },
    exit: {
        transition: {
            wheen: "afterChildren",
            staggerChildren: 0.2
        }
    }
}

export const item_redes = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        scale: [0, 1.5, 1],
        transition: {
            type: "spring",
        }
    },
    exit: {
        scale: [1, 1.5, 0],
        transition: {
            type: "spring",
            duration: .3
        }
    }
}

export const linea_redes = {
    initial: {
        height: 0
    },
    animate: {
        height: "5rem",
        transition: {
            type: "spring",
            duration: .8
        }
    },
    exit: {
        height: 0,
        transition: {
            type: "spring",
            duration: .8,
            delay: .6
        }
    }
}

//Home

export const variants_home_name = {
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: .8
        },
    }),
    hidden1: {
        opacity: 0,
        y: -50
    },
    hidden2: {
        opacity: 0,
        y: +50
    },
    exit1: {
        y: +50,
        opacity: 0,
        transition: {
            duration: .8
        }
    },
    exit2: {
        y: -50,
        opacity: 0,
        transition: {
            duration: .8
        }
    }
}

export const variants_home_parrafo = {
    initial: {
        opacity: 0,
        y: +50
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        y: +50,
        opacity: 0
    },
    transition: {
        duration: .8
    }
}

//About

export const variants_about_img = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: -100,
        opacity: 0,
    },
    transition: {
        duration: .8
    }
}

export const variants_about_description = {
    initial: {
        x: +100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: +100,
        opacity: 0,
    },
    transition: {
        duration: .8
    }
}

export const variants_about_title = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
    transition: {
        duration: .8
    }
}


//work

export const variants_work_h1 = {
    initial: {
        opacity: 0,
        y: -100
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: -100
    },
    transition: {
        duration: .8
    }

}

export const variants_work_carousel = {
    initial: {
        opacity: 0,
        y: +100
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: +100
    },
    transition: {
        duration: .8
    }
}