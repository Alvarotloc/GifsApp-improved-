export interface IChildren {
  children: JSX.Element | JSX.Element[];
}

export interface IGifsContextProps {
  categories: string[];
  agregarCategoria: (event: React.FormEvent<HTMLFormElement>) => void;
  categoriaTemporal: string;
  setCategoriaTemporal: Function;
}
