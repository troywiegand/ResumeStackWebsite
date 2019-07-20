import React, { Component } from 'react';
import './App.css';



class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: ["yee"],
      value: "SQL HERE"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.APICall(this.state.value);
    event.preventDefault();
  }

  APICall = (string) => {
    fetch('http://localhost:3000/api/db/' + string)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }



  render() {
    return (
      <div className="App">

        <p className="App-intro">
          `{JSON.stringify(this.state.items)}`
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
    <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default App;
