import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Login from './containers/Login';
import Profile from './containers/Profile';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />


        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
