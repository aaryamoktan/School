import Nevbar from "./Component/Nevbar"
import Top from "./Component/Top"
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import Studentloin from "./Page/Studentloin"
import Contact from "./Page/Contact"
import RefisterForm from "./Page/RefisterForm"
import Programs from "./Page/Programs"
import About from "./Page/About"
import Gallary from "./Page/Gallary"
import {BrowserRouter, Route,Routes } from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Top/>
    <Nevbar/>

    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/RefisterForm" element={<RefisterForm/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Studentloin" element={<Studentloin/>}/>
      <Route path="/Programs" element={<Programs/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Gallary" element={<Gallary/>}/>
      <Route path="/" element={<Header/>}/>
      <Route path="/" element={<Header/>}/>
      <Route path="/" element={<Header/>}/>
      <Route path="/" element={<Header/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}
export default App