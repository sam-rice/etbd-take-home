import { FC } from "react"
import Header from "./Header"
import TourSearch from "./TourList"

const App: FC = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="flex min-h-screen flex-col items-center w-[1200px]">
        <Header />
        <main className="w-full flex-1">
          <TourSearch />
        </main>
        <footer className="w-full text-right my-1 text-sm">
          created by Sam Rice | view on{" "}
          <a
            className="text-theme-blue-400 hover:underline"
            href="https://github.com/sam-rice/etbd-take-home"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
