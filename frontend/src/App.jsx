import Nevbar from "./Component/Nevbar"
import Top from "./Component/Top"
import Header from "./Component/Header"
import Footer from "./Component/Footer"
import RefisterForm from "./Page/RefisterForm"
import Contact from "./Page/Contact"
import Studentloin from "./Page/Studentloin"
import Programs from "./Page/Programs"
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
      <Route path="/" element={<Header/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}
export default App