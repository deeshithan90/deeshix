// BannerVideo.js
import React from "react"
import vedio from './deeshix.mp4'

const BannerVideo = () => {
  return (
    <div className="banner-container">
      <video
        className="banner-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="banner-content">
        <h1 style={{fontSize:30,fontWeight:'bold',color:'white'}}>Welcome to DeeshiX</h1>
      </div>
    </div>
  );
};

export default BannerVideo;
