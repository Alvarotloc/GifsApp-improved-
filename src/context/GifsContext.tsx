import { createContext, FC, useState } from "react";
import { IChildren, IGifsContextProps } from "../interfaces";
import { toast } from 'react-toastify';

export const GifsContext = createContext({} as IGifsContextProps);

export const GifsProvider: FC<IChildren> = ({ children }) => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
  const [categoriaTemporal, setCategoriaTemporal] = useState<string>("");

  const agregarCategoria = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (categoriaTemporal.trim() === "") {
        toast.error('Campo requerido')
        return
    };
    setCategories([...categories, categoriaTemporal]);
    setCategoriaTemporal('');
    toast.success('Gifs Buscados con éxito')
  };

  return (
    <GifsContext.Provider
      value={{
        categories,
        agregarCategoria,
        categoriaTemporal,
        setCategoriaTemporal,
      }}
    >
      {children}
    </GifsContext.Provider>
  );
};
