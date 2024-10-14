import React from 'react';
import logo from './gmlogo.webp';
import logo2 from './homephoto.webp'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className='SignUp'>Sign Up</button>
        <button className='Login'>Login</button>
        <p>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
        </p> 
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"  
        >
          Learn React
        </a> */}
        <h1> </h1>
      </header>

      <div className="App-body">
        <div className="App-text">
          <h1>
            Modern Way of Scheduling
          </h1>
          <p className= 'App-discription'>
            GroupMeet allows you to schedule and meet with your favorite groups.
          </p>  
        </div>
        <img src={logo2} className="App-logo2" alt="logo2" />
      </div>
    </div>
  );
}

export default App;
