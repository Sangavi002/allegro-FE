import { Routes,Route} from "react-router-dom"
import { Female } from "./Female"
import { Navbar } from "./Navbar"
import { Home } from "./Home"
import { Footer } from "./Footer"
import { ProductDetail} from "./ProductDetail"
import {Login } from "./Login"
import { Register } from "./Register"
import { Cart } from "./Cart";
import { CartProvider } from "./CartContext"
import { Checkout } from "./Checkout"
import { HomeProduct } from "./HomeProduct"
import { PrivateRoute } from "./PrivateRoute"
import { SearchProvider } from "./SearchContext"
import { SearchProduct } from "./SearchProduct"

function App() {
  return(
    <>
    <CartProvider>
    <SearchProvider>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/:search/:productId" element={<SearchProduct />}/>
        <Route path="/female" element={<Female />}/>
        <Route path='/female/:category/:productId' element={<ProductDetail/>} />
        <Route path="/cart/:userId" element={<PrivateRoute><Cart /></PrivateRoute>}/>
        <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>} />
      </Routes>
    <Footer />
    </SearchProvider>
    </CartProvider>
    </> 
  )
}

export default App
