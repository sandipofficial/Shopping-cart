import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className="h-[100vh]">
      <div className="bg-red-100  ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart"  element= {<Cart/>} />
        </Routes>
      </div>
    </div>
    
  )
};

export default App;
