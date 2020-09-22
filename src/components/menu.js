import { Link } from "gatsby"
import React from "react"
import Button from "./button"

const MainMenu = () => {
  return (
    <div className="flex flex-col mt-6 md:flex-row">
      <a href="https://medium.com/@codebykev" target="_blank" rel="noreferrer">
        <Button className="p-3 mt-4 md:mr-4 md:mt-0 border-secondary text-secondary hover:bg-secondary hover:text-white">
          Personal Blog
        </Button>
      </a>
      <a href="/resume-kevincjones-2020.pdf" target="_blank" rel="noreferrer">
        <Button className="p-3 mt-4 md:mr-4 md:mt-0 border-secondary text-secondary hover:bg-secondary hover:text-white">
          My CV
        </Button>
      </a>
    </div>
  )
}

export default MainMenu
