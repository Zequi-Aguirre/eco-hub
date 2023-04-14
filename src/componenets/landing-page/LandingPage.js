// import React from 'react'
// import video1 from "../../assets/video/lionfish.mp4";
// import './landing-page.css'

// export default function LandingPage() {
//   return (
//     <div class="video-bg">
//       <video autoPlay muted loop className="video" src={video1}/>
//     <div id = "button-container" class="buttons-container">
//     <button id = "button button-report-sightings" class="button button-report-sightings">Report Sightings</button>
//     <button id = "button button-informational" class="button button-informational">Informational</button>
//     <button id = "button button-map" class="button button-map">Map</button>
//     </div>
//     </div>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import video1 from "../../assets/video/lionfish.mp4";
import './landing-page.css';



export default function LandingPage() {
  return (
    <div className="video-bg">
      <video autoPlay muted loop className="video" src={video1}/>
      <div id="button-container" className="buttons-container">
        <Link to="/report-sightings" id = "button button-report-sightings">
          <button className="button button-report-sightings">Report Sightings</button>
        </Link>
        <br></br>
        <Link to="/informational" id = "button button-informational">
          <button className="button button-informational">Informational</button>
        </Link>
        <br></br>
        <Link to="/map" id = "button button-map">
        <button className="button button-map">Map</button>
        </Link>
      </div>
    </div>
  )
}