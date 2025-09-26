import { Link } from 'react-router-dom';
import { BsMoon, BsSun } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import logo from '../image/Logo.jpg';
import Book from './Book';

function CollapsibleExample({ language, setLanguage }) {  // ✅ props receive kiye
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-light');
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={darkMode ? 'dark' : 'warning'}
      variant={darkMode ? 'dark' : 'dark'}
      className="shadow mb-3"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand className="d-flex flex-row align-items-center text-dark">
          <div className="rounded-circle overflow-hidden me-3" style={{ width: '50px', height: '50px' }}>
            <img src={logo} alt="Logo" className="img-fluid w-100 h-100" />
          </div>
          <div className="d-flex flex-column">
            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: darkMode ? '#e0e0e0' : '#555' }}>
              मां बगलामुखी उपासक
            </span>
            <span style={{ fontSize: '0.8rem', color: darkMode ? '#d0d0d0' : '#777' }}>
              आचार्य पं नितीश जी शर्मा
            </span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Navbar Links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: darkMode ? '#e0e0e0' : '#555' }}>
              {language === 'en' ? 'Home' : 'होम'}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: darkMode ? '#e0e0e0' : '#555' }}>
              {language === 'en' ? 'About' : 'हमारे बारे में'}
            </Nav.Link>
            <Nav.Link as={Link} to="/service" style={{ color: darkMode ? '#e0e0e0' : '#555' }}>
              {language === 'en' ? 'Services' : 'सेवाएँ'}
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" style={{ color: darkMode ? '#e0e0e0' : '#555' }}>
              {language === 'en' ? 'Gallery' : 'गैलरी'}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: darkMode ? '#e0e0e0' : '#555' }}>
              {language === 'en' ? 'Contact' : 'संपर्क'}
            </Nav.Link>
          </Nav>

          {/* Language & Dark Mode + Button */}
          <Nav className="d-flex align-items-center gap-2">
            <Form.Select
              size="sm"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}  // ✅ global state update
              className="me-2"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </Form.Select>

            <Button variant={darkMode ? 'light' : 'dark'} onClick={handleDarkMode}>
              {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
            </Button>

            <Button variant="light" className="text-dark ms-2" as={Link} to="/book-havan">
              {language === 'en' ? 'Book Online Hawan' : 'ऑनलाइन हवन बुक करें'}
            </Button>

            <Button variant="danger" className="text-dark ms-2" as={Link} to="https://www.youtube.com/live/AgSRH-QyNTs">
              {language === 'en' ? 'Live Darshan' : 'लाइव दर्शन'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
