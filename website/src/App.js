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
