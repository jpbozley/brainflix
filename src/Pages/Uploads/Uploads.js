import '../../styles/partials/_global.scss'
import thumbnail from '../../Assets/Images/Upload-video-preview.jpg'
import './Uploads.scss';
import Confirmation from '../Confirmation/Confirmation';
import { Link } from 'react-router-dom';

function Uploads() {


  return (
    <div className="Uploads">
      <h1 className="Uploads__title">Upload Video</h1>
      <div className="Uploads__body">
      <div className="Uploads__container">
      <h2 className="Uploads__thumbnail-text">VIDEO THUMBNAIL</h2>
      <img className="Uploads__thumbnail" src={thumbnail} alt="bike-thumbnail" />
      </div>
      <div className="Uploads__form-container">
      <form className="Uploads__form">
        <div>
        <label className="Uploads__form-label">TITLE YOUR VIDEO
            <input className="Uploads__form-input"  type="text" placeholder='Add a title to your video'/>
        </label>
        </div>
        <div>
        <label className="Uploads__form-label">ADD A VIDEO DESCRIPTION
            <textarea className="Uploads__form-input" placeholder='Add a description to your video' rows='5'/>
        </label>
        </div>
        <div className="Uploads__button-container">
        <Link to='/confirmation' className="Uploads__button-link"><button className="Uploads__button-publish">PUBLISH</button></Link>
        <button className="Uploads__button-cancel">CANCEL</button>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Uploads;