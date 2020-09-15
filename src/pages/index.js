import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "CODEBYKEV.DEV"

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        image={"./bg_optim.jpg"}
      >
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            "kevincjones.co.uk",
            "kevcjones",
            "codebykev",
          ]}
        />
        <img
          src="./kev.jpg"
          className="w-64 h-64 m-4 mx-auto mt-12 leading-8 border-2 border-gray-400 border-solid rounded-full shadow-lg md:my-4"
          alt="KevCJones"
        />
        <div className="flex flex-col p-6 md:flex-row">
          <h1 class="prose font-serif block md:w-2/5 text-2xl text-white pb-4 md:mr-3">
            Hello, I’m <span className="text-blue-600">Kevin Jones</span>.{" "}
            <br />
            Ambitious, driven and communicative. Father and a tech lead.
          </h1>
          <div class="md:w-3/5 md:ml-3">
            <p class="prose text-white">
              Currently a Lead Frontend Engineering with{" "}
              {new Date().getFullYear() - 2004} years of web application
              engineering. Addicted to solving interesting problems and helping
              teams build well tested maintainable applications that they can be
              proud of. I lead from the front and work with the engineers,
              product and design to foster a common understanding of their
              domain problems we’re solving together.
            </p>
            <div className="flex flex-col mt-8 md:flex-row">
              <Link to="/blog/">
                <Button className="p-3 mt-4 md:mr-4 md:mt-0">The Blog</Button>
              </Link>
              <Link to="/about/">
                <Button className="p-3 mt-4 md:mr-4 md:mt-0">About me</Button>
              </Link>
              <Link to="/cv/">
                <Button className="p-3 mt-4 md:mr-4 md:mt-0">My CV</Button>
              </Link>
              <Link to="/contact/">
                <Button className="p-3 mt-4 md:mr-4 md:mt-0">Contact me</Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
