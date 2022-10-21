import { FC } from "react"
import { Sidebar } from "./components";

export const GifExpertApp:FC = ():JSX.Element => {

  return (
    <main className="py-10 px-5 w-full">
        <Sidebar />
    </main>
  )
}
