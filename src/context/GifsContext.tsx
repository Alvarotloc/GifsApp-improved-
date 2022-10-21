import { createContext, FC, useState } from "react";
import { DatosGIF, Gifs, IChildren, IGifsContextProps } from "../interfaces";
import { toast } from 'react-toastify';

export const GifsContext = createContext({} as IGifsContextProps);

export const GifsProvider: FC<IChildren> = ({ children }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriaTemporal, setCategoriaTemporal] = useState<string>("");
  const [gifs, setGifs] = useState<DatosGIF[]>([])

  const agregarCategoria = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (categoriaTemporal.trim() === "") {
        toast.error('Campo requerido')
        return
    };
    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${categoriaTemporal}&limit=9`)
        const respuestaGifs:Gifs = await resp.json();
        setGifs(respuestaGifs.data)
        setCategories([...categories, categoriaTemporal]);
        setCategoriaTemporal('');
        toast.success('Gifs Buscados con éxito')
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <GifsContext.Provider
      value={{
        categories,
        agregarCategoria,
        categoriaTemporal,
        setCategoriaTemporal,
        gifs
      }}
    >
      {children}
    </GifsContext.Provider>
  );
};
