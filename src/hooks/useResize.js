import { useState, useEffect } from "react"
export const useResize = () => {
    const [isPhone, setIsPhone] = useState(
        window.innerWidth > 590 ? true : false
    )
    const [isTablet, setIsTablet] = useState(
        window.innerWidth > 690 ? true : false
    )
    const handleResize = () => {
        if (window.innerWidth < 690) setIsTablet(true)
        else setIsTablet(false)
        if (window.innerWidth < 590) setIsPhone(true)
        else setIsPhone(false)
    }
    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [isTablet, isPhone])

    return { isPhone, isTablet }
}