import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      resumeChoice,
      troyPersonal,
      troyEducation,
      troyClasses,
      troyWork,
      troyOtherExp,
      troySkills,
      ashleyPersonal,
      ashleyEducation,
      ashleyClasses,
      ashleyWork,
      ashleyOtherExp,
      ashleySkills
    } = this.props;

    const isTroy = resumeChoice === "Troy";

    const getSkills = skills => {
      skills.map(skill => {
          <div key={skill.Name}>
            {skill.Name}: {skill.Rating}
          </div>
    
      });
    };

    return (
      <div>
        <div className="title">{resumeChoice}'s Resume</div>
        <div className="category">Personal Info</div>
        <div>
          {isTroy ? troyPersonal[0].FirstName : ashleyPersonal[0].FirstName}{" "}
          {isTroy ? troyPersonal[0].LastName : ashleyPersonal[0].lastName}
          <br />
          Phone Number:{" "}
          {isTroy ? troyPersonal[0].PhoneNumber : ashleyPersonal[0].PhoneNumber}
          <br />
          Professional Email:{" "}
          {isTroy
            ? troyPersonal[0].ProfessionalEmail
            : ashleyPersonal[0].ProfessionalEmail}
          <br />
          School Email:{" "}
          {isTroy ? troyPersonal[0].SchoolEmail : ashleyPersonal[0].SchoolEmail}
          <br />
          Github:{" "}
          {isTroy ? troyPersonal[0].GithubURL : ashleyPersonal[0].GithubURL}
        </div>
        <div className="category">Education</div>
        Degree:
        {isTroy ? troyEducation[0].Degree : ashleyEducation[0].Degree}
        <br />
        {isTroy ? troyEducation[0].School : ashleyEducation[0].School}-
        {isTroy ? troyEducation[0].Location : ashleyEducation[0].Location}
        <br />
        Started:
        {isTroy ? troyEducation[0].Started : ashleyEducation[0].Started}
        <br />
        Completed:
        {isTroy ? troyEducation[0].Completed : ashleyEducation[0].Completed}
        <div className="category">Skills</div>
        {isTroy ? troySkills.map((item) => {return <div>{item.Name}: {item.Rating}</div>}) : ashleySkills.map((item) => {return <div>{item.Name}: {item.Rating}</div>})}
        <div className="category">Work</div>
        {isTroy ? troyWork.map((item) => {return <div><strong>{item.Place}, {item.Location}</strong><br />{item.Started}-{item.Completed} <br /> Position: {item.Position}<br /> {item.Desc}</div>}) : ashleyWork.map((item) => {return <div><strong>{item.Place}, {item.Location}</strong><br />{item.Started}-{item.Completed} <br /> Position: {item.Position}<br /> {item.Desc}</div>})}
        {isTroy ? troyOtherExp.map((item) => {return <div><strong>{item.Place}, {item.Location}</strong><br />{item.Started}-{item.Completed} <br /> Position: {item.Position}<br /> {item.Desc}</div>}) : ashleyOtherExp.map((item) => {return <div><strong>{item.Place}, {item.Location}</strong><br />{item.Started}-{item.Completed} <br /> Position: {item.Position}<br /> {item.Desc}</div>})}
        <div className="category">Classes</div>
        {isTroy ? troyClasses.map((item) => {return <div><strong>{item.Code} {item.Name}</strong></div>}) : ashleyClasses.map((item) => {return <div><strong>{item.Code} {item.Name}</strong></div>})}
      </div>
    );
  }
}

export default Resume;
