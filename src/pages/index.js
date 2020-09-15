import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { SocialIcon } from "react-social-icons"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "CODEBYKEV.DEV"

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        bg={"bg-keyboard-lg"}
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
          class="w-64 h-64 m-4 mx-auto mt-12 leading-8 border-2 border-blue-600 border-solid rounded-full shadow-lg md:my-4"
          alt="KevCJones"
        />
        <div class="flex flex-col p-6 md:flex-row">
          <div class="pb-4 md:mr-3 md:w-2/5">
            <h1 class="prose font-serif text-2xl text-white">
              Hello, I’m <span class="text-blue-600">Kevin Jones</span>. <br />
              Ambitious, driven and communicative. Father and a tech lead.
            </h1>
            <SocialIcon
              style={{
                height: 25,
                width: 25,
                marginRight: "0.5em",
                marginTop: "1em",
              }}
              bgColor="#3182ce"
              fgColor="#fff"
              url="http://twitter.com/kevcjones"
              className="duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
            <SocialIcon
              style={{
                height: 25,
                width: 25,
                marginRight: "0.5em",
                marginTop: "1em",
              }}
              bgColor="#3182ce"
              fgColor="#fff"
              url="https://www.linkedin.com/in/kevin-c-jones-7a22372/"
              className="duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
            <SocialIcon
              style={{
                height: 25,
                width: 25,
                marginRight: "0.5em",
                marginTop: "1em",
              }}
              bgColor="#3182ce"
              fgColor="#fff"
              url="https://github.com/kevcjones"
              className="duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
            <SocialIcon
              style={{
                height: 25,
                width: 25,
                marginRight: "0.5em",
                marginTop: "1em",
              }}
              network="whatsapp"
              bgColor="#3182ce"
              fgColor="#fff"
              url="https://t.me/codebykev"
              className="duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>
          <div class="md:w-3/5 md:ml-3">
            <p class="prose text-white">
              Currently a Lead Frontend Engineering with{" "}
              {new Date().getFullYear() - 2004} years of web application
              engineering experience. Addicted to solving interesting problems
              and helping teams build well-tested maintainable applications that
              they can be proud of. I lead from the front and work with the
              engineers, stakeholders and designer to foster a ubiquitous
              language for the domain we're talking about. The best teams are
              those who feel like they have ownership, autonomy and support to
              deliver.
            </p>
            <div class="flex flex-col mt-8 md:flex-row">
              <Link to="/blog/">
                <Button className="p-3 mt-4 md:mr-4 md:mt-0">The Blog</Button>
              </Link>
              <Link to="/about/">
                <Button className="p-3 mt-4 md:mr-4 md:mt-0">About me</Button>
              </Link>
              <Link to="/cv/">
                <Button className="p-3 mt-4 md:mr-4 md:mt-0">My CV</Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
