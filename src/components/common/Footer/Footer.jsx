import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-4">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4}>
            <h5 className="brand">🌿 Nature Camp</h5>
            <p>Reconnect with nature. Adventure starts here.</p>
          </Col>

          <Col md={4}>
            <h6>Quick Links</h6>
            <Nav className="flex-column">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Col>

          <Col md={4}>
            <h6>Follow Us</h6>
            <div className="social-icons" >
              <a href="#"><FaFacebook / ></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col className="text-center">
            <small>© {new Date().getFullYear()} Nature Camp. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
