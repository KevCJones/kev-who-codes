import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Divider from "../components/divider"
import Button from "../components/button"

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="FAQ" />
        <div id="home" className="flex flex-col w-full">
          <div
            style={{ minHeight: "calc(100vh - 4.5rem)", marginTop: "-3rem" }}
          >
            <div class="py-20 max-w-3xl p-6 m-auto">
              <img
                className="m-auto"
                width="100px"
                src="/gift.svg"
                alt="Icons made by Freepik @flatIcon"
              />
              <h3 className="mt-6 mb-3 font-serif text-2xl prose text-primary">
                What is your offering?
              </h3>
              <p className="text-lg prose text-nearwhite">
                I have maintained, developed and shipped multiple projects from
                beginning to end, carrying the development of its' back-end and
                front-end codebases.
              </p>
              <p className="mt-2 text-lg prose text-nearwhite">
                My current toolset includes Angular, NodeJS and all the other
                various frameworks, libraries and technologies related to them.
                I'm also learning .NET Core. This site is a JAM stack using
                Gatsby, GraphQL and React. I value engineering ability over the
                tools you know right now, new tools come and go but engineers
                who value good principles will always be good engineers
                regardless.
              </p>
              <p className="mt-2 text-lg prose text-nearwhite">
                I can help you with all the sides of your project:
              </p>
              <div className="mt-2 ml-4 text-lg prose text-nearwhite">
                <ul>
                  <li>verifying good UI/UX design, </li>
                  <li>setting up the CI/CD pipelines,</li>
                  <li>mentoring the team,</li>
                  <li>researching possible techs</li>
                  <li>and monitoring the project.</li>
                </ul>
              </div>
            </div>
            <Divider styles={{ bottom: "0" }} />
          </div>
          <div className="min-h-screen bg-indigo-100">
            <div class="m-auto py-20 max-w-3xl p-6">
              <img
                className="m-auto"
                width="100px"
                src="/compass.svg"
                alt="Icons made by Freepik @flatIcon"
              />
              <h3 className="mt-6 mb-3 font-serif text-2xl prose text-secondary">
                List some of your Northstar principles?
              </h3>
              <p className="mt-4 font-sans text-lg prose text-nearblack">
                <span className="font-serif font-bold text-secondary">
                  People first.
                </span>{" "}
                I'm a lead from the front kind of manager. I will earn your
                respect by being in the trenches with you and being open and
                honest about where we are, and where we need to get to and why.
                I've always made it a point too keep my teams well informed, and
                make it my mission to help them channel their talents to
                establish a cadence of predictable, on-time delivery with
                high-quality work. A well-informed team that feels like it has
                ownership, a clear path and autonomy will always perform.
              </p>
              <p className="mt-4 font-sans text-lg prose text-nearblack">
                <span className="font-serif font-bold text-secondary">
                  Just enough design upfront.
                </span>{" "}
                It's always about balance. When I’m working in a team,
                experience has shown me that if a team just jumps in both feet
                then you end up with a winding road, you get there eventually,
                but it wasn't an efficient strategy. Instead, i prefer to
                embrace the principles of DDD (Domain drive design), bringing
                together the stakeholders, designers and developers and ensure
                we all speak the same language and have a common way of
                describing the domain we're building software in.
              </p>
              <p className="mt-4 font-sans text-lg prose text-nearblack">
                <span className="font-serif font-bold text-secondary">
                  Well tested code
                </span>{" "}
                This doesn't mean I always demand TDD from my team. I will
                expect that we test the right things, in the right ways to
                provide decent coverage for the codebase. Testing for me is both
                documentation of the intent of the developer who wrote the code
                and it's a safety net to breaking changes. My advice to any team
                is to try and not test implementation, test the behaviour.
                Testing that is focused on implementation will lock you in and
                not allow you to safely refactor. If you find a bug, write a
                test to replicate it, fix it and deploy. I ask for very few end
                to end tests, they're best done in my experience as smoke tests
                for critical-path operations of the app e.g. sign in, purchase
                etc. I don't believe in long end-to-end test runs. Anyone who
                tried to do this will know what I’m talking about, those who
                don't should give it a go, pain is a great a teacher.
              </p>
              <p className="mt-4 font-sans text-lg prose text-nearblack">
                <span className="font-serif font-bold text-secondary">
                  Continuous deployment, fast feedback. I'm a serial automator.
                </span>{" "}
                I've had to implement a number of pipelines over the last 15
                years. The best ones are those which foster small development
                cycles, with a trunk-based development approach that you release
                as often as is safe to do so. I implement as much automation as
                i can to let the bots do the bots work, so tools like Sonarcloud
                are a must. While some might preach a direct to trunk and deploy
                strategy i don't think a team consensus on code quality is
                something to overlook for many reasons but mostly because we'll
                write it once and ready it many times from then on, making sure
                code is easy to read and understand pays back by many factors in
                its lifetime.
              </p>
              <p className="mt-4 font-sans text-lg prose text-nearblack">
                <span className="font-serif font-bold text-secondary">
                  Useful ticket, appropriate documentation
                </span>{" "}
                Everyone has opinions on how you should use ticket and knowledge
                systems like JIRA and Confluence. I've done it well and I’ve
                done it badly. I will probably write a blog posts on both. Some
                key points i'll share for free:
                <ul>
                  <li>
                    Clearly separate your backlog from your vision pieces,
                    vision is good for knowing where you're going to get to
                    eventually but the work in progress should be clear, well
                    defined and have a definition of done.
                  </li>
                </ul>
                <li>
                  Tickets are a commitment by the team, if its not going to be
                  done, don't put it in the ticket.
                </li>
                <li>
                  Don't fill your backlogs with vision tickets, keep that stuff
                  in a knowledge base. When you're working with the product team
                  to identify the next most valuable thing to do you will know
                  where you are, where the vision wants you to get and then how
                  much you [the team] are going to commit to moving it towards
                  the goal. The tickets will then only contain the iteration.
                </li>
              </p>
            </div>
            <Divider
              styles={{ color: "#15171e", transform: "rotate(180deg)" }}
            />
          </div>
          <div className="min-h-screen">
            <div class="m-auto py-20 max-w-3xl p-6">
              <img
                className="m-auto"
                width="100px"
                src="/prototyping.svg"
                alt="Icons made by Freepik @flatIcon"
              />
              <h3 className="mt-6 mb-3 font-serif text-2xl prose text-primary">
                Do you design?
              </h3>
              <p className="text-lg prose text-nearwhite">
                I'm more of a systems thinker, i design software and prefer
                process and good UX conversations. While i did this site i
                wouldn't consider my design skills as good as some of the
                wizards I’ve worked with. I believe in putting the right people
                in the right seats to get the best job done. I am not the right
                person to design your website, but i am the right person to
                break down complicated processes into simpler quantifiable
                deliveries and then help a team execute.
              </p>
            </div>
            <Link to="/">
              <Button className="w-32 p-3 m-auto mt-8">Home</Button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
