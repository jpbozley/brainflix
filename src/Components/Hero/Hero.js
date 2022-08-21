import '../../styles/partials/_global.scss'
import './Hero.scss';


function Hero({videosArray, currentVideo}) {
  let displayedVideo=videosArray.find(video=>video.id===currentVideo)

  return (
    <div className="hero__display">
    <video className="hero__video" controls src={displayedVideo.video} poster={displayedVideo.image}></video>
  </div>
  );
}

export default Hero;