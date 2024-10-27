import React from 'react';
import logo from './logo.svg';
import Icon from '@mdi/react';
import './App.css';
import { mdiAccount } from '@mdi/js'
import SignUp from './SignUp'

function App() {
  return (
    <div className="App">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
      <header className="App-header">
        <img src="GroupMeet.png" width="320"></img>
        <div className="container">
          <div className="title"> Sign Up </div>
          <p>Welcome to GroupMeet! This is a platform for setting meeting times</p>
          <div className="input_container">
            Name 
            <div className="input_box_wrapper">
            <img src="account-outline.svg" width="35" className="input_icon"></img>
              <input className="input_box"></input>
            </div>
          </div>
          <div className="input_container">
            Email
            <div className="input_box_wrapper">
            <img src="email-outline.svg" width="35" className="input_icon"></img>
              <input className="input_box"></input>
            </div>
          </div>
          <div className="input_container">
            Password
            <div className="input_box_wrapper">
              <img src="key.svg" width="35" className="input_icon"></img>
              <input className="input_box" id="pwd_input_box"></input>
              <img src="eye.svg" width="35" className="input_icon" id="eye_icon"></img>
            </div>
          </div>
          <button className="pfp_box">Upload Profile Picture</button>
          <button className="sign_up_box">Sign Up</button>
        </div>
      </header>
    </div>
  );
}

export default App;
