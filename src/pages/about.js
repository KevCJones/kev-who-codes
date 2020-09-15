import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} bg={"bg-keyboard-lg"}>
        <SEO title="About" />
        <div class="container max-w-lg m-auto">
          <h1 class="text-3xl prose font-serif text-blue-600 mb-3 mt-6">
            About me
          </h1>
          <p class="text-white prose">
            This is probably going to change, but i felt maybe as a first
            version an FAQ might be the right format for now.
          </p>
          <h3 class="text-2xl prose font-serif text-blue-600 mb-3 mt-6">
            Do you even code then?
          </h3>
          <p class="text-white prose">
            Yes, a lot currently, this varies depending on the team size. I've
            always been a hands on, lead from the front kind of tech lead.
            Perhaps one day i'll hang up the coding hat and go full swing into
            leadership but while i'm still enjoying it and contributing i'll
            probably always have something i'm working on.
          </p>
          <h3 class="text-2xl prose font-serif text-blue-600 mt-6 mb-3">
            What's your stack then?
          </h3>
          <p class="text-white prose">
            I don't believe in there being a one size fits all, you must always
            weigh the tools strengths against the problem that you're solving
            and the timeline you need to solve it within. I'm doing a lot of
            Angular right now and NodeJS but i'm starting a new journey using
            .NET Core and so far, it's good.
          </p>
          <h3 class="text-2xl prose font-serif text-blue-600 mt-6 mb-3">
            What are your core principles?
          </h3>
          <p class="text-white prose mt-4 font-hairline">
            <span class="font-bold font-serif text-blue-600">
              People first.
            </span>{" "}
            I'm a lead from the front kind of manager. I will earn your respect
            by being in the trenches with you and being open and honest about
            where we are, and where we need to get to and why. I've kept my
            teams well informed, and make it my mission to help them improve and
            grow. A team that feels like it has ownership, a clear path and
            autonomy will always perform.
          </p>
          <p class="text-white prose mt-4 font-hairline">
            <span class="font-bold font-serif text-blue-600">
              Just enough design up front
            </span>{" "}
            It's always about balance. When i'm working in a team, experience
            has shown me that if a team just jumps in both feet then you end up
            with a winding road, you get there eventually, but it wasn't an
            efficient strategy. Instead i prefer to embrace the principles of
            DDD (Domain drive design), bring together the stakeholders,
            designers and developers and ensure we all speak the same language
            and have a common way of describing the domain we're building
            software in. There is nothing worse that when every layer of the
            business has its own names and terms for the same things.
          </p>
          <p class="text-white prose mt-4 font-hairline">
            <span class="font-bold font-serif text-blue-600">
              Well tested code
            </span>{" "}
            I'm an advocate of well tested code and tell defined acceptance
            criteria. This does mean I always demand TDD from my team. I will
            expect that we test the right things, in the right ways to provide
            decent coverage for the codebase. Testing for me is both
            documentation of the intent of the developer who wrote the code and
            it's a safety net to breaking changes. My advice to any team is to
            try and not test implementation, test the behaviour. Testing that is
            focused on implementation will lock you in and not allow you to
            safely refactor. If you find a bug, write a test to replicate it,
            fix it and deploy. I ask for very few end to end tests, they're best
            done in my experience as smoke tests for critical path operations of
            the app e.g. sign in, purchase etc. I don't believe in long
            end-to-end test runs. Anyone whose tried to do this will know what
            i'm talking about, those who don't should give it a go, pain is a
            great a teacher.
          </p>
          <p class="text-white prose mt-4 font-hairline">
            <span class="font-bold font-serif text-blue-600">
              Continuous deployment, fast feedback
            </span>{" "}
            I've had to implement a number of pipelines over the last 15 years.
            The best ones are those which foster small development cycles, with
            a trunk based development approach that you release as often as is
            safe to do so. I implement as much automation as i can to let the
            bots do the bots work, so tools like Sonarcloud are a must.
          </p>
          <p class="text-white prose mt-4 font-hairline">
            <span class="font-bold font-serif text-blue-600">
              Useful ticket, appropiate knowledge usage
            </span>{" "}
            Everyone has opinions on how you should use systems like JIRA and
            Confluence. I've done it well and i've done it badly. I will
            probably write a blog post this. Clearly seperate your backlog from
            your vision pieces, vision is good for knowing where you're going to
            get to eventually but the work in progress should be clear, well
            defined and have a definition of done. Don't fill your backlogs with
            vision tickets, keep that stuff in a knowledge base. When you're
            working with product to identify the next most valuable thing to do
            you will know where you are, where the vision wants you to get and
            then how much you [the team] are going to commit to to move it
            towards the goal. The tickets will then only contain the iteration.
          </p>
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
