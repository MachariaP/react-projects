import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import MpesaPayment from './pages/MpesaPayment';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/mpesa-payment" element={<MpesaPayment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;