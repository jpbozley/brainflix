import './Video.scss';
import '../../styles/partials/_global.scss'
import likes from '../../Assets/Icons/likes.svg'
import views from '../../Assets/Icons/views.svg'

function Video({videosArray,currentVideo}) {

  let displayedVideo=videosArray.find(video=>video.id===currentVideo)
  let convertedDate=new Date(displayedVideo.timestamp);

  return (
    <section className="videos">
      <div className="videos__info">
        <h1 className="videos__title">{displayedVideo.title}</h1>
        <div className="videos__stats-container">
          <div className="videos__author-date-container">
            <p className="videos__author">
              By: {displayedVideo.channel}
            </p>
            <p className="videos__date">
              {convertedDate.toLocaleDateString()}
            </p>
          </div>
          <div className="videos__views-likes-container">
            <p className="videos__views">
              <img src={views} alt="views" />{displayedVideo.views}
            </p>
            <p className="videos__likes">
              <img src={likes} alt="likes" />{displayedVideo.likes}
            </p>
          </div>
        </div>
        <div class="videos__description">
          <p>{currentVideo.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Video;