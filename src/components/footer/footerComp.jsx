import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function Footer() {


  return (
    <motion.footer 
      className="py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      
    >
      <Container>
        <div className="d-flex flex-column align-items-center">
          {/* Social Links */}
          

          {/* Copyright */}
          <motion.p 
            className="mb-2"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            &copy; {new Date().getFullYear()} Najeeb Bhatti. All Rights Reserved.
          </motion.p>

          {/* Built With */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="d-flex align-items-center gap-2"
          >
            <small className="text-white-50">Built with</small>
            <div className="d-flex gap-2">
              <motion.div whileHover={{ y: -2 }}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                  alt="React" 
                  style={{ width: '20px', filter: 'brightness(0) invert(1)' }} 
                />
              </motion.div>
              <motion.div whileHover={{ y: -2 }}>
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
                  alt="Bootstrap" 
                  style={{ width: '20px', filter: 'brightness(0) invert(1)' }} 
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Back to Top */}
          {/* <motion.a
            href="#"
            className="mt-3 text-white-50 small"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ color: 'white' }}
            style={{ textDecoration: 'none' }}
          >
            Back to Top <i className="bi bi-arrow-up"></i>
          </motion.a> */}
        </div>
      </Container>
    </motion.footer>
  );
}