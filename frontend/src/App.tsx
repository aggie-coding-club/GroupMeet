import React from 'react';
import logo from './logo.svg';
import Icon from '@mdi/react';
import './App.css';
import { mdiAccount } from '@mdi/js'
import SignUp from './SignUp'

function App() {
  return (
    <div className="App text-center">
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  </style>
      <header className="bg-[#ffffff] min-h-screen flex flex-col items-center justify-center text-[calc(10px + 2vmin)] text-[#12ACE2]">
        <img src="GroupMeet.png" width="320"></img>
        <div id="container" className="bg-[rgb(255,_252,_252)] [box-shadow:0px_1px_2px_2px_rgb(0_0_0_/_10%)] rounded-[20px] pt-[15px] pb-[15px] pl-[50px] pr-[50px] flex flex-col items-center text-[20px] max-w-[500px] font-['Poppins',_'sans-serif'] font-medium not-italic">
          <div id="signup_title" className="font-bold text-[1.8em]"> Sign Up </div>
          <p id="signup_description" className="text-[#1DC365] text-[.8em] mx-[25px] my-[10px]">Welcome to GroupMeet! This is a platform for setting meeting times</p>
          <div id="container_name" className="flex flex-col mt-[20px] items-start">
            Name 
            <div id="container_name_wrapper" className="bg-[rgb(233,_233,_233)] px-[5px] py-0 text-[.75em] rounded-[8px] h-[55px] w-[400px] flex items-center justify-start">
            <img src="account-outline.svg" width="35" className="input_icon"></img>
              <input className="input-box bg-[rgb(233,_233,_233)] text-[black] border-[0] text-[1em] rounded-[8px] mx-[5px] my-0 w-[350px] h-[55px]"></input>
            </div>
          </div>
          <div id="container_email" className="flex flex-col mt-[20px] items-start">
            Email
            <div id="container_email_wrapper" className="bg-[rgb(233,_233,_233)] px-[5px] py-0 text-[.75em] rounded-[8px] h-[55px] w-[400px] flex items-center justify-start">
            <img src="email-outline.svg" width="35" className="input_icon"></img>
              <input className="input-box bg-[rgb(233,_233,_233)] text-[black] border-[0] text-[1em] rounded-[8px] mx-[5px] my-0 w-[350px] h-[55px]"></input>
            </div>
          </div>
          <div id="container_pwd" className="flex flex-col mt-[20px] items-start">
            Password
            <div id="container_pwd_wrapper" className="bg-[rgb(233,_233,_233)] px-[5px] py-0 text-[.75em] rounded-[8px] h-[55px] w-[400px] flex items-center justify-start">
              <img src="key.svg" width="35" className="input_icon"></img>
              <input className="input-box bg-[rgb(233,_233,_233)] text-[black] border-[0] text-[1em] rounded-[8px] mx-[5px] my-0 w-[350px] h-[55px]" id="pwd_input_box"></input>
              <img src="eye.svg" width="35" className="input_icon" id="eye_icon"></img>
            </div>
          </div>
          <button id="pfp_box" className="bg-[rgb(222,_219,_219)] border-[0] mt-[20px] px-[10px] py-0 rounded-[8px] max-w-[250px] h-[50px] text-[1.05em] font-medium self-start">Upload Profile Picture</button>
          <button id="sign_up_box" className="text-[1em] font-semibold text-center text-[#ffffff] bg-[linear-gradient(to_right,_#12ACE2,_#1DC365)] border-[0] mx-0 my-[20px] rounded-[8px] min-w-full h-[45px] [transition:.3ss]">Sign Up</button>
        </div>
      </header>
    </div>
  );
}

export default App;
