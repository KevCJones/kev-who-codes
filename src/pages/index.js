import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import SocialIcons from "../components/social-icons"
import ProfileImage from "../components/profile-image"

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
        <div className="w-full my-8 md:my-12">
          <ProfileImage />
        </div>
        <div className="flex flex-col max-w-5xl p-4 m-auto md:flex-row">
          <div className="pb-4 md:mr-3 md:w-2/5">
            <h1 className="font-serif text-2xl prose text-nearwhite">
              Hello, I’m <span className="text-primary">Kevin Jones</span>.{" "}
              <br />A tech lead powered by coffee, wearer of many hats, addicted
              to solving interested problems.
            </h1>
            <SocialIcons />
          </div>
          <div className="md:w-3/5 md:ml-3">
            <p className="mt-8 text-lg prose text-nearwhite md:mt-0">
              <span className="text-primary">Lead Frontend Engineer</span> with{" "}
              {new Date().getFullYear() - 2004} years of professional software
              development experience. Leads from the front, optimising people
              and a team's performance. Specialises in forging a team that
              values tested extendable code, fast release cycles and short
              feedback loops. The best teams take pride and have a sense of
              ownership in the products they ship. Thinks in systems and flows,
              and is the eternal student. Every day is a school day.
            </p>
            <div className="flex flex-col mt-8 md:flex-row">
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
