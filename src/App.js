import './App.css';
import './styles/partials/__global.scss'
import videosArrayData from './Assets/Data/video-details.json'
import Header from './Components/Header/Header'
import Video from './Components/Video/Video'
import Comments from './Components/Comments/Comments'
import Upcoming from './Components/Upcoming/Upcoming'
import Hero from './Components/Hero/Hero'
import {useState} from 'react'



function App() {
  const [videosArray, setVideosArray]=useState(videosArrayData);
  const [currentVideo, setCurrentVideo]=useState(videosArrayData[0]);

return (
    <div className="App">
      <Header />
      <Hero videosArray={videosArray}
      currentVideo={currentVideo}/>
      <div className="App__info-container">
      <div className="App__videos-comments">
      <Video videosArray={videosArray}
      currentVideo={currentVideo}/>
      <Comments videosArray={videosArray}/>
      </div>
      <div className="App__upcoming">
      <Upcoming videosArray={videosArray}
      currentVideo={currentVideo}
      setCurrentVideo={setCurrentVideo}/>
      </div>
      </div>
    </div>
  );
}

export default App;
