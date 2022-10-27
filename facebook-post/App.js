import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyPost from './components/MyPost';

function App() {
  return (
    <div className="App">
      <MyPost name="Koi" width="300" height="200" />
      <MyPost name="Cake" width="200" height="200" />
      <MyPost name="Pup" width="200" height="100" />
      <MyPost name="Zen" width="300" height="150" />
      <MyPost name="Bang" width="600" height="400" />
    </div>
  );
}

export default App;
