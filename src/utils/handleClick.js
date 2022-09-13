export const handleClick = (event, setButton, setImageRotation, setNumero, setImagen, imagenes, numero) => {
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