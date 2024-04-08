import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Carts/Cart';
import  ShopContextProvider from './context/ShopContext';
import About from './Pages/About Us/About';
import Footer from './Components/Footer';
import Contact from './Pages/Contact us/Contact';

function App() {
  return (
    <div className="App">
      
     < ShopContextProvider>
        <BrowserRouter>
          <Navbar/>
          
          <Routes>
            <Route path='/' element={<Shop/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          
        </BrowserRouter>
        <Footer/>
        </ ShopContextProvider>
        
    </div>
  );
}

export default App;
