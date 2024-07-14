import React from 'react';
import './style.css';
import kangDaniel from './KANG DANIEL.jpeg'; 
import kalkibg from './kalki-2898-ad-et00352941-1718275859.avif';
import kalkifront from './kalki-2898-ad-et00352941-1718275859 (1).avif';
import prabhas from './prabhas-1708-1686915417.avif';
import amit from './amitabh-bachchan-138-12-09-2017-02-34-37.avif';
import deepu from './deepika-padukone-2822-12-09-2017-06-31-43.avif';
import disha from './disha-patani-1061408-1714379037.avif';
import pasu from './pasupathy-ramasaamy-6875-24-03-2017-17-50-02.avif';
import next from './icons8-next-page-64.png';
import nag from './nag-ashwin-1052409-09-03-2017-04-25-08.jpg';
import pri from './priyanka-dutta-1060391-30-04-2018-12-42-36.avif';
import kota from './kotagiri-venkateswara-rao-iein010085-24-03-2017-14-32-14.avif';
import santosh from './santhosh-narayanan-1068255-1663739610.avif';
import ash from './c.-ashwini-dutt-iein024153-12-04-2018-15-00-27.avif';


function BookTickets() {
  return (
    <>
    <div className="main">
      <nav>
        <div className="board">
          <img src={kangDaniel} alt="" />
          <div className="starlight">
            <span className="text1">Starlight&nbsp;</span>
            <span className="text2">Multiplex</span>
          </div>
        </div>
        <div className="search">
          <a href="/">
            <span>
              <img src="icons8-search.svg" alt="" />
            </span>
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
      <div className="kalki">
        <img className="image3" src={kalkibg} alt="" />
        <div className="box5">
          <img className="image2" src={kalkifront} alt="" />
          <div className="text">
            <span>Kalki 2898 AD</span>
            <br />
            <div className="rate">8.7/10</div>
            <span>2D,3D,IMAX 2D, IMAX 3D</span>
            <br />
            <span>Tamil, Kannada, Hindi, Malayalam, Telugu</span>
            <br />
            <span>3h 1m - Action/thriller/Sci-Fi - UA - 27 June 2024</span>
            <br />
            <span>
              <button>Book Tickets</button>
            </span>
          </div>
        </div>
      </div>
      <div className="about">
        <span>About the movie</span>
        <br />
        <span>When the world is taken over by darkness. A force will rise.</span>
      </div>
      <div className="cast">
        <div className="line" />
        <div>Cast</div>
        <a href="/">
          <div className="star1">
            <img src={prabhas} alt="" />
            <div>Prabhas</div>
            <div>as bhairav</div>
          </div>
          <div className="star2">
            <img src={amit} alt="" />
            <div>Amitabh Bachchan</div>
            <div>as Ashwatthama</div>
          </div>
          <div className="star3">
            <img src={deepu} alt="" />
            <div>Deepika Padukone</div>
            <div>Actor</div>
          </div>
          <div className="star4">
            <img src={disha} alt="" />
            <div>Disha Patni</div>
            <div>Actor</div>
          </div>
          <div className="star5">
            <img src={pasu} alt="" />
            <div>Pasupathy Ramasaamy</div>
            <div>Actor</div>
          </div>
          <div>
            <img src={next} alt="" />
          </div>
        </a>
        <div className="line" />
      </div>
      <div className="crew">
        <div>Crew</div>
        <a href="/">
        <div class="crew1">
                    <img src={nag} alt="" />
                    <div>Nag Ashwin</div>
                    <div>Actor, Director</div>
                </div>
                <div class="crew1">
                    <img src={ash} alt="" />
                    <div>C Ashwini Dutt</div>
                    <div>Producer</div>
                </div>
                    <div class="crew1">
                    <img src={pri} alt="" />
                    <div>Priyanka Dutt</div>
                    <div>Producer</div>
                </div>
                    <div class="crew1">
                    <img src={santosh} alt="" />
                    <div>Santosh Narayanan</div>
                    <div>Musician</div>
                </div>
                    <div class="crew1">
                    <img src={kota} alt="" />
                    <div>Kotagiri</div>
                    <div>Editor</div>
                </div>

                <div>
                    <img src={next}alt="" />
                </div>

            </a>
            <div class="line"></div>
            </div>
    </div>

         







</>);
}
export default BookTickets;