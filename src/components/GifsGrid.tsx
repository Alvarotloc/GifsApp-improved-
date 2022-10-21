import { FC } from "react"
import { GifCard } from "./"

export const GifsGrid:FC = ():JSX.Element => {
  return (
    <section className="w-full md:w-3/6 lg:w-4/6 flex flex-col items-center px-10">
        <h1 className="text-3xl font-semibold mb-5">Últimos Gifs</h1>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            <GifCard />
            <GifCard />
            <GifCard />
        </div>
    </section>
  )
}
