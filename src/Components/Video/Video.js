import videosArray from '../../Assets/Data/video-details.json'
import './Video.scss';


function Video() {
  return (
    <div className="videos">
      <div className="videos__display">
        <video className="videos__video" controls src={videosArray[0].video} poster={videosArray[0].image}></video>
      </div>
      <div className="videos__info">
        <h1 className="videos__title">{videosArray[0].title}</h1>
      </div>
    </div>
  );
}

export default Video;
