import './Comments.scss';
import commentIcon from "../../Assets/Icons/add_comment.svg"
import profilePic from "../../Assets/Images/Mohan-muruge.jpg"

function Comments() {
  return (
    <div className="comments">


{/* # of Comments */}

<h1>3 Comments</h1>

{/* Profile pic, join the conversation, textbox */}
<div className="Comments__text-container">
    <img src={profilePic} alt="profile pic" className="Comments__profile-pic"/>
    <h2 className="Comments__title">Join the conversation</h2>
    <button className="Comments__button"><img src={commentIcon} alt="upload icon" />UPLOAD</button>
    <input type="textarea" />
</div>
{/* comment button */}

{/* displayed comments */}
    </div>
  );
}

export default Comments;
