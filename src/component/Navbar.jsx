import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import logo from '../image/Logo.jpg';
import './nav.css'; // Custom CSS for styling

function CollapsibleExample({ language, setLanguage }) {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top"  className="custom-navbar shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="logo-container me-2">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
          <div className="brand-text nam">
            <span className="brand-title">मां बगलामुखी उपासक</span>
            <span className="brand-subtitle">आचार्य पं नितीश जी शर्मा</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              {language === 'en' ? 'Home' : 'होम'}
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              {language === 'en' ? 'About' : 'हमारे बारे में'}
            </Nav.Link>
            <Nav.Link as={Link} to="/service" className="nav-link-custom">
              {language === 'en' ? 'Services' : 'सेवाएँ'}
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="nav-link-custom">
              {language === 'en' ? 'Gallery' : 'गैलरी'}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              {language === 'en' ? 'Contact' : 'संपर्क'}
            </Nav.Link>
          </Nav>

          {/* Language Selector & Buttons */}
          <Nav className="d-flex align-items-center gap-2">
            <Form.Select
              size="sm"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </Form.Select>

            <Button variant="light" className="btn-custom" as={Link} to="/book-havan">
              {language === 'en' ? 'Book Online Hawan' : 'ऑनलाइन हवन बुक करें'}
            </Button>

            <Button variant="danger" className="btn-custom" as={Link} to="https://www.youtube.com/live/AgSRH-QyNTs">
              {language === 'en' ? 'Live Darshan' : 'लाइव दर्शन'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
