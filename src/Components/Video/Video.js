import './Video.scss';
import '../../styles/partials/__global.scss'
import likes from '../../Assets/Icons/likes.svg'
import views from '../../Assets/Icons/views.svg'

function Video({videosArray}) {
let convertedDate=new Date(videosArray[0].timestamp);

  return (
    <section className="videos">
      <div className="videos__info">
        <h1 className="videos__title">{videosArray[0].title}</h1>
        <div className="videos__stats-container">
          <div className="videos__author-date-container">
            <p className="videos__author">
              By: {videosArray[0].channel}
            </p>
            <p className="videos__date">
              {convertedDate.toLocaleDateString()}
            </p>
          </div>
          <div className="videos__views-likes-container">
            <p className="videos__views">
              <img src={views} alt="views" />{videosArray[0].views}
            </p>
            <p className="videos__likes">
              <img src={likes} alt="likes" />{videosArray[0].likes}
            </p>
          </div>
        </div>
        <div class="videos__description">
          <p>{videosArray[0].description}</p>
        </div>
      </div>
    </section>
  );
}

export default Video;
