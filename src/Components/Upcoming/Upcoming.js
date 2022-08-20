import '../../styles/partials/__global.scss'
import './Upcoming.scss';
import {useState} from "react";

function Upcoming({videosArray, currentVideo, setCurrentVideo}) {

  const selectVideo=(id)=>{
    setCurrentVideo(id)
  }

  return (
    <div className="Upcoming">
        <h2 className="Upcoming__title">NEXT VIDEOS</h2>
        {videosArray?.map((video)=>{
            return <div key={video.id} className={`Upcoming__list-item ${currentVideo.id===video.id ? "Upcoming__display-none" : ""}`} >
            <div className="Upcoming__list-image-container">
                <img className="Upcoming__list-image" src={video.image} alt="video thumbnail"/>
            </div>
            <div className="Upcoming__list-item-info">
                <h3 className="Upcoming__list-item-title">{video.title}</h3>
                <h3 className="Upcoming__list-item-channel">{video.channel}</h3>
            </div>
            </div>
        })}
    </div>
  );
}

export default Upcoming;
