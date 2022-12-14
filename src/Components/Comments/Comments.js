import './Comments.scss';
import '../../styles/partials/_global.scss'
import profilePic from "../../Assets/Images/Mohan-muruge.jpg"

function Comments({ videosArray, currentVideo }) {


  if (currentVideo.comments === null || videosArray === null) { console.log("waiting"); return <h1>waiting...</h1> }

  return (
    <section className="comments">


      {/* # of Comments */}
      {currentVideo.comments ?
        <h1 className="Comments__count">{currentVideo.comments.length} Comments</h1>
        : <h1>"Loading"</h1>
      }


      {/* Profile pic, join the conversation, textbox */}
      <div className="Comments__container">
        <div className="Comments__profile-pic-container">
          <img src={profilePic} alt="profile pic" className="Comments__profile-pic" />
        </div>
        <div className="Comments__text-container">
          <div>
            <h2 className="Comments__title">Join the conversation</h2>
            <textarea className="Comments__text-area" rows="6" placeholder="Add a new comment" />
          </div>
          <button className="Comments__button">COMMENT</button>
        </div>
      </div>

      {/* displayed comments */}
      <div className="Comments__display">
      </div>
      {currentVideo.comments?.map((array) => {
        let convertedDate = new Date(array.timestamp);
        return (
          <div className="Comments__container">
            <div className="Comments__profile-circle-container">
              <div className="Comments__profile-circle"></div>
            </div>
            <div className="Comments__info-container">
              <div className="Comments__comment-header">
                <p className="Comments__comment-name">{array.name}</p>
                <p className="Comments__comment-date">{convertedDate.toLocaleDateString()}</p>
              </div>
              <div className="Comments__content-container">
                <p>{array.comment}</p>
              </div>
            </div>
          </div>)
      })}
    </section>
  );
}

export default Comments;