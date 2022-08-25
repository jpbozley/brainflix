import '../../styles/partials/_global.scss'
import './Upcoming.scss';
import { Link } from 'react-router-dom';
function Upcoming({ currentVideo, setCurrentVideo, videosArraySimple, currentVideoId }) {

  // const selectVideo = (obj) => {
  //   setCurrentVideo(obj)
  // }

  return (
    <div className="Upcoming">
      <h2 className="Upcoming__title">NEXT VIDEOS</h2>
      {videosArraySimple?.map((video) => {
        return <Link class="Upcoming__link" to={`/${video.id}`}>
          <div key={video.id}
            className={`Upcoming__list-item ${currentVideoId === video.id ? "Upcoming__display-none" : ""}`} >
            <div className="Upcoming__list-image-container">
              <img className="Upcoming__list-image" src={video.image} alt="video thumbnail" />
            </div>
            <div className="Upcoming__list-item-info">
              <h3 className="Upcoming__list-item-title">{video.title}</h3>
              <h3 className="Upcoming__list-item-channel">{video.channel}</h3>
            </div>
          </div></Link>
      })}
    </div>


  );
}

export default Upcoming;