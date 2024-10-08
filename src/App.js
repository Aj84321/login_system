import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Login from './containers/Login';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
