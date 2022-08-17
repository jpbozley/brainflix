import './Header.scss';
import logo from '../../Assets/Logo/BrainFlix-logo.svg'
import upload from "../../Assets/Icons/upload.svg"
import profilePic from "../../Assets/Images/Mohan-muruge.jpg"
import search from "../../Assets/Icons/search.svg"
function Header() {
  return (
    <div className="Header">
        <img src={logo} alt="Logo" className="Header__logo"/>
        <div className="Header__search-div">
            <input type="text" placeholder= {`Search`} className="Header__searchbox"/>
            <img src={profilePic} alt="profile pic" className="Header__profile-pic"/>
        </div>
        <button className="Header__button"><img className="Header__button-icon" src={upload} alt="upload icon" />UPLOAD</button>
    </div>
  );
}

export default Header;
