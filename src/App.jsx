import { Routes,Route} from "react-router-dom"
import { Female } from "./Female"
import { Navbar } from "./Navbar"
import { Home } from "./Home"
import { Footer } from "./Footer"
import { ProductDetail} from "./ProductDetail"
import {Login } from "./Login"
import { Register } from "./Register"
import { Cart } from "./Cart"

function App() {
  return(
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/female" element={<Female />}/>
        <Route path='/female/:category/:productId' element={<ProductDetail/>} />
        <Route path="/cart/:userId" element={<Cart />}/>
      </Routes>
    <Footer />
    </> 
  )
}

export default App
