import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import college from "../../images/footer.png";
import "./footer.css";
import MapContainer from "./MapContainer";

export class Footer extends Component {
  render() {
    return (
      <footer
        className="site-footer"
        id="contact"
        style={{ backgroundColor: "#fff" }}
      >
        <Container fluid>
          <Row>
            <MapContainer />
          </Row>
          <Row className="mt-5">
            <Col
              sm={6}
              md={4}
              data-aos="fade-right"
              className="mx-auto  d-flex justify-content-start align-items-center flex-column flex-wrap"
            >
              <Image src={college} fluid />
              <h4 className="mt-3 text-center">
              IT & Business <br /> College
              </h4>
            </Col>
            <Col
              sm={6}
              md={4}
              data-aos="fade-left"
              className="d-flex mt-3 justify-content-start  flex-column flex-wrap"
            >
              <h3 className="mb-2 text-capitalize text-start">contact us</h3>
              <div
                className="justify-content-start align-items-center flex-column"
                style={{ borderTop: "2px solid green", paddingTop: "0.5rem" }}
              >
                <p class="d-flex flex-wrap">
                  <span class="mr-4 footer-icon">
                    <i class="fas fa-map"></i>
                  </span>
                  <span>Ankara street 1/8, Bishkek</span>
                </p>
                <p class="d-flex flex-wrap">
                  <span class="mr-4 footer-icon">
                    <i class="fas fa-phone"></i>
                  </span>
                  <span>+996505250703</span>
                </p>
                <p class="d-flex flex-wrap">
                  <span class="mr-4 footer-icon">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span>college@alatoo.edu.kg</span>
                </p>
              </div>
            </Col>
            <Col
              sm={6}
              md={4}
              data-aos="fade-left"
              className="mx-auto mt-3 d-flex justify-content-start  flex-column flex-wrap"
            >
              <h3 className="mb-2">NewsLetter</h3>

              <div
                style={{ borderTop: "2px solid green", paddingTop: "0.5rem" }}
              >
                Enter your email address to get the latest College news,
                special events and student activities delivered right to your
                inbox.
                <div class="input-group mb-3 mt-3 is-warning">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append">
                    <span
                      class="input-group-text"
                      style={{ backgroundColor: "darkorange", color: "white" }}
                      id="basic-addon2"
                    >
                      subscribe
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <Row>
            <Col md={8} sm={6} xs={12}>
              <p class="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by
                <a href="#copyright"> Company</a>.
              </p>
            </Col>
            <Col md={4} sm={6} xs={12}>
              <ul class="social-icons">
                <li>
                  <a class="instagram" href="#instagram">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a class="telegram" href="#telegram">
                    <i class="fab fa-telegram"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
