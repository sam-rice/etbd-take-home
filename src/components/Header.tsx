import { FC } from "react"

const Header: FC = () => {
  return (
    <header className="bg-theme-gray-100 h-24 w-full">
      <a className="contents" href="/">
        <img
          className="h-full"
          src="https://d2zwvgyp7l6t28.cloudfront.net/assets/ricksteves-europe-9cf480b62090d6c670b0e80d09f97a3b3b0983a2cbf15fddfe52decfafbb8e6b.svg"
          alt="Rick Steves' Europe logo"
        />
      </a>
    </header>
  )
}

export default Header
