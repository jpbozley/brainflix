import '../../styles/partials/_global.scss'
import './Confirmation.scss';
import { Link } from 'react-router-dom';


function Confirmation() {


  return (
    <div className="Confirmation">
      <h1>Your video has been uploaded!</h1>
      <Link to='/'><button className="Confirmation__button">Return Home</button></Link>
    </div>
  );
}

export default Confirmation;