import '../../styles/partials/_global.scss'
import './Upcoming.scss';

function Upcoming({currentVideo, setCurrentVideo, videosArraySimple,setCurrentVideoId}) {

  const selectVideo=(obj)=>{
    setCurrentVideo(obj)
  }

  return (
    <div className="Upcoming">
        <h2 className="Upcoming__title">NEXT VIDEOS</h2>
        {videosArraySimple?.map((video)=>{
            return <div key={video.id}
            onClick={()=>selectVideo(video)} 
            className={`Upcoming__list-item ${currentVideo===video.id ? "Upcoming__display-none" : ""}`} >
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