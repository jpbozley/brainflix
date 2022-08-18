import './App.css';
import './styles/partials/__global.scss'
import videosArrayData from './Assets/Data/video-details.json'
import Header from './Components/Header/Header'
import Video from './Components/Video/Video'
import Comments from './Components/Comments/Comments'
import Upcoming from './Components/Upcoming/Upcoming'
import {useState} from 'react'



function App() {
  const [videosArray, setVideosArray]=useState(videosArrayData);
  return (
    <div className="App">
      <Header />
      <Video videosArray={videosArray}/>
      <Comments videosArray={videosArray}/>
      <Upcoming videosArray={videosArray}/>
    </div>
  );
}

export default App;
