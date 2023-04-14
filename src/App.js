// import './App.css';
// import { Link, Route, Routes} from "react-router-dom";
// import {useState, useEffect} from 'react';

// import LandingPage from './componenets/landing-page/LandingPage';
// import ReportSightings from './componenets/report-sightings/ReportSightings';
// import Informational from './componenets/informational/Informational';
// import Map from './componenets/map/Map';


// function App() {
//   return (
//     <div className="App">
// 				<LandingPage></LandingPage>
//         <Routes>
//         <Route exact path="/" component={LandingPage} />
//         <Route path="/report-sightings" component={ReportSightings} />
//         <Route path="/informational" component={Informational} />
//         <Route path="/map" component={Map} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

import LandingPage from './componenets/landing-page/LandingPage';
import ReportSightings from './componenets/report-sightings/ReportSightings';
import Informational from './componenets/informational/Informational';
import Map from './componenets/map/Map';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/report-sightings" element={<ReportSightings />} />
        <Route path="/informational" element={<Informational />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;