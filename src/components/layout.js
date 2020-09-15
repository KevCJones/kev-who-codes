import React from "react"

class Layout extends React.Component {
  render() {
    const { children, image } = this.props
    return (
      <div
        className="w-full leading-6 bg-black bg-opacity-50 bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <main className="container flex flex-col flex-wrap items-center content-center min-h-screen px-3 mx-auto md:flex-row">
          {children}
        </main>
      </div>
    )
  }
}

export default Layout
