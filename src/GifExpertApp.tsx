import { FC } from "react"
import { GifsGrid, Sidebar } from "./components";

export const GifExpertApp:FC = ():JSX.Element => {

  return (
    <main className="py-10 px-5 w-full flex flex-col sm:flex-row items-center  sm:justify-center sm:items-start space-y-10 sm:space-y-0">
        <Sidebar />
        <GifsGrid />
    </main>
  )
}
