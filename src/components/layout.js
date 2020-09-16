import React from "react"
import { Link } from "gatsby"
import ParticlesBG from "./particles-bg"

class Layout extends React.Component {
  render() {
    const { children, bg } = this.props
    return (
      <div
        className={`w-full leading-6 bg-cover bg-gradient-to-b from-black to-nearblack ${bg}`}
      >
        <ParticlesBG />
        <div className="flex items-center flex-shrink-0 p-6">
          <Link to="/" className="w-64 m-auto">
            <img src="/logo/default-monochrome.svg" alt="codebykev.dev logo" />
          </Link>
        </div>
        <main className="container flex flex-col flex-wrap items-center content-start min-h-screen px-3 mx-auto md:flex-row">
          {children}
        </main>
      </div>
    )
  }
}

export default Layout
