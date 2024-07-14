import React from 'react';
import './style.css'; 
import kangDanielImage from './KANG DANIEL.jpeg'; 




function LoginPage() {
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
        </span>
      </nav>
      <div className="email">
        <div>Enter valid Email</div>
        <div>
          <input id="mail" type="email" placeholder="email" />
        </div>
        <button>Send OTP</button>
      </div></>
    
  );
}

export default LoginPage;