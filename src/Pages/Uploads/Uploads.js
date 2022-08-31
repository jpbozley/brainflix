import '../../styles/partials/_global.scss'
import thumbnail from '../../Assets/Images/Upload-video-preview.jpg'
import './Uploads.scss';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Uploads() {


  const formRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/videos/", {
      description: formRef.current.description.value,
      title: formRef.current.title.value
    });
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

          <form onSubmit={submitHandler} ref={formRef} className="Uploads__form">
            <div>
              <label className="Uploads__form-label">TITLE YOUR VIDEO
                <input className="Uploads__form-input" id="title" name="title" type="text" placeholder='Add a title to your video' />
              </label>
            </div>
            <div>
              <label className="Uploads__form-label">ADD A VIDEO DESCRIPTION
                <textarea className="Uploads__form-input" name="description" id="description" placeholder='Add a description to your video' rows='5' />
              </label>
            </div>
            <div className="Uploads__button-container">
              <button type="submit" className="Uploads__button-publish">PUBLISH</button>
              <Link to='/'><button className="Uploads__button-cancel">CANCEL</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Uploads;