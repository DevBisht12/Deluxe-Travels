import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './components/utils/Footer/Footer'
import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/about" element={<About/>} /> */}
      {/* <Route path="/contact" element={<Contact/>} /> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
