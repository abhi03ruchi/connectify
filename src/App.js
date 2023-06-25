import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/UserDashboard/Dashboard';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GoToTop from './components/GoToTop/GoToTop';
import FindMate from './components/FindMate/FindMate';
// import Portfolio from './components/PortFolio/PortFolio';
// import Portfolio from './components/portfolio-gen-frontend/index.html'

function App() {
  return (
    <>
      <GoToTop/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/signin" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path='/FindMate' element={<FindMate />} />
            {/* <Route path='/Portfolio' element={<Portfolio />} /> */}
          </Routes>
        </BrowserRouter>
 
    </>
  );
}

export default App;
