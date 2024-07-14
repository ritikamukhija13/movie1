import React from 'react';
import './style.css';
import kangDaniel from './KANG DANIEL.jpeg';
function Time(){
return(
    <>
     
        <nav>
            <div class="board">
               <img src={kangDaniel} alt=""/>
               <div class="starlight">
                <span class="text1">Starlight&nbsp;</span>
                <span class="text2">Multiplex</span>
             </div>
            </div>
            <div class="search">
                
                
                  <a href="/"> <span><img src="icons8-search.svg" alt=""/></span></a>
                  <a href="/"><span class="text3">search movies, shows, events</span></a> 
                
            </div>
            <div class="bar">
                <ul>
                    <li><a href="/">Movies</a></li>
                    <li><a href="/">Shows</a></li>
                    <li><a href="/">Events</a></li>
                    <li><a href="/">Sports</a></li>
                    <li><select class="op-btn" name="" id="">
                        <option value="">English</option>
                        <option value="">हिंदी</option>
                    </select></li>
                   
        
                </ul>
               
             </div>
        
            
            
             
             <span><button class="sign-btn">Sign Up</button></span>
            </nav>
            <div class="date">
                <a href="/">
                    <div  id="date1">13 July</div>
                    <div id="date2">14 July</div>
                    <div id="date3">15 July</div>
                    <div id="date4">16 July</div>
                    <div id="date5">17 July</div>
                </a>

            </div>
    
    <div class="seats">
      <a href="/">
        <span>Triton Mall,Jaipur</span>
        <span class="time1">10.00 AM</span>
        <span class="time1">1.20 PM</span>
        <span class="time1">11.00 PM</span>
    
        <span>Golcha Cinema</span>
        <span class="time1">11.45 AM</span>
        <span class="time1">3 PM</span>
        <span class="time1">6.45 PM</span>

        <span>Pink Square, Adarsh Nagar</span>
        <span class="time1">10.00 AM</span>
        <span class="time1">1.30 PM</span>
        <span class="time1">4.00 PM</span>

        <span>Entertainment Paradise, Miraj Cinemas</span>
        <span class="time1">2.45 pM</span>
        <span class="time1">7.30 PM</span>
        <span class="time1">11.00 PM</span>

        <span>Raj Mandir, Jaipur</span>
        <span class="time1">9.00 AM</span>
        <span class="time1">3.00 PM</span>
        <span class="time1">6.00 PM</span></a>
        </div>
   
    </>

);
}
export default Time;