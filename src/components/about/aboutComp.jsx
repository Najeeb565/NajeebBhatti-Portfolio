import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ProgressBar } from './ProgressBar';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

export default function About() {
  const skills = [
    { name: "React", level: 85, color: "#61DAFB" },
    { name: "Bootstrap", level: 95, color: "#7952B3" },
    { name: "Node.js", level: 80, color: "#68A063" },
    { name: "MongoDB", level: 80, color: "#47A248" },
    { name: "JavaScript", level: 70, color: "#9cb91eff" },
    { name: "UI/UX Design", level: 75, color: "#FF4081" }
  ];

  return (
    <motion.section
      className="py-5 min-vh-100 d-flex align-items-center"
      
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <motion.h2
              className="text-center mb-5 display-4 fw-bold"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              About Me
            </motion.h2>

            <Row className="g-4">
              <Col md={6}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h3 className="mb-4" style={{ color: '#3a7bd5' }}>My Journey</h3>
                  <div className="d-flex flex-column gap-3">
                    <motion.p
                      className="lead"
                      whileHover={{ x: 5 }}
                    >
                      I'm <strong>Najeeb Bhatti</strong>, a frontend-focused web developer passionate about building responsive and real-world web applications.
                    </motion.p>
                    <motion.p whileHover={{ x: 5 }}>
                      I began my professional journey at <strong>Seebizz</strong>, where I worked on production projects including an HRM system and social media platform, gaining full-stack experience with clean UI design.
                    </motion.p>
                    <motion.p whileHover={{ x: 5 }}>
                      What drives me is solving real problems through technology. I love turning ideas into functional, beautiful applications that make a difference.
                    </motion.p>
                  </div>
                </motion.div>
              </Col>

              <Col md={6}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h3 className="mb-4" style={{ color: '#3a7bd5' }}>My Skills</h3>
                  <div className="d-flex flex-column gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <div className="d-flex justify-content-between mb-2">
                          <span className="fw-bold">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={progressVariants}
                        >
                          <ProgressBar
                            now={skill.level}
                            style={{
                              height: '8px',
                              backgroundColor: `${skill.color}30`,
                            }}
                          >
                            <motion.div
                              className="progress-bar"
                              style={{
                                backgroundColor: skill.color,
                                width: `${skill.level}%`
                              }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: index * 0.1 }}
                            />
                          </ProgressBar>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Col>
            </Row>

            {/* Additional Info Section */}
            <motion.div
              className="mt-5"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="mb-4 text-center" style={{ color: '#3a7bd5' }}>My Approach</h3>
              <Row className="g-4">
                {[
                  {
                    icon: '💡',
                    title: 'Problem Solving',
                    desc: 'I focus on understanding core issues before jumping to solutions'
                  },
                  {
                    icon: '🎨',
                    title: 'Design First',
                    desc: 'Beautiful interfaces that are intuitive and accessible'
                  },
                  {
                    icon: '⚡',
                    title: 'Performance',
                    desc: 'Optimized code that loads fast and runs smoothly'
                  }
                ].map((item, index) => (
                  <Col md={4} key={index}>
                    <motion.div
                      className="p-4 rounded-3 h-100 approch-card"
                      style={{
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                      }}
                      whileHover={{
                        y: -5,
                        boxShadow: '0 10px 25px rgba(58, 123, 213, 0.1)'
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={itemVariants}
                    >
                      <div
                        className="fs-1 mb-3"
                        style={{ color: '#3a7bd5' }}
                      >
                        {item.icon}
                      </div>
                      <h4>{item.title}</h4>
                      <p className="mb-0">{item.desc}</p>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}
