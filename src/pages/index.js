import { Link } from "gatsby"
import React from "react"
import Button from "../components/button"
import Divider from "../components/divider"
import Layout from "../components/layout"
import MainMenu from "../components/menu"
import ProfileImage from "../components/profile-image"
import SEO from "../components/seo"
import SocialIcons from "../components/social-icons"

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
        <div
          id="home"
          className="flex flex-col items-center justify-center w-full splash-height"
        >
          <div className="max-w-5xl p-6 m-auto">
            <h1 className="mt-2 text-2xl prose text-center md:text-4xl text-nearwhite">
              Hello, I’m{" "}
              <span className="font-serif text-primary ">Kevin Jones</span>.{" "}
              <br />A tech lead powered by coffee, author of{" "}
              <a href="https://www.npmjs.com/package/ngx-simple-modal">
                ngx&#8209;simple&#8209;modal
              </a>
              , addicted to solving interesting problems.
            </h1>
            <Link to="#about">
              <Button className="w-32 p-3 m-auto mt-8">Learn more</Button>
            </Link>
          </div>
          <Divider styles={{ bottom: "-8rem", color: "#fff" }} />
        </div>
        <div id="about" className="w-full mt-32 bg-white">
          <div className="flex flex-col max-w-6xl min-h-screen p-8 m-auto">
            <h2 className="m-8 font-serif text-4xl text-center">About</h2>
            <div className="flex flex-col items-center md:flex-row md:mt-8">
              <div className="w-full md:w-2/5">
                <ProfileImage />
              </div>
              <div className="w-full md:w-3/5">
                <p className="mt-8 text-xl prose text-nearblack md:mt-0">
                  <span className="font-serif text-secondary">Tech Lead</span>{" "}
                  with {new Date().getFullYear() - 2004} years professionally
                  developing software with{" "}
                  <span className="font-serif text-secondary">
                    10+ in leadership roles
                  </span>
                  . Leads from the front and specialises in forging a team that
                  communicates effectively, values{" "}
                  <span className="font-serif text-secondary">clean code</span>{" "}
                  that's well tested,{" "}
                  <span className="font-serif text-secondary">
                    fast release cycles
                  </span>{" "}
                  and short feedback loops. No two teams are ever alike, finding
                  what makes them tick is the most interesting challenge.
                </p>
                <MainMenu />
              </div>
            </div>
          </div>
          <Divider styles={{ color: "#15171e", transform: "rotate(180deg)" }} />
        </div>
        <div id="contact" className="w-full mt-32 bg-slategrey">
          <div className="flex flex-col max-w-6xl min-h-screen p-8 m-auto">
            <h2 className="m-8 font-serif text-4xl text-center text-white">
              Connect with me
            </h2>
            <div className="flex flex-row items-center justify-center scale-150">
              <SocialIcons />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
