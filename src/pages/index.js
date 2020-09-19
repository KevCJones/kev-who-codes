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
        <div className="w-full my-6 md:my-8">
          <ProfileImage />
        </div>
        <div className="flex flex-col max-w-5xl p-4 m-auto md:flex-row">
          <div className="pb-4 md:mr-3 md:w-2/5">
            <h1 className="text-2xl prose text-nearwhite">
              Hello, I’m{" "}
              <span className="font-serif text-primary ">Kevin Jones</span>.{" "}
              <br />A tech lead powered by coffee, author of{" "}
              <a href="https://www.npmjs.com/package/ngx-simple-modal">
                ngx-simple-modal
              </a>
              , addicted to solving interesting problems.
            </h1>
            <SocialIcons />
          </div>
          <div className="md:w-3/5 md:ml-3">
            <p className="mt-8 text-xl prose text-nearwhite md:mt-0">
              <span className="font-serif text-primary">Tech Lead</span> with{" "}
              {new Date().getFullYear() - 2004} years professionally developing
              software with{" "}
              <span className="font-serif text-primary">
                10+ in leadership roles
              </span>
              . Leads from the front and specialises in forging a team that
              communicates effectively, values{" "}
              <span className="font-serif text-primary">clean code</span> that's
              well tested,{" "}
              <span className="font-serif text-primary">
                fast release cycles
              </span>{" "}
              and short feedback loops. No two teams are ever alike, finding
              what makes them tick is the most interesting challenge.
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
