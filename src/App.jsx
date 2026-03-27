import{ Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contanct from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Menubar from './components/Menubar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contanct />} />
        <Route path='/hire' element={<Contanct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App