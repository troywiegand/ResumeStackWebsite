import React, { Component } from 'react';
import './App.css';



class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
    this.APICall("troy", "SELECT * FROM Personal", "Personal");
    this.APICall("troy", "SELECT * FROM Education", "Education");
    this.APICall("troy", "SELECT * FROM Classes", "Classes");

    this.APICall("troy", "SELECT * FROM Experience WHERE Type='Work'", "Work");
    this.APICall("troy", "SELECT * FROM Experience WHERE Type!='Work'", "OtherExp");
    this.APICall("troy", "SELECT * FROM Skills WHERE Type='Language' OR Type='Framework'", "Skiils");

    this.APICall("ashley", "SELECT * FROM Personal", "Personal");
    this.APICall("ashley", "SELECT * FROM Education", "Education");
    this.APICall("ashley", "SELECT * FROM Classes", "Classes");

    this.APICall("ashley", "SELECT * FROM Experience WHERE Type='Work'", "Work");
    this.APICall("ashley", "SELECT * FROM Experience WHERE Type!='Work'", "OtherExp");
    this.APICall("ashley", "SELECT * FROM Skills WHERE Type='Language' OR Type='Framework'", "Skiils");

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.APICall("troy", "SELECT * FROM Classes", "Classes");
    event.preventDefault();
  }


  APICall = (name, string, section) => {
    fetch('http://localhost:3000/api/db/' +name+"/"+string)
      .then( (res) => res.json())
      .then(
        (result) => {
          console.log(result)
          console.log(name+section)
          let actualname=name+section
          this.setState({
            [actualname]: {result}
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }



  render() {
    return (
      <div className="App">

        <p className="App-intro">
          `{JSON.stringify(this.state.troy)}`
        </p>

      </div>
    );
  }
}

export default App;
