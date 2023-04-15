import React from 'react'
import video3 from '../../assets/video/snail.mp4'

export default function ReportSightings() {
  return (
    <div className="video-bg">
      <div className="container">
     <video autoPlay muted loop className="video" src={video3}/>
     </div>
     </div>
  )
}
