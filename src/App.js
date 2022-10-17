import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Thankyou from './Thankyou';
import Userlist from './Userlist';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/users' element={<Userlist/>}/>
      <Route path='/thankyou' element={<Thankyou/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
