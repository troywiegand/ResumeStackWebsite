import React, { Component } from "react";

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
        <div>
          {skill.Name}: {skill.rating}
        </div>;
      });

      return "hi";
    };

    return (
      <div>
        <div>{resumeChoice}'s Resume</div>
        <div>Personal Info</div>
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
        <div>Education</div>
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
        <div>Skills</div>
        {isTroy ? getSkills(troySkills) : getSkills(ashleySkills)}
        <div>Work</div>
        <div>Classes</div>
      </div>
    );
  }
}

export default Resume;
