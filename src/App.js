
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Cart from './Components/Pages/Cart/Cart';
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './Components/LoginPopup/LoginPopup';


function App() {
  const[showLogin,setShowLogin] = useState(false);
  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}


    <div className="App">

      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
    
    </div>
    <Footer/>
    </>
  );
}

export default App;
