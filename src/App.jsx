import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Work from './pages/Work'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './index.css'

function App() {
  return (
    <Router>
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </main>
      </SmoothScroll>
    </Router>
  )
}

export default App
