import { createContext, useState } from "react";

export const RouteChangeContext = createContext()

export const RouteChangeProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <RouteChangeContext.Provider
            value={{
                isVisible,
                setIsVisible
            }}
        >
            {children}
        </RouteChangeContext.Provider>
    )
}