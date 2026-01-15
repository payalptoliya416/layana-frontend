import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/FinchleyPages/home/Home"
import Footer from "./component/common/Footer"
import FinchleyCenteral from "./pages/FinchleyPages/Finchley/FinchleyCenteral"
import Team from "./pages/FinchleyPages/team/Team"
import TermCondition from "./pages/FinchleyPages/term-condition/TermCondition"
import Header from "./component/common/Header"
import OilMassage from "./pages/treatments/tratementPages/OilMassage"
import Massage from "./pages/treatments/tratementPages/Massage"
import Beauty from "./pages/treatments/beauty/Beauty"
import BeautyNail from "./pages/treatments/beauty/BeautyNail"
import Beautyinviron from "./pages/treatments/beauty/Beautyinviron"
import BeautyWaxing from "./pages/treatments/beauty/BeautyWaxing"
import ContactUs from "./pages/FinchleyPages/contact-us/ContactUs"
import SpaPackages from "./pages/FinchleyPages/spa-packages/SpaPackages"
import MemberShip from "./pages/FinchleyPages/membership/MemberShip"

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/finchley" element={<FinchleyCenteral/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/term-condition" element={<TermCondition/>}/>

        {/* ---- */}
        <Route path="/treatments/massage" element={<Massage/>}/>
        <Route path="/treatments/oil-massage" element={<OilMassage/>}/>
        
        {/* ---- */}
        <Route path="/treatments/beauty" element={<Beauty/>}/>
        <Route path="/treatments/beauty-nail" element={<BeautyNail/>}/>
        <Route path="/treatments/beauty-waxing" element={<BeautyWaxing/>}/>
        <Route path="/treatments/beauty-environ" element={<Beautyinviron/>}/>

        {/* ---- */}
        <Route path="/contact-us" element={<ContactUs/>}/>
        {/* ---- */}
        <Route path="/spa-packages" element={<SpaPackages/>}/>
        {/* ---- */}
        <Route path="/membership" element={<MemberShip/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
