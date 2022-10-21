import { FC, useContext } from "react";
import { GifsContext } from "../context";
import { AgregarInput } from "./";

export const Sidebar: FC = (): JSX.Element => {
    const {categories} = useContext(GifsContext);
  return (
    <aside className="w-3/4 md:w-3/6 lg:w-2/6">
      <h1 className="text-3xl font-semibold">GifExpertApp</h1>
      <AgregarInput />
      <ol className="list-decimal px-5 mt-5">
            {categories.map((categorie,index) => (
                <li key={index}>{categorie}</li>
            ))}
        </ol>
    </aside>
  );
};
