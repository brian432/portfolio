import { createContext, useState } from "react";

export const CarouselContext = createContext()

export const CarouselProvider = ({children}) => {
    //Estados que actualizan la imagen dentro del carousel
    const imagenes = ["ecommerce-shoes", "movies-and-series", "Nasa-App", "portfolio"]
    const [numero, setNumero] = useState(0)
    const [imagen, setImagen] = useState(imagenes[numero])

    //Estados que manejan la rotacion de la animacion del carousel
    const [imageRotation, setImageRotation] = useState("")
    const [button, setButton] = useState(false)

    const handleClick = (event) => {
        const arrow = event.target.id;
    
        setButton(true)
        setImageRotation(arrow)
    
        if (arrow === "next") {
            setNumero(prev => prev + 1)
            setTimeout(() => {
                setImagen(imagenes[numero + 1])
            }, 800)
        } else if (arrow === "previus") {
            setNumero(prev => prev - 1)
            setTimeout(() => {
                setImagen(imagenes[numero - 1])
            }, 800)
        }
    
        setTimeout(() => {
            setImageRotation("")
            setButton(false)
        }, 1200)
    }

    return (
        <CarouselContext.Provider
        value={{
            imagenes, 
            numero, 
            setNumero, 
            imagen, 
            setImagen, 
            imageRotation, 
            setImageRotation, 
            button, 
            setButton,
            handleClick
        }}
        >
            {children}
        </CarouselContext.Provider>
    )
}