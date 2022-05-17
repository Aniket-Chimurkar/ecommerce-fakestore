
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import {Routes , Route } from "react-router-dom"
import Productpage from "./Components/productpage"
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import About from './Components/About'
import { Login } from './Components/Login'
import { SignUp } from './Components/Signup'
// import Footer from './Components/Footer'
import {useSelector} from "react-redux"
// import Signin from './Components/Signin'
import MainCart from './Components/MainCart'
import PrivateRoute from './Components/Privateroute'


function App() {
 
   const isAuthenticated =useSelector((state)=>state.login)
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/products" element={<Product/>}/>
      <Route exact path="/products/:id" element={<Productpage/>}/>
      {/* <Route exact path="/cart" element={<Cart/>}/> */}
        <Route exact path="/Mcart" element={<MainCart/>}/>
      <Route exact path="/checkout" element={<Checkout/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>

      <Route exact path='/cart' element={
        <PrivateRoute isAuthenticated={isAuthenticated}>
                <Cart/>
        </PrivateRoute>} />
     
     </Routes>
    <Footer/>
    
    </div>
  )
}

export default App
