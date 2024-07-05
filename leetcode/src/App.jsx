import React from "react"
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Header/Navbar"
import Footer from "./components/Footer/Footer"
import User from "./pages/User"
function App() {
   return <>
   <Navbar/>
   <Routes>
      <Route path="/user/:u_name" element={<User/>} />
   </Routes>
   <Footer/>
   </>
}

export default App
