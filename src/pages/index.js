import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { SocialIcon } from "react-social-icons"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} bg={"bg-keyboard-lg"}>
        <SEO
          title="Home"
          keywords={[
            `lead`,
            `techlead`,
            `frontend`,
            `backend`,
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
          class="w-64 h-64 m-4 mx-auto my-8 leading-8 border-2 border-blue-600 border-solid rounded-full shadow-lg md:my-12"
          alt="KevCJones"
        />
        <div class="flex flex-col p-4 md:flex-row">
          <div class="pb-4 md:mr-3 md:w-2/5">
            <h1 class="prose font-serif text-2xl text-white">
              Hello, I’m <span class="text-blue-600">Kevin Jones</span>. <br />A
              tech lead powered by coffee, wearer of many hats, addicted to
              solving interested problems.
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
              className="duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
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
              className="duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
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
              className="duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
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
              className="duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-125"
            />
          </div>
          <div class="md:w-3/5 md:ml-3">
            <p class="prose text-white text-lg mt-8 md:mt-0">
              <span class="text-blue-600">Lead Frontend Engineer</span> with{" "}
              {new Date().getFullYear() - 2004} years of professional software
              development experience. Leads from the front, optimising people
              and a team's performance. Specialises in forging a team that
              values tested extendable code, fast release cycles and short
              feedback loops. The best teams take pride and have a sense of
              ownership in the products they ship. Thinks in systems and flows,
              and is the eternal student. Every day is a school day.
            </p>
            <div class="flex flex-col mt-8 md:flex-row">
              <a
                href="https://medium.com/@codebykev"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="p-3 mt-4 md:mr-4 md:mt-0">
                  Personal Blog
                </Button>
              </a>
              <Link to="/about/">
                <Button className="p-3 mt-4 md:mr-4 md:mt-0">About me</Button>
              </Link>
              <a
                href="/resume-kevincjones-2020.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button className="p-3 mt-4 md:mr-4 md:mt-0">My CV</Button>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
