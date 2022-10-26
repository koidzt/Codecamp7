import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function NameCard(props) {
  return (
    <div
      className="NameCard"
      style={{ border: '3px solid navy', color: 'darkorange', fontWeight: 'bold', width: '90%', margin: '15px auto' }}
    >
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Color: {props.color}</p>
    </div>
  );
}

class App extends Component {
  // state = {
  //   isShow: true,
  // };

  // render() {
  //   const { isShow } = this.state;
  //   // const isShow = this.state.isShow;

  //   return (
  //     <div className="App" >
  //       <button onClick={() => this.setState({ isShow: !isShow })}>Hide All Students</button>
  //       {isShow ? ([
  //         <NameCard key={1} name="Koi" age={18} color="Cyan" />,
  //         <NameCard key={2} name="Cake" age={19} color="Green" />,
  //         <NameCard key={3} name="Pup" age={17} color="Red" />
  //       ]) : null}
  //     </div>
  //   );
  // }

  state = {
    isShow: true,
    students: [
      { id: 1, name: 'Koi', age: 18, color: 'Cyan' },
      { id: 2, name: 'Cake', age: 19, color: 'Green' },
      { id: 3, name: 'Pup', age: 17, color: 'Red' },
    ],
  };

  render() {
    const { isShow } = this.state;
    const studentList = this.state.students;

    return (
      <div className="App">
        <button onClick={() => this.setState({ isShow: !isShow })}>Hide All Students</button>
        {isShow &&
          studentList.map((student) => (
            <NameCard key={student.id} name={student.name} age={student.age} color={student.color} />
          ))}
      </div>
    );
  }
}

export default App;
