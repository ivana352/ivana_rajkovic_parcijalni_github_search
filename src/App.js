import './App.css';
import Home from './components/pages/home/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import User from './components/pages/user/User';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/user/:login' element={ <User />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;