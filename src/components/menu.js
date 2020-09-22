import React from "react"

const MainMenu = () => {
  return (
    <div className="flex flex-col mt-6 md:flex-row">
      <a href="https://medium.com/@codebykev" target="_blank" rel="noreferrer">
        <Button className="p-3 mt-4 md:mr-4 md:mt-0">Personal Blog</Button>
      </a>
      <Link to="/about/">
        <Button className="p-3 mt-4 md:mr-4 md:mt-0">About me</Button>
      </Link>
      <a href="/resume-kevincjones-2020.pdf" target="_blank" rel="noreferrer">
        <Button className="p-3 mt-4 md:mr-4 md:mt-0">My CV</Button>
      </a>
    </div>
  )
}

export default MainMenu
