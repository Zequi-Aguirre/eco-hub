import React from "react";
import MapComponent from "./MapComponent";
import ChatWindow from "../openAI/openAI";
import SpeciesSearch from "../speciesSearch/SpeciesSearch";

export default function Map() {
  const egretVideoUrl =
    "https://res.cloudinary.com/dacloudycloud/video/upload/v1681574569/egret.mp4";
  return (
    // <video autoPlay muted loop className="video" src={video4} />
    <div>
      <ChatWindow />
      <SpeciesSearch />
    </div>
    // <MapComponent />
    // <div className="video-bg">
    //   <div className="container">
    //     <video autoPlay muted loop className="video" src={egretVideoUrl} />
    //   </div>
    // </div>
  );
}
