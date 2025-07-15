import './Footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section">
          <h4><FaPhoneAlt className="footer-icon" /> Phone</h4>
          <p>+1 (123) 456-7890</p>
          <p>+1 (987) 654-3210</p>
        </div>

        <div className="footer-section">
          <h4><FaEnvelope className="footer-icon" /> Email</h4>
          <p>info@companyexample.com</p>
        </div>

        <div className="footer-section">
          <h4><FaMapMarkerAlt className="footer-icon" /> Office Address</h4>
          <p>Example Corporation Pvt. Ltd.</p>
          <p>123 Business Avenue, Tech Park</p>
          <p>Innovation District, Cityville 456789</p>
          <p>State, Country</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Example Corporation. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
