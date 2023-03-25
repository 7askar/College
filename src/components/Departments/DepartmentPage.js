import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./department.css";

class DepartmentPage extends Component {
  render() {
    const displayDepartment = [
      "Shashank Shahare",
      "Enola Holmes",
      "TidbitsJS",
      "Sherlock Holmes",
      "Bilbo Baggins",
      "Mr. Matrix",
    ].map((member, index) => (
      <Col xs={12} sm={6} md={4} lg={3} key={index + member}>
        <div className="our-team">
          <div className="picture">
            <Image src="https://picsum.photos/130/130?image=1027" fluid />
          </div>
          <div className="team-content">
            <h3 className="name">{member}</h3>
            <h4 className="title">Web Developer</h4>
          </div>
          <ul class="social">
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
        </div>
      </Col>
    ));

    return (
      <section>
        <Container
          style={{ backgroundColor: "brown", color: "#fff" }}
          className="text-center py-5 aboutpage"
          fluid
        >
          <Row>
            <Col>
              <h1>Department</h1>
              <p>
                Home / <span style={{ color: "brown" }}>Department</span>
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 mb-5">
          <Row>{displayDepartment}</Row>
        </Container>
      </section>
    );
  }
}

export default DepartmentPage;
