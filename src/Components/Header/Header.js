import '../../styles/partials/_global.scss'
import './Header.scss';
import logo from '../../Assets/Logo/BrainFlix-logo.svg'
import upload from "../../Assets/Icons/upload.svg"
import profilePic from "../../Assets/Images/Mohan-muruge.jpg"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
        <div className="Header__logo"><a href="../../../"><img src={logo} alt="Logo"/></a></div>
        <div className="Header__container">
        <div className="Header__search-div">
            <input type="text" placeholder="Search" className="Header__searchbox"/>
            <img src={profilePic} alt="profile pic" className="Header__profile-pic"/>
        </div>
        <Link to="/uploads" className="Header__button-link"><button className="Header__button"><img className="Header__button-icon" src={upload} alt="upload icon" />UPLOAD</button></Link>
        <img src={profilePic} alt="profile pic" className="Header__profile-pic-tablet"/>
        </div>
    </div>
  );
}

export default Header;