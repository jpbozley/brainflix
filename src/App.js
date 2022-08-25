import './App.css';
import './styles/partials/_global.scss';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Uploads from './Pages/Uploads/Uploads'
import Confirmation from './Pages/Confirmation/Confirmation';
import Video from './Components/Video/Video';
function App() {

  
return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/uploads' element={<Uploads/>}></Route>
        <Route path='/confirmation' element={<Confirmation/>}></Route>
        <Route path='/:id' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;