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
<<<<<<< HEAD
            <Route path="/signin" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
=======
            <Route path='/FindMate' element={<FindMate />} />
            {/* <Route path='/Portfolio' element={<Portfolio />} /> */}
>>>>>>> 4a8c1e8150eeb7886fbcfc841cd6e75bc85e9770
          </Routes>
        </BrowserRouter>
 
    </>
  );
}

export default App;
