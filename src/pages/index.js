import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>Well fuck me, how did you find this?</h1>
        <p>
          Another blog, another go at making a presences in the interwebs... I'm
          Kev, born in '82, i code, i lead a team of other guys (not called Kev)
          that code also.
        </p>
        <p>
          I absolutely have not put any effort into this blog so far, if you're
          reading this.. it was not ready!
        </p>
        <p>There you go, introductions over.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
