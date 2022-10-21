import { FC } from "react"
import { IGifCard } from "../interfaces"

export const GifCard:FC<IGifCard> = ({nombre,urlImagen}):JSX.Element => {
  return (
    <article className="bg-white rounded shadow p-2 h-56 hover:scale-110 transition-transform flex flex-col items-center justify-between">
        <img src={urlImagen} alt="Imagen de gif" className="h-3/4 w-full rounded"/>
        <h2 className="font-semibold">{nombre}</h2>
    </article>
  )
}
