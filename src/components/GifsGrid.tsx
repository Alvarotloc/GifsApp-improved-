import { FC, useContext } from 'react';
import { GifsContext } from '../context';
import { GifCard } from "./"

export const GifsGrid:FC = ():JSX.Element => {
    const {gifs} = useContext(GifsContext);
  return (
    <section className="w-full md:w-3/6 lg:w-4/6 flex flex-col items-center px-10">
            {gifs.length === 0 ? (
                <h1 className='text-center text-2xl font-semibold'>No hay gifs disponibles</h1>
            ) : (
                <>
                <h1 className="text-3xl font-semibold mb-5">Últimos Gifs</h1>
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {gifs.map((gif) => (
                        <GifCard key={gif.id} nombre={gif.title} urlImagen={gif.images.original.webp}/>
                    ))}
                </div>
                </>
            )}
    </section>
  )
}
