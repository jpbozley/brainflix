import '../../styles/partials/__global.scss'
import './Hero.scss';


function Hero({videosArray}) {
  return (
    <div className="hero__display">
    <video className="hero__video" controls src={videosArray[0].video} poster={videosArray[0].image}></video>
  </div>
  );
}

export default Hero;
