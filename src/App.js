import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "Katya Martinez",
          number: '7043882420',
          dob: '05-22-2001'
        },
        {
          name: 'Jane Doe',
          number: '1234567890',
          dob: '02-23-1978'
        },
        {
          name: 'John Brown',
          number: '9807654321',
          dob: '05-28-2000'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person = {person} />
        ))}
      </div>
    )
  }
}

class BasicInfo extends Component {
  render() {
    const { person } = this.props;
    return(
      <div>
        <h1>BASIC INFORMATION</h1>
        <p>Name: {person.name}</p>
        <p>Number: {person.number}</p>
        <p>DOB: {person.dob}</p>
  

      <br></br>
      // VERY EASY 
     
        <h1>BASIC INFORMATION</h1>
        <p> NAME: Katya Martinez</p>
        <p>Number: 7043882420</p>
        <p>DOB: 05-22-2001</p>
      </div>
    )
  }
}



export default App;
