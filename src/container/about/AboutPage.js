import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutPic from "../../images/course01.jpeg";

class AboutPage extends Component {
  render() {
    return (
      <section>
        <Container
          style={{ backgroundColor: "brown", color: "#fff" }}
          className="text-center py-5 aboutpage"
          fluid
        >
          <Row>
            <Col>
              <h1>About</h1>
              <p>
                Home / <span style={{ color: "brown" }}>About</span>
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row style={{ backgroundColor: "#fff" }}>
            <Col className="mx-auto px-lg-5 text-left mt-5 mb-5">
              <h1>Overview</h1>
              <div style={{ borderTop: "4px solid green", width: 50 }}></div>
              <p className="mt-3">
              Ala-Too International University in the Kyrgyz Republic is aimed at 
              training competent, multilingual, competitive specialists. The mission 
              of the University is to train knowledgeable historical values, versatile, 
              with critical thinking, able to quickly adapt to changing innovative conditions, 
              creative specialists combining knowledge and actions, able to work successfully 
              around the world. When training specialists, the university develops world values, 
              in accordance with national values, information technologies, innovative methods, 
              research. As an international university of the country, it does everything 
              possible to contribute to the development of society in the field of science, 
              education and innovation.
              </p>
              <p className="mt-3">
              The University aims to become one of the leading international universities in Central Asia 
              with the targeted use of innovative and intellectual resources to improve the quality of education;
              The University combines the achievements of education, science and technology in the training of highly 
              qualified personnel in accordance with the requirements of society;
              Ala-Too International University is an innovative university providing continuing education using world 
              achievements.
              </p>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "#E0E0E0", color: "white" }}>
            <Col xs={10} lg={8} md={6} className="mx-auto px-lg-5 my-5">
              <h1 className="text-capitalize">
                <strong className="banner-title">Mission</strong>
              </h1>
              <div style={{ borderTop: "4px solid green", width: 50 }}></div>
              <p
                className="my-4 text-muted w-75 about-text"
                data-aos="fade-right"
              >
                Annually update the main professional educational program taking into account the development of science, 
                culture, economics, technology, technology and the social sphere, in accordance with the recommendations 
                for ensuring the quality of education, which are:
                - the achievement of these strategic goals is carried out through the implementation of programs in the main 
                areas of activity.
                - improvement of educational, methodological and technological support of the educational process based on 
                the achievements of science and production;
                - implementation of the quality monitoring system of the educational process;
                - optimization of the list of implemented educational programs taking into account the needs of society;
                - in ensuring the quality and competence of the teaching staff;
                - providing sufficient resources for all implemented educational programs, monitoring the effectiveness of 
                their use, including by interviewing students;
                - informing the public about the results of their activities, plans, innovations.
                - to form their own socio-cultural environment;
                - create the conditions necessary for the comprehensive development of the individual;
                - to promote the development of the socio-educational component of the educational process, including the 
                development of student self-government, student participation in the work of public organizations, sports 
                and creative clubs, scientific student societies.
                - development of specific measures and assistance to the education of young people in the acquisition, accumulation 
                and application in practice of knowledge, skills and abilities in their chosen specialty;
                - preservation and strengthening of the material and technical base, improvement of equipment of classrooms, 
                laboratories, educational and auxiliary facilities;
                <br />
                Our sole mission is to provide a scholarly and professional
                environment that enables our faculty, students and staff to make
                lasting contributions to the advancement of learning. We aim to
                be dynamic, innovative and flexible in devising academic
                programmes, structures and mechanisms. We believe in carrying
                out cutting-edge research and development for the benefit of
                society.
              </p>
            </Col>
            <Col
              xs={10}
              lg={4}
              md={6}
              className="mx-auto px-lg-5 my-5 align-self-center"
              data-aos="fade-in"
            >
              <div className="about-img_container">
                <Image
                  src={aboutPic}
                  fluid
                  style={{ border: "1px solid brown", padding: "5px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AboutPage;
