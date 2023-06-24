import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoToTop from './components/GoToTop/GoToTop';


function App() {
  return (
    <>
      <GoToTop/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
 
    </>
  );
}

export default App;
