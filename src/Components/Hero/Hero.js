import '../../styles/partials/_global.scss'
import './Hero.scss';


function Hero({ currentVideo }) {
  if (currentVideo === null) { return <h1>waiting...</h1> }

  return (
    <div className="hero__display">
      <video className="hero__video" controls src={currentVideo.video} poster={currentVideo.image}></video>
    </div>
  );
}

export default Hero;