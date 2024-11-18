import { useState } from 'react';
import logo from './logo.svg';
import Icon from '@mdi/react';
import './App.css';
import { mdiAccount } from '@mdi/js'
import SignUp from './SignUp'

function App() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [pwd, setPWD] = useState('');
const [pwdType, setPWDType] = useState('password')
const [eye_icon, setEyeIcon] = useState('eye.svg')

//Handles password toggle
const pwdToggle = () => {
  if(pwdType === 'password'){
    setPWDType('text');
    setEyeIcon('eye-off.svg')

  } else {
    setPWDType('password')
    setEyeIcon('eye.svg')
  }
}

//

  return (
    <div className="App text-center">
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  </style>
      <header className="bg-[#ffffff] min-h-screen flex flex-col items-center justify-center text-[calc(10px + 2vmin)] text-[#12ACE2]">
        <img src="GroupMeet.png" width="320"></img>
        <div id="container" className="bg-[rgb(255,252,252)] shadow-md rounded-2xl pt-4 pb-4 px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col items-center text-lg sm:text-xl max-w-[500px] w-full min-w-[200px] min-w-0 flex-shrink">
          <div id="signup_title" className="font-bold text-[1.8em]"> Sign Up </div>
          <p id="signup_description" className="text-[#1DC365] text-[.8em] mx-[25px] my-[10px] font-semibold">Welcome to GroupMeet! This is a platform for setting meeting times</p>
          <div id="container_name" className="flex flex-col mt-[20px] w-full max-w-[400px] font-semibold items-start">
            Name 
            <div id="container_name_wrapper" className="bg-[rgb(233,233,233)] px-2 py-0 text-[0.75em] rounded-lg h-[55px] w-full max-w-[400px] flex items-center justify-start min-w-0 flex-shrink-0 overflow-hidden sm:scale-100">
            <img src="account-outline.svg" width="35" className="input_icon"></img>
              <input value={name} onChange={(e) => setName(e.target.value)} className="input-box bg-[rgb(233,_233,_233)] text-[black] border-[0] outline-none text-[1em] rounded-[8px] mx-[5px] my-0 w-[350px] h-[55px]"></input>
            </div>
          </div>
          <div id="container_email" className="flex flex-col mt-[20px] font-semibold items-start w-full max-w-[400px]">
            Email
            <div id="container_email_wrapper" className="bg-[rgb(233,233,233)] px-2 py-0 text-[0.75em] rounded-lg h-[55px] w-full max-w-[400px] flex items-center justify-start min-w-0 flex-shrink-0 overflow-hidden sm:scale-100">
            <img src="email-outline.svg" width="35" className="input_icon"></img>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="input-box bg-[rgb(233,_233,_233)] text-[black] border-[0] outline-none text-[1em] rounded-[8px] mx-[5px] my-0 w-[350px] h-[55px]"></input>
            </div>
          </div>
          <div id="container_pwd" className="flex flex-col mt-[20px] font-semibold items-start w-full max-w-[400px]">
            Password
            <div id="container_pwd_wrapper" className="bg-[rgb(233,233,233)] px-2 py-0 text-[0.75em] rounded-lg h-[55px] w-full max-w-[400px] flex items-center justify-start min-w-0 flex-shrink-0 overflow-hidden sm:scale-100">
              <img src="key.svg" width="35" className="input_icon"></img>
              <input value={pwd} onChange={(e) => setPWD(e.target.value)} type={pwdType} className="input-box bg-[rgb(233,_233,_233)] text-[black] border-[0] outline-none text-[1em] rounded-[8px] mx-[5px] my-0 w-[350px] h-[55px]" id="pwd_input_box"></input>
              <img src={eye_icon} width="35" className="input_icon " id="eye_icon" onClick={pwdToggle}></img>
            </div>
          </div>
          <button id="pfp_box" className="bg-[rgb(222,_219,_219)] border-[0] mx-[5px] mt-[20px] px-[10px] py-0 rounded-[8px] max-w-[250px] h-[50px] text-[1.05em] font-medium self-start">Upload Profile Picture</button>
          <button id="sign_up_box" className="text-[1em] font-semibold text-center mx-[5px] text-[#ffffff] bg-[linear-gradient(to_right,_#12ACE2,_#1DC365)] border-[0] mx-0 my-[20px] rounded-[8px] min-w-full h-[45px] [transition:.3ss]">Sign Up</button>
        </div>
      </header>
    </div>
  );
}

export default App;
