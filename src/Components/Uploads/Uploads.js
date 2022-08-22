import '../../styles/partials/_global.scss'
import './Uploads.scss';

function Uploads() {


  return (
    <div className="Uploads">
      <h1>Upload Video</h1>
      <h2>Video Thumbnail</h2>
      <img src="../../Assets/Upload-video-preview.jpg" alt="bike-thumbnail" />
      <form>
        <label>TITLE YOUR VIDEO
            <input type="text" placeholder='Add a title to your video'/>
        </label>
        <label>ADD A VIDEO DESCRIPTION
            <input type="text" placeholder='Add a description to your video'/>
        </label>
        <button>PUBLISH</button>
      </form>
        <button>CANCEL</button>
    </div>
  );
}

export default Uploads;