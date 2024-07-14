import Navbar from "./Navbar";
import React from 'react';
import ReactDOM from 'react-dom';
import MovieTicket from './MovieTicket';
import BookTickets from './BookTickets';
import Time from './Time';
import Seats from "./Seats";
import Summary from "./Summary";
function App() {
  return (
    <div>
      {window.location.pathname === '/login'? (
        <Navbar />
      )
       :
        (
        <MovieTicket />
      )}
      (
        <BookTickets />

      )
      (
        <Time/>
      )
      (
        <Seats/>
      )
      (
        <Summary/>
      )
      
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;

