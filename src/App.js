import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "jon", age: 30 },
      { name: "max", age: 28 },
      { name: "Manu", age: 29 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = () => {
    //console.log("was clicked!");
    //this.state.persons[0].name = "Jon Palacio"
    this.setState({
      persons: [
        { name: "jon palacio", age: 30 },
        { name: "max", age: 28 },
        { name: "Step", age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>It's working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
