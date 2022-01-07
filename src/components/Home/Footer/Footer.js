import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        color: "#fff",
        background: "var(--dark-color-light)",
      }}
      className="py-5"
    >
      <Container>
        <div className="d-flex justify-content-between align-items-center footer_details">
          <div className="nav_logo">
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <h3>
                Racy<span>Car</span>
              </h3>
            </Link>
          </div>
          <p
            style={{
              fontSize: "14px",
              marginBottom: 0,
            }}
          >
            ©2021 RacyCar. All rights reserved{" "}
            <a
              style={{
                fontSize: "14px",
                color: "var(--main-color)",
              }}
              href="https://github.com/fsmdsohel"
            >
              _
            </a>
          </p>
          <div className="social_links">
            <div className="social_link">
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="social_link">
              <a href="https://github.com">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div className="social_link">
              <a href="https://www.linkedin.com/in">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
