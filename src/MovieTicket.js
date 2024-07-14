import React from 'react';
import './style.css'; 
import kangDaniel from './KANG DANIEL.jpeg'; 
import kalki from './et00352941-qdafpgypxr-portrait.avif';
import kill from './et00374797-kqytbtqgwb-portrait.avif';
import despicable from './et00386901-sgjlyfvnkl-portrait.avif';
import jhamkudi from './et00395950-qepaxerpzf-portrait.avif';
import boys from './et00399544-eckkfpnsft-portrait.avif';
import upskill from './upskill-collection-202211140440.avif';
import kids from './bmshp-desktop-kids-collection-202404190106.avif';
import web from './workshop-and-more-web-collection-202211140440.avif';
import kamedy from './comedy-shows-collection-202211140440.avif';
import music from './music-shows-collection-202211140440.avif';
import next from './icons8-next-page-64.png';
import premiere from './premiere-banner-web-collection-202208191200.avif';
import pass from './justpass.avif';
import vision from './visions.avif';
import seeding from './seeding.avif';
import garfield from './garfield.avif';
import ifavif from './if.avif';



function MovieTicket() {
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
          {/* <a href="/">
      <span>
        <Searchicon/>
      </span>
    </a> */}
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

      <h3>Recommended Movies</h3>
      <div className="movies">
        <div className="movie1">
          <a href="/">
            <img src={kalki} alt="" />
          </a>
          <a href="/">
            <div className="name">Kalki 2892 AD</div>
            <div className="genre">Action/Sci-fi/Thriller</div>
          </a>
        </div>
        <div className="movie2">
          <a href="/">
            <img src={kill} alt="" />
          </a>
          <a href="/">
            <div className="name">Kill</div>
            <div className="genre">Action/Thriller</div>
          </a>
        </div>
        <div className="movie3">
          <a href="/">
            <img src={despicable} alt="" />
          </a>
          <a href="/">
            <div className="name">Despicable Me 4</div>
            <div className="genre">Action/Adventure/Comedy/Animation</div>
          </a>
        </div>
        <div className="movie4">
          <a href="/">
            <img src={jhamkudi} alt="" />
          </a>
          <a href="/">
            <div className="name">Jhamkudi</div>
            <div className="genre">Comedy/Horror/Mystery</div>
          </a>
        </div>
        <div className="movie5">
          <a href="/">
            <img src={boys} alt="" />
          </a>
          <a href="/">
            <div className="name">Builder Boys</div>
            <div className="genre">Comedy</div>
          </a>
        </div>
      </div>
      <div className="box">


      </div>
      </div>

    <div className="main1">
        <h2>The best of live events</h2>
        <div className="live">
          <img src={upskill} alt="" />
          <img src={web} alt="" />
          <img src={kids} alt="" />
          <img src={kamedy} alt="" />
          <img src={music} alt="" />
          <a href="/">
            <img src={next} alt="" />
          </a>
        </div>
        <div className="premiere image1">
          <a href="/">
            <img src={premiere} alt="" />
          </a>
          <div className="box1">
            <a href="/">
              <div className="prem">
                <img src={pass} alt="" />
                <img src={seeding} alt="" />
                <img src={vision} alt="" />
                <img src={garfield} alt="" />
                <img src={ifavif} alt="" />
                <img src={next} alt="" />
              </div>
            </a>
          </div>


        </div>
      </div></>

   );
   }
export default MovieTicket;
                