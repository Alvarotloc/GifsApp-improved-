import { FC, useContext, useState } from 'react';
import { GifsContext } from "../context"

export const AgregarInput:FC = ():JSX.Element => {
    const {agregarCategoria, categoriaTemporal, setCategoriaTemporal} = useContext(GifsContext);
  return (
    <form className="my-5 w-full" onSubmit={agregarCategoria}>
        <fieldset className="flex flex-col space-y-2  sm:flex-row sm:space-x-2 sm:space-y-0 w-full">
            <input type="text" placeholder="Buscar gifs..." value={categoriaTemporal} onChange={(e) => setCategoriaTemporal(e.target.value)} className="border rounded-md border-gray-300 py-1 pl-2 w-full sm:w-2/3" />
            <input type="submit" value="Buscar Gifs" className="sm:w-1/3 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer rounded-md transition-colors py-1"/>
        </fieldset>
    </form>
  )
}
