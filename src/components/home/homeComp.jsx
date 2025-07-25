import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../../assets/profile-placeholder.jpeg';
import '../../style/global.css';

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

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

// Custom button style
const buttonStyle = {
  padding: '0.5rem 1.5rem',
  borderRadius: '50px',
  fontWeight: '600',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const primaryButtonStyle = {
  ...buttonStyle,
  background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
  color: 'white',
  boxShadow: '0 4px 15px rgba(58, 123, 213, 0.4)'
};

const outlineButtonStyle = {
  ...buttonStyle,
  background: 'transparent',
  color: '#3a7bd5',
  border: '2px solid #3a7bd5',
  boxShadow: '0 4px 15px rgba(58, 123, 213, 0.2)'
};

const darkOutlineButtonStyle = {
  ...buttonStyle,
  background: 'transparent',
  color: '#00d2ff',
  border: '2px solid #00d2ff',
  boxShadow: '0 4px 15px rgba(0, 210, 255, 0.2)'
};

export default function Home() {
  return (
    <motion.section
      className="d-flex align-items-center min-vh-100 mt-5"
      style={{
        padding: '2rem 0'
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container>
        <Row className="align-items-center">
          {/* Text Column */}
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <motion.h1
              className="display-4 fw-bold mb-3"
              variants={itemVariants}
              style={{
                background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Hi, I'm <span style={{ fontWeight: '800' }}>Najeeb Bhatti</span>
            </motion.h1>

            <motion.div variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  1000,
                  'MERN Stack Developer',
                  1000,
                  'Full Stack Developer',
                  1000,
                  'UI/UX Designer',
                  1000
                ]}
                wrapper="h4"
                className="mb-3 typewriter-text"
                style={{
                  fontWeight: '500',
                  fontSize: '1.5rem'
                }}
                repeat={Infinity}
              />

            </motion.div>

            <motion.p
              className="mb-4  theme-text"
              variants={itemVariants}
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                maxWidth: '90%',
              }}
            >
              I build clean, modern, and responsive web applications using cutting-edge technologies.
              Passionate about creating intuitive user experiences with performant backends.
            </motion.p>

            <motion.div
              className="d-flex gap-3 justify-content-center justify-content-md-start"
              variants={itemVariants}
            >
              <motion.a
                href="/Najeeb_CV.pdf"
                download
                style={primaryButtonStyle}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(58, 123, 213, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="dark:shadow-lg dark:shadow-cyan-500/20"
              >
                Download CV
              </motion.a>

              <motion.div
                className="dark:border-cyan-400"
                style={outlineButtonStyle}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(58, 123, 213, 0.3)',
                  backgroundColor: 'rgba(58, 123, 213, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="dark:text-cyan-400"
                  style={{
                    textDecoration: 'none',
                    display: 'block'
                  }}
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              className="mt-4 d-flex gap-4 justify-content-center justify-content-md-start flex-wrap"
              variants={itemVariants}
            >
              {[
                { icon: 'bi-lightning-charge-fill', name: 'React' },
                { icon: 'bi-hdd-network-fill', name: 'Node.js' },
                { icon: 'bi-database-fill-gear', name: 'MongoDB' },
                { icon: 'bi-bootstrap-fill', name: 'Bootstrap' },
                { icon: 'bi-code-slash', name: 'JavaScript' },
              ].map(({ icon, name }) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="d-flex flex-column align-items-center"
                >
                  <div
                    className="dark:shadow-lg dark:shadow-cyan-500/20"
                    style={{
                      background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <i
                      className={`bi ${icon}`}
                      title={name}
                      style={{
                        fontSize: '1.5rem',
                        color: '#fff',
                      }}
                    />
                  </div>
                  <small className="mt-2 theme-text">{name}</small>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          {/* Image Column */}
          <Col md={6} className="text-center">
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="position-relative"
              style={{
                display: 'inline-block'
              }}
            >
              <img
                src={profilePic}
                alt="Najeeb Bhatti"
                className="dark:border-gray-700"
                style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  border: '5px solid white'
                }}
              />
              <motion.div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-circle dark:border-cyan-400"
                style={{
                  zIndex: -1,
                  border: '2px solid #3a7bd5'
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}