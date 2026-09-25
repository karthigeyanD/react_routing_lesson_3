import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <span className="footer__brand">DevFolio</span>
          <p className="footer__copy">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="footer__links">
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/about" className="footer__link">About</Link>
          <Link to="/skills" className="footer__link">Skills</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;