import './Comments.scss';
import commentIcon from "../../Assets/Icons/add_comment.svg"
import profilePic from "../../Assets/Images/Mohan-muruge.jpg"

function Comments() {
  return (
    <div className="comments">


{/* # of Comments */}

<h1 className="Comments__count">3 Comments</h1>

{/* Profile pic, join the conversation, textbox */}
<div className="Comments__container">
    <div className="Comments__profile-pic-container">
        <img src={profilePic} alt="profile pic" className="Comments__profile-pic"/>
    </div>
    <div className="Comments__text-container">
        <h2 className="Comments__title">Join the conversation</h2>
        <input type="textarea" className="Comments__text-area" placeholder="Add a new comment"/>
        <button className="Comments__button"><img src={commentIcon} alt="comment icon" />COMMENT</button>
    </div>
</div>

{/* displayed comments */}
    </div>
  );
}

export default Comments;
