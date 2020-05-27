import React,{ Component }  from "react";
import "./resume.scss";

class Resume extends Component {
  render() {
    return (
      <div id="resume-component">
        <div id="about">
          <div>
            <div>
              <h2> About </h2>
              <p>{this.props.summary}</p>
            </div>
          </div>
        </div>
        <div id="main">
          <h1>{this.props.name}</h1>
          <section>
            <h2>Experience</h2>
            {this.props.experiences.map(job => {
            return (
              <div className="subsection" key={job.company + job.title}>
                <h3>
                  {job.title}
                  <span id="company">{job.company}</span>
                  <span>{job.period}</span>
                </h3>
                <div className="description">{job.description}</div>
              </div>
              );
            })}
          </section>
          <section>
            <h2> Education </h2>
            {this.props.education.map(school => {
              return (
                <div
                  // className="subsection"
                  key={school.school}
            >
                  <h3>
                    {school.degree}
                    <span>{school.gpa}</span>
                  </h3>
                  <p className="description">
                    {school.school}
                  </p>
                </div>
              );
            })}
          </section>
          <section>
            <h2> Skills </h2>
            <div className="description" >
              <ul className="list-disc">
                <li>{this.props.skill1}</li>
                <li>{this.props.skill2}</li>
                <li>{this.props.skill3}</li>
                <li>{this.props.skill4}</li>
                <li>{this.props.skill5}</li>
                <li>{this.props.skill6}</li>
                <li>{this.props.skill7}</li>
                <li>{this.props.skill8}</li>
                </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Resume;