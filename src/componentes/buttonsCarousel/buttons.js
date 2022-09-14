import { useContext } from "react"
import { CarouselContext } from "../../context/carouselContext"

export const Buttons = () => {
    const { handleClick, numero, imagen, imagenes } = useContext(CarouselContext)

    const handleOnClick = (e) => {
        handleClick(e)
    }

    const atributos = {
        onClick: handleOnClick,
        style: {
            color: imagen === "goscrum" ? "black" : "white"
        }
    }
    return (
        <>
            {
                numero === 0 ?
                    <i
                        className="fas fa-chevron-right"
                        {...atributos}
                        id="next"
                    /> :
                    numero === imagenes?.length - 1 ?
                        <i className="fas fa-chevron-left"
                            id="previus"
                            {...atributos}
                        /> :
                        <>
                            <i
                                className="fas fa-chevron-right"
                                id="next"
                                {...atributos}
                            />
                            <i className="fas fa-chevron-left"
                                id="previus"
                                {...atributos}
                            />
                        </>
            }
        </>
    )
}