import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Footer from "./component/common/Footer"
import FinchleyCenteral from "./pages/Finchley/FinchleyCenteral"
import Team from "./pages/team/Team"
import TermCondition from "./pages/term-condition/TermCondition"
import Header from "./component/common/Header"

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
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
