import React from 'react';
import './style.css';
import kangDaniel from './KANG DANIEL.jpeg';
function Summary() {
    return (
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
    <div class="summ">
        <div class="summ1">
        <div>Booking Summary</div>
        <div>Seats: D7, D6, D5</div>
        <div>Ticket(s): 3</div>
        <div>Convenience Fees: 100</div>
    </div>
        <div class="line1"></div>
        <div class="summ2">
        <div>Sub Total: Rs. 400</div>
        <div>Amount Payable: Rs. 500</div>
    </div>
        <div class="line1"></div>
        <div class="summ3">
        <div>By proceeding, I express my consent to complete this transaction.</div>
        <div>Total Amount: Rs. 500 Proceed</div></div>

    </div>

</>  

);

}
export default Summary;