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
    otherState: "some other value",
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>It's working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
