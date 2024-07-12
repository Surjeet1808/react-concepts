import Mainui from './component/Mainui'
import { Show } from './component/Show'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return <>
     <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Mainui/>} />
          <Route path="/iamthehacker" element={<Show/>} />
        </Routes>
      </BrowserRouter>
     </>
}

export default App
