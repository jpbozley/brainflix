import './Home.scss'
import '../../styles/partials/_global.scss'
import Video from '../../Components/Video/Video'
import Comments from '../../Components/Comments/Comments'
import Upcoming from '../../Components/Upcoming/Upcoming'
import Hero from '../../Components/Hero/Hero'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Home() {

  const [videosArray, setVideosArray] = useState([]);
  const [currentVideo, setCurrentVideo] = useState([]);
  const [videosArraySimple, setVideosArraySimple] = useState([])
  const [currentVideoId, setCurrentVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");

  // let url = `https://project-2-api.herokuapp.com/videos/${currentVideoId}?api_key=0e3d748e-46f2-466e-b6b2-8f65f5a19bec`;



  let url = `http://localhost:8080/videos/${currentVideoId}`



  let params = useParams();
  useEffect(() => {
    if (currentVideoId !== params) {
      setCurrentVideoId(params.id)
      axios
        .get(url)
        .then((response) => setCurrentVideo(response.data))
    }
  }, [params])

  //This is the cornerstone of sprint2
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCurrentVideo(response.data)
      })
  }, [currentVideoId])

  //This is the simple array
  useEffect(() => {
    axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        setVideosArraySimple(response.data)
        setCurrentVideoId(null || response.data[0].id)
      })
      .catch(error => console.log(error));
  }, [])


  return (
    <div className="Home">
      <Hero currentVideo={currentVideo} />
      <div className="Home__info-container">
        <div className="Home__videos-comments">
          <Video videosArray={videosArray}
            videosArraySimple={videosArraySimple}
            currentVideo={currentVideo}
            currentVideoId={currentVideoId}
            setCurrentVideoId={setCurrentVideoId}
            url={url} />
          <Comments videosArray={videosArray}
            currentVideo={currentVideo} />
        </div>
        <div className="Home__upcoming">
          <Upcoming
            currentVideo={currentVideo}
            currentVideoId={currentVideoId}
            setCurrentVideo={setCurrentVideo}
            videosArraySimple={videosArraySimple}
            setCurrentVideoId={setCurrentVideoId}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;