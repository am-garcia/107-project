import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer flex-container" id="footbar">
        <ul className="footbar-foot me-auto mb-2 mb-lg-0">
          <li className="foot-item">
            <Link className="foot-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="foot-item">
            <Link
              className="foot-link active"
              aria-current="page"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
