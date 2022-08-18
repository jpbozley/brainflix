import '../../styles/partials/__global.scss'
import './Upcoming.scss';
import videosArray from '../../Assets/Data/video-details.json'

function Upcoming() {
  return (
    <div className="Upcoming">
        <h2 className="Upcoming__title">NEXT VIDEOS</h2>
        {videosArray.map((video)=>{
            return <div className="Upcoming__list-item">
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
