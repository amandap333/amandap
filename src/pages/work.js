
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Resume from '../components/resume'

const WorkPage = ({ location }) => {

return (

  <Layout location={location}>
    <SEO
      title="About"
      metadata="About me!"
      description="this is all about me"
    />
    <div style={{}}>
    <Resume
    name="Amanda Proffit"
    firstName="Amanda"
    summary="I am a college graduate with an A.A.S. in Computer Information Systems, in search of a position to utilize my technical skills. Possess the ability to work well with others and have excellent research, problem solving and time management skills. "
    skill1="CSS"
    skill2="HTML"
    skill3="Time-management"
    skill4="Customer Service"
    skill5="React"
    skill6="Microsoft Office Suite"
    skill7="Git"
    skill8="Troubleshooting"
    experiences={[
      {
        company: "BSCS Science Learning",
        period: "January 2020 – Current",
        title: "Student Web Developer ",
        description: (
          <div>
            <ul className="list-disc">
              <li> Experience in front-end and back-end development </li>
              <li> Testing and debugging </li>
              <li> Proficient using React frameworks</li>
              <li> Knowledge of Bootstrap framework</li>
              <li> Working with Gatsby</li>
              <li> Utilized SASS, CSS, HTML, and JavaScript </li>
              <li> Familiar with Netlify and Forestry CMS</li>
            </ul>
          </div>
        )
      },
      {
        company: "Fox and Hound",
        period: "January 2017 - September 2018",
        title: "Manager",
        description: (
          <div>
            <ul className="list-disc">
              <li> Conducted first-round interviews to hire staff </li>
              <li> Assisted in hiring process by inputting employee details into company database </li>
              <li> Adhered to labor budgets  </li>
              <li> Created schedules based on labor goals </li>
              <li> Provided leadership and coaching to staff </li>
              <li> Established new training material for staff  </li>
              <li>	Performed accurate safe content counts twice daily </li>
              <li>	Conducted weekly inventory and troubleshooting missing inventory </li>
              </ul>
          </div>
        )
      },
      {
        company: "Fox and Hound",
        period: "February 2013 - January 2017",
        title: "Server",
        description: (
          <div>
            <ul className="list-disc">
              <li> Responsible for outstanding customer service</li>
              <li>	Performed nightly cash outs</li>
              <li>Trained new staff members</li>
            </ul>
          </div>
        )
      }
    ]}
    education={[
      {
        school: "Pikes Peak Community College",
        degree: "A.A.S. Computer Information Systems",
        gpa: "3.62"
      }
    ]}
  />
    </div>
  </Layout>
)
}

export default WorkPage
