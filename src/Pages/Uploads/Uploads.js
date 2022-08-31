import '../../styles/partials/_global.scss'
import thumbnail from '../../Assets/Images/Upload-video-preview.jpg'
import './Uploads.scss';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Uploads() {


  //start new add
  const formRef = useRef();
  const navigate = useNavigate();
  const addVideo = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/videos/",
      { title: "Test" }
    )
  };

  //end new add
  const submitHandler = () => {
    axios.post("http://localhost:8080/videos/");
    navigate('/confirmation')
  }
  return (
    <div className="Uploads">
      <h1 className="Uploads__title">Upload Video</h1>
      <div className="Uploads__body">
        <div className="Uploads__container">
          <h2 className="Uploads__thumbnail-text">VIDEO THUMBNAIL</h2>
          <img className="Uploads__thumbnail" src={thumbnail} alt="bike-thumbnail" />
        </div>
        <div className="Uploads__form-container">

          {/* change the onsubmit */}

          <form onSubmit={submitHandler} className="Uploads__form">
            <div>
              <label className="Uploads__form-label">TITLE YOUR VIDEO
                <input className="Uploads__form-input" id="title" type="text" placeholder='Add a title to your video' />
              </label>
            </div>
            <div>
              <label className="Uploads__form-label">ADD A VIDEO DESCRIPTION
                <textarea className="Uploads__form-input" id="description" placeholder='Add a description to your video' rows='5' />
              </label>
            </div>
            <div className="Uploads__button-container">
              {/* <Link to='/confirmation' className="Uploads__button-link"> */}
              <button type="submit" className="Uploads__button-publish">PUBLISH</button>
              {/* </Link> */}
              <Link to='/'><button className="Uploads__button-cancel">CANCEL</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Uploads;