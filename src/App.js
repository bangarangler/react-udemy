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

  switchNameHandler = newName => {
    //console.log("was clicked!");
    //this.state.persons[0].name = "Jon Palacio"
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "max", age: 28 },
        { name: "Step", age: 27 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Jon", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Steph", age: 26 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>It's working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Jon Palacio!!")}
        >
          {" "}
          Switch Name{" "}
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Jon!")}
          changed={this.nameChangedHandler}
        >
          {" "}
          My Hobbies: Racing{" "}
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
