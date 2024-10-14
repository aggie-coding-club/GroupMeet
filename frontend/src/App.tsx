import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <header>
        
      </header>
      <body>
      <div>
        <span className='green'>New to GroupMeet?</span> <span>Sign Up</span>
      </div>
        <img src="GroupMeet - Logo.jpg" height={220}></img>
        <div id="loginBox">
          <h2 id='blueText'>Login</h2>
          <p id='greenText'>Welcome back to Sprout Food Solutions! We hope you are ready to see your predictions!</p>
          <label id='blueTextSmall'>
            Email <br></br><input type="text" name="myCheckbox" id='textBox'/>
          </label>
          <br></br>
          <br></br>
          <label id='blueTextSmall'>
            Password <br></br><input type="text" name="myCheckbox" id='textBox'/>
          </label>
          <p>Forgot your password?</p>
          <br></br>
          <button id='button'>Login</button>          
        </div>
      </body>
    </div>
  );
}

export default App;
