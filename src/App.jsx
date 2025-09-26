import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import Services from './component/Services.jsx';
import Gallery from './component/Gallery.jsx';
import Contact from './component/Contact.jsx';
import Bg from './component/Bg.jsx';
import Book from './component/Book.jsx';
import Whatsapp from './component/Whatsapp.jsx';
import Footer from './component/Footer.jsx';


function App() {
  const [language, setLanguage] = useState('en'); // ✅ global language state

  return (
    <>
    <Router>
      <Bg />
       <Whatsapp/>
        
      <Navbar language={language} setLanguage={setLanguage} /> {/* ✅ pass props */}
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/service" element={<Services language={language} />} />
        <Route path="/gallery" element={<Gallery language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/book-havan" element={<Book language={language} />} />
      </Routes>
    </Router>
    <Footer language={language} />
    </>
  );
}

export default App;
