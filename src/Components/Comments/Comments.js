import './Comments.scss';
import commentIcon from "../../Assets/Icons/add_comment.svg"
import profilePic from "../../Assets/Images/Mohan-muruge.jpg"

function Comments({videosArray}) {

  let mappedComments=videosArray.map((video)=>{
    return video.comments
  })
  return (
<section className="comments">


{/* # of Comments */}

<h1 className="Comments__count">3 Comments</h1>

{/* Profile pic, join the conversation, textbox */}
<div className="Comments__container">
    <div className="Comments__profile-pic-container">
        <img src={profilePic} alt="profile pic" className="Comments__profile-pic"/>
    </div>
    <div className="Comments__text-container">
        <h2 className="Comments__title">Join the conversation</h2>
        <textarea className="Comments__text-area" rows="6" placeholder="Add a new comment"/>
        <button className="Comments__button"><img className="Comments__button-icon" src={commentIcon} alt="comment icon" />COMMENT</button>
    </div>
</div>

{/* displayed comments */}
<div className="Comments__display">
  </div>
    {mappedComments[0].map((array)=>{
      let convertedDate=new Date(array.timestamp);
      return (
    <div className="Comments__container">
      <div className="Comments__profile-circle-container">
        <div className="Comments__profile-circle"></div>
      </div>
      <div className="Comments__info-container">
        <div className="Comments__comment-header">
          <p>{array.name}</p>
          <p>{convertedDate.toLocaleDateString()}</p>
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
