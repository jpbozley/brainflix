import './Home.scss'
import '../../styles/partials/_global.scss'
import videosArraySimple from '../../Assets/Data/videos.json'
import Video from '../../Components/Video/Video'
import Comments from '../../Components/Comments/Comments'
import Upcoming from '../../Components/Upcoming/Upcoming'
import Hero from '../../Components/Hero/Hero'
import videosArrayData from '../../Assets/Data/video-details.json'
import {useState} from 'react'

function Home() {
    const [videosArray, setVideosArray]=useState(videosArrayData);
    const [currentVideo, setCurrentVideo]=useState(videosArrayData[0].id);
  

  return (
    <div className="Home">
     <Hero videosArray={videosArray}
      currentVideo={currentVideo}/>
      <div className="Home__info-container">
      <div className="Home__videos-comments">
      <Video videosArray={videosArray}
      currentVideo={currentVideo}/>
      <Comments videosArray={videosArray}
      currentVideo={currentVideo}/>
      </div>
      <div className="Home__upcoming">
      <Upcoming
      currentVideo={currentVideo}
      setCurrentVideo={setCurrentVideo}
      videosArraySimple={videosArraySimple}/>
      </div>
      </div>
    </div>
  );
}

export default Home;