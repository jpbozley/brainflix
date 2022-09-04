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




  let url = `http://localhost:8080/videos/${currentVideoId}`



  let params = useParams();
  useEffect(() => {
    if (currentVideoId !== params) {
      setCurrentVideoId(params.id)
      axios
        .get(url)
        .then((response) => setCurrentVideo(response.data))
        .catch((error) => { console.log(error) })
    }
  }, [params])

  //gets data from the larger array
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCurrentVideo(response.data)
      })
      .catch((error) => { console.log(error) })
  }, [currentVideoId])


  //sets the shorter array
  useEffect(() => {
    axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        setVideosArraySimple(response.data)
        setCurrentVideoId(null || response.data[0].id)
      })
      .catch((error) => { console.log(error) })
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