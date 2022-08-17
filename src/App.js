import './App.css';
import './styles/partials/__global.scss'
import videosArray from './Assets/Data/video-details.json'
import Header from './Components/Header/Header'
import Video from './Components/Video/Video'
import Comments from './Components/Comments/Comments'
import Upcoming from './Components/Upcoming/Upcoming'

function App() {
  return (
    <div className="App">
      <Header />
      <Video />
      <Comments />
      <Upcoming />
    </div>
  );
}

export default App;
