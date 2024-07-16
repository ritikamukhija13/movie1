import React from 'react';

import kangDanielImage from './KANG DANIEL.jpeg'; 
import  { useState } from 'react';
import axios from 'axios';
import './style.css'; 
import MovieTicket from './MovieTicket';




const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegisterClick = async () => {
    try {
      const response = await axios.post('/api/register', {
        username,
        password,
        confirmPassword,
      });

      setRegistrationStatus('success');
      console.log('Registration successful!', response.data);
    } catch (error) {
      setRegistrationStatus('error');
      console.error('Failed to register:', error.response.data);
    }
  };

  let statusMessage = null;
  if (registrationStatus === 'success') {
    statusMessage = <div>Registration successful! Please check your email to verify your account.</div>;
  } else if (registrationStatus === 'error') {
    statusMessage = <div style={{ color: 'black' }}>Registration Unsuccessful</div>; 
  }

  return (
    <>
      <nav>
        <div className="board">
        <img src={kangDanielImage} alt=""  />
          <div className="starlight">
            <span className="text1">Starlight&nbsp;</span>
            <span className="text2">Multiplex</span>
          </div>
        </div>
        <div className="search">
          <a href="/">
            {/* <span>
             <Searchicon />
            </span> */}
          </a>
          <a href="/">
            <span className="text3">search movies, shows, events</span>
          </a>
        </div>
        <div className="bar">
          <ul>
            <li>
              <a href="/">Movies</a>
            </li>
            <li>
              <a href="/">Shows</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">Sports</a>
            </li>
            <li>
              <select className="op-btn" name="" id="">
                <option value="">English</option>
                <option value="">हिंदी</option>
              </select>
            </li>
          </ul>
        </div>
        <span>
          <button className="sign-btn">Sign Up</button>
        </span> </nav>
      
   
  

  
    <div class="idk">
      <div class="username">
        <span>Username</span>
      <input
        class="sign-up"
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Enter your username"
      /></div>

      <div class="passwordd">
      <span>Password</span>
      <input
         class="sign-up"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
      /></div>
      <div  class="confirm">

      <span>Confirm Password</span>
      <input
       class="sign-up"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder="Confirm your password"
      /></div>
      <div>
      <button  onClick={handleRegisterClick} className='register'>Register</button>
      {statusMessage}
      </div></div>
    
   
    </>
    
            );  
};

export default LoginPage;