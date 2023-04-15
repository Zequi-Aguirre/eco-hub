import React from "react";
import video4 from "../../assets/video/egret.mp4";
import MapComponent from "./MapComponent";

export default function Map() {
  return (
    // <video autoPlay muted loop className="video" src={video4} />
    <div className="video-bg">
      <div className="container">
        <MapComponent />
      </div>
    </div>
  );
}
