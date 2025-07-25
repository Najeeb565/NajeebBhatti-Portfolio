import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'shadow-sm' : ''}`} 
         style={{
           background: 'rgba(255, 255, 255, 0.15)',
           backdropFilter: 'blur(10px)',
           borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
         }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary fs-4" to="/">Najeeb.dev</Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-lg-3">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/project' },
              { name: 'Contact', path: '/contact' }
            ].map(({ name, path }) => (
              <li className="nav-item" key={name}>
                <Link 
                  className={`nav-link fw-semibold ${location.pathname === path ? 'text-primary' : 'text-dark'}`}
                  to={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ms-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
