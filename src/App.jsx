
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './pages/shared/Navbar/Navbar'
import Footer from './pages/Home/Footer/Footer'


function App() {
 

  return (
    <div className=' mx-auto mt-5 font-josefin'>
  
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
     
    </div>
  )
}

export default App
