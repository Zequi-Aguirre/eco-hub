import React from 'react'
import video4 from '../../assets/video/egret.mp4'

export default function Map() {
  return (
    <div className="video-bg">
    <div className="container">
   <video autoPlay muted loop className="video" src={video4}/>
   </div>
   </div>
  )
}
