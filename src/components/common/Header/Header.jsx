import { useState, useEffect } from 'react';
import { Container, Navbar, Offcanvas, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {

  const[open, setOpen]= useState(false);


  const toggleMenu = () => {
    setOpen(!open)
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky)
    }
  })

  // sticky navbar
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky'):
    header.classList.remove('is-sticky');
  }

  return (
    <header className='header-section'>
      <Container>

           <Navbar  expand='lg' className="bg-body-tertiary mb-3" style={{opacity : 1} }>
            {/* Logo Section */}
            <Navbar.Brand>
              <NavLink to = '/'>Nature Camp</NavLink>
            </Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show = {open}
            >
              {/* Mobile Logo Section */}
              <Offcanvas.Header>
                <h1 className='logo'>Nature Camp</h1>
                <span className='navabr-toggler ms-auto' onClick={toggleMenu}>
                  <i className="bi bi-x-lg" ></i>
                </span>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  
                  <NavLink className = 'nav-link' to = '/'>Home</NavLink>
                  <NavLink className = 'nav-link' to = '/packages'>Packages</NavLink>
                  <NavLink className = 'nav-link' to = '/gallery'>Student Tour</NavLink>
                  <NavLink className = 'nav-link' to = '/about-us'>About Us</NavLink>
                  <NavLink className = 'nav-link' to = '/about-us'>Contact Us</NavLink>
                  <NavLink className = 'nav-link' to = '/about-us'>Camp Packages</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className='ms-md-4 ms-2'>
              <li className='d-inline-block d-lg-none ms-3 toggle_btn'>
                <i className="bi bi-list" onClick={toggleMenu}></i>
              </li>
            </div>
        </Navbar>
      </Container>
    </header>
  )
}

export default Header