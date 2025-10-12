import "./Footer.css";
import logo from "../../assets/logo.png";
import whatsapp_icon from "../../assets/whatsapp.png";
import facebook_icon from "../../assets/facebook.png";
import instagram_icon from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" height="40px" />
        <p>BharatMart</p>
      </div>
      <ul className="footer-links">
        <li>About</li>
        <li>Products</li>
        <li>Offices</li>
        <li>Company</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" height="30px" />
        </div>
        <div className="footer-icon-container">
          <img src={facebook_icon} alt="" height="30px" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" height="30px" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2025 - All Right Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
