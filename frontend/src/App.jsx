import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './LandingPage/Home/HomePage';
import PricingPage from './LandingPage/Pricing/PricingPage';
import ProductPage from './LandingPage/Products/ProductPage';
import SignUpPage from './LandingPage/SignUp/SignUpPage';
import SupportPage from './LandingPage/Support/SupportPage';
import AboutPage from './LandingPage/About/AboutPage';
import NotFound from "./LandingPage/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/signup' element={<SignUpPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/pricing' element={<PricingPage/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
        <Route path='/support' element={<SupportPage/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>  
    </BrowserRouter>
  )
}

export default App
