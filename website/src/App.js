import React, { Component } from "react";
import Resume from "./Resume";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeChoice: "Troy",
      loadingPersonalTroy: true,
      loadingEducationTroy: true,
      loadingClassesTroy: true,
      loadingWorkTroy: true,
      loadingOtherExpTroy: true,
      loadingSkillsTroy: true,
      loadingPersonalAshley: true,
      loadingEducationAshley: true,
      loadingClassesAshley: true,
      loadingWorkAshley: true,
      loadingOtherExpAshley: true,
      loadingSkillsAshley: true
    };

    this.handleResumeChoice = this.handleResumeChoice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleResumeChoice(event) {
    this.setState({ resumeChoice: event.target.value });
  }

  handleSubmit(event) {
    this.APICall("troy", "SELECT * FROM Classes", "Classes");
    event.preventDefault();
  }

  componentWillMount() {
    fetch(
      "http://localhost:3000/api/db/" + "troy" + "/" + "SELECT * FROM Personal"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "troy" + "Personal";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingPersonalTroy: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" + "troy" + "/" + "SELECT * FROM Education"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "troy" + "Education";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingEducationTroy: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" + "troy" + "/" + "SELECT * FROM Classes"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "troy" + "Classes";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingClassesTroy: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" +
        "troy" +
        "/" +
        "SELECT * FROM Experience WHERE Type='Work'"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "troy" + "Work";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingWorkTroy: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" +
        "troy" +
        "/" +
        "SELECT * FROM Experience WHERE Type!='Work'"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "troy" + "OtherExp";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingOtherExpTroy: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" +
        "troy" +
        "/" +
        "SELECT * FROM Skills WHERE Type='Language' OR Type='Framework'"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "troy" + "Skills";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingSkillsTroy: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" +
        "ashley" +
        "/" +
        "SELECT * FROM Personal"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "ashley" + "Personal";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingPersonalAshley: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" +
        "ashley" +
        "/" +
        "SELECT * FROM Education"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "ashley" + "Education";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingEducationAshley: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" + "ashley" + "/" + "SELECT * FROM Classes"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "ashley" + "Classes";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingClassesAshley: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" +
        "ashley" +
        "/" +
        "SELECT * FROM Experience WHERE Type='Work'"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "ashley" + "Work";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingWorkAshley: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" +
        "ashley" +
        "/" +
        "SELECT * FROM Experience WHERE Type!='Work'"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "ashley" + "OtherExp";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingOtherExpAshley: false
        });
      });
    fetch(
      "http://localhost:3000/api/db/" +
        "ashley" +
        "/" +
        "SELECT * FROM Skills WHERE Type='Language' OR Type='Framework'"
    )
      .then(res => res.json())
      .then(result => {
        let actualname = "ashley" + "Skills";
        console.log(actualname);
        console.log(result);
        this.setState({
          [actualname]: result,
          loadingSkillsAshley: false
        });
      });
  }

  makeBaseResumeString = () =>{

    const preamble = "\\documentclass[letterpaper,11pt]{article}\n%-----------------------------------------------------------\n%Margin setup\n\n\\setlength{\\voffset}{0.1in}\n\\setlength{\\paperwidth}{8.5in}\n\\setlength{\\paperheight}{11in}\n\\setlength{\\headheight}{0in}\n\\setlength{\\headsep}{0in}\n\\setlength{\\textheight}{11in}\n\\setlength{\\textheight}{9.5in}\n\\setlength{\\topmargin}{-0.25in}\n\\setlength{\\textwidth}{7in}\n\\setlength{\\topskip}{0in}\n\\setlength{\\oddsidemargin}{-0.25in}\n\\setlength{\\evensidemargin}{-0.25in}\n%-----------------------------------------------------------"+"\n\\usepackage{tcolorbox}\n%\\usepackage{fullpage}\n%\\usepackage{shading}\n%\\textheight=9.0in\n\\pagestyle{empty}\n\\raggedbottom\n\\raggedright\n\\setlength{\\tabcolsep}{0in}\n\n%-----------------------------------------------------------\n%Custom commands\n\\definecolor{yeetGreen}{HTML}{C1FFC4}"+"\n\\newtcolorbox{trixiematel}[1][]\n{\n    colframe=blue!50!black, colback=lightgray,\n  #1,\n}\n\\newcommand{\\resitem}[1]{\\item #1 \\vspace{-2pt}}\n\\newcommand{\\resheading}[1]{ \\begin{trixiematel}\\textbf{#1}\\end{trixiematel}}\n\\newcommand{\\ressubheading}[4]{\n\\begin{tabular*}{6.5in}{l@{\\extracolsep{\\fill}}r}\n                \\textbf{#1} & #2 \\\\\n                \\textit{#3} & \\textit{#4} \\\\\n\\end{tabular*}\\vspace{2pt}}"+"\n\\newcommand{\\Heading}[5]{\n    \\begin{tabular*}{7in}{l@{\\extracolsep{\\fill}}r}\n        \\textbf{\\Large #1}  & #2\\\\\n        #3 & #4 \\\\\n        & #5 \\\\\n        \\end{tabular*}}\n%-----------------------------------------------------------"+"\n\n\\begin{document}"


    let headingstring = "\\Heading{"+this.state.troyPersonal[0]["FirstName"]+" "+this.state.troyPersonal[0]["LastName"]+"}{"+this.state.troyPersonal[0]["PhoneNumber"]+"}{"+this.state.troyPersonal[0]["ProfessionalEmail"]+"}{"+this.state.troyPersonal[0]["PersonalURL"]+"}{"+this.state.troyPersonal[0]["GithubURL"]+"}"

    let edustring = "\n\\resheading{Education}\n\\begin{description}\n"

    this.state.troyEducation.forEach((edu)=>{

      edustring=edustring+"\\item\n\\ressubheading{"+edu["School"]+"}{"+edu["Location"]+"}{"+edu["Degree"]+"}{"+edu["Started"]+" - "+edu["Completed"]+"} \n\n\n"
      edustring+="Relevant Courses: "
      this.state.troyClasses.forEach((c)=>{
        edustring+=c["Name"]+", "
      })
      edustring=edustring.slice(0,-2)+"\n\n"

    })

    edustring+="\\end{description}"

    let workstring = "\n\\resheading{Work Experience}\n\\begin{description}\n"
    this.state.troyWork.forEach((work)=>{
      workstring+="\\item\n\\ressubheading{"+work["Place"]+"}{"+work["Location"]+"}{"+work["Position"]+"}{"+work["Started"]+" - "+work["Completed"]+"} \n\n\n"
      workstring+=work["Desc"]+"\n\n"
    })
    workstring+="\n \\end{description}\n"


    let expstring="\n\\resheading{Miscellaneous Experience}\n\\begin{description}\n"
    this.state.troyOtherExp.forEach((work)=>{
      expstring+="\\item\n\\ressubheading{"+work["Place"]+"}{"+work["Location"]+"}{"+work["Position"]+"}{"+work["Started"]+" - "+work["Completed"]+"} \n\n\n"
      expstring+=work["Desc"]+"\n\n"
    })
    expstring+="\\end{description}"


   let skillstring="\\resheading{Skills}\n\n\\begin{description}"
    skillstring+="\n\\item[Languages:]\n"
    this.state.troySkills.forEach((lang)=>{
      skillstring+=lang["Name"]+", "
    })
    skillstring=skillstring.slice(0,-2)
    skillstring+="\\end{description}"

    let endstring="\\end{document}"

    let troystring=preamble+headingstring+edustring+workstring+expstring+skillstring+endstring
    console.log(troystring)
///////////////////////////////////////////////////
     headingstring = "\\Heading{"+this.state.ashleyPersonal[0]["FirstName"]+" "+this.state.ashleyPersonal[0]["LastName"]+"}{"+this.state.ashleyPersonal[0]["PhoneNumber"]+"}{"+this.state.ashleyPersonal[0]["ProfessionalEmail"]+"}{"+this.state.ashleyPersonal[0]["PersonalURL"]+"}{"+this.state.ashleyPersonal[0]["GithubURL"]+"}"

     edustring = "\n\\resheading{Education}\n\\begin{description}\n"

    this.state.ashleyEducation.forEach((edu)=>{

      edustring=edustring+"\\item\n\\ressubheading{"+edu["School"]+"}{"+edu["Location"]+"}{"+edu["Degree"]+"}{"+edu["Started"]+" - "+edu["Completed"]+"} \n\n\n"
      edustring+="Relevant Courses: "
      this.state.ashleyClasses.forEach((c)=>{
        edustring+=c["Name"]+", "
      })
      edustring=edustring.slice(0,-2)+"\n\n"

    })

    edustring+="\\end{description}"

     workstring = "\n\\resheading{Work Experience}\n\\begin{description}\n"
    this.state.ashleyWork.forEach((work)=>{
      workstring+="\\item\n\\ressubheading{"+work["Place"]+"}{"+work["Location"]+"}{"+work["Position"]+"}{"+work["Started"]+" - "+work["Completed"]+"} \n\n\n"
      workstring+=work["Desc"]+"\n\n"
    })
    workstring+="\n \\end{description}\n"


     expstring="\n\\resheading{Miscellaneous Experience}\n\\begin{description}\n"
    this.state.ashleyOtherExp.forEach((work)=>{
      expstring+="\\item\n\\ressubheading{"+work["Place"]+"}{"+work["Location"]+"}{"+work["Position"]+"}{"+work["Started"]+" - "+work["Completed"]+"} \n\n\n"
      expstring+=work["Desc"]+"\n\n"
    })
    expstring+="\\end{description}"


    skillstring="\\resheading{Skills}\n\n\\begin{description}"
    skillstring+="\n\\item[Languages:]\n"
    this.state.ashleySkills.forEach((lang)=>{
      skillstring+=lang["Name"]+", "
    })
    skillstring=skillstring.slice(0,-2)
    skillstring+="\\end{description}"

     endstring="\\end{document}"

    let ashleystring=preamble+headingstring+edustring+workstring+expstring+skillstring+endstring
    console.log(ashleystring)
    
    fetch('http://localhost:3000/api/latex/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
        latex: troystring,
      })
    }).then(res=>{console.log(res)})

  }

  render() {
    const loading =
      this.state.loadingPersonalTroy ||
      this.state.loadingEducationTroy ||
      this.state.loadingClassesTroy ||
      this.state.loadingWorkTroy ||
      this.state.loadingOtherExpTroy ||
      this.state.loadingSkillsTroy ||
      this.state.loadingPersonalAshley ||
      this.state.loadingEducationAshley ||
      this.state.loadingClassesAshley ||
      this.state.loadingWorkAshley ||
      this.state.loadingOtherExpAshley ||
      this.state.loadingSkillsAshley;

      if(!loading){this.makeBaseResumeString()}
    return (
      <div>
        <button value="Troy" onClick={this.handleResumeChoice}>
          Troy
        </button>
        <button value="Ashley" onClick={this.handleResumeChoice}>
          Ashley
        </button>
        {loading ? (
          "loading"
        ) : (
          <Resume resumeChoice={this.state.resumeChoice} {...this.state} />
        )}
      </div>
    );
  }
}

export default App;
