import { Link } from "gatsby"
import React from "react"
import SocialIcons from "./social-icons"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={`w-full leading-6 bg-slategrey`}>
        <header className="flex items-center flex-shrink-0 p-6">
          <Link to="/" className="w-64 m-auto">
            <img src="/logo/default-monochrome.svg" alt="codebykev.dev logo" />
          </Link>
        </header>
        <main className="flex flex-col flex-wrap items-center content-start min-h-screen mx-auto md:flex-row">
          {children}
        </main>
        <footer className="flex flex-row items-center justify-center w-full p-4 bg-nearblack">
          <SocialIcons />
          <span className="ml-4 text-white">Copyrights codebykev.dev</span>
        </footer>
      </div>
    )
  }
}

export default Layout
