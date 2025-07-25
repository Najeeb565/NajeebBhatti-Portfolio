import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import hrm from '../../assets/hrm.png';
import ecommerce from '../../assets/e-commercelanding.PNG'
import bussiness from '../../assets/bussinesslanding.PNG';
import lms from '../../assets/LMS.webp';
import socialmedia from '../../assets/socialmedia.PNG'
import portfolio from '../../assets/portfolio.PNG'

const Projects = () => {
  const projects = [
    {
      title: "HRM System",
      description: "A full-featured Human Resource Management system with login, employee management, tasks, and notifications.",
      link: "https://github.com/Najeeb565",
      image: hrm
    },
    {
      title: "Social Media Web App",
      description: "A MERN stack social app where users can post, like, comment, update profiles, and reset passwords via OTP.",
      link: "https://github.com/Najeeb565",
      image: socialmedia
    },
    {
      title: "Learning Management System",
      description: "A full-featured LMS platform for managing courses, students, quizzes, and certificates — built with MERN stack and responsive design.",
      link: "https://github.com/Najeeb565",
      image: lms
    },
    {
      title: "HTML Landing Page",
      description: "A fully responsive business landing page made with HTML5, CSS3, and Bootstrap 5.",
      link: "https://github.com/Najeeb565",
      image: ecommerce
    },
    {
      title: "Business Landing Page with Bootstrap 5",
      description: "A responsive business landing page built using HTML5 & Bootstrap5. Includes sections for services, team, gallery & newsletter",
      link: "https://github.com/Najeeb565",
      image: bussiness
    },
    {
      title: "Portfolio Website",
      description: "My personal React + Bootstrap portfolio showcasing skills, journey, and projects.",
      link: "https://github.com/Najeeb565",
      image: portfolio
    },
  ];

  return (
    <section
      className="py-5"

    >
      <Container>
        {/* Title with scroll animation */}
        <motion.h2
          className="text-center mb-5 display-4 fw-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          My Projects
        </motion.h2>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(58, 123, 213, 0.2)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="shadow-sm border-0 overflow-hidden project-card" style={{ height: "450px" }}>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  </motion.div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-auto align-self-start"
                      style={{
                        background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '0.5rem 1.5rem'
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 5px 15px rgba(58, 123, 213, 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.a>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;