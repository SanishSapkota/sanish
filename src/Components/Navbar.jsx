import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/mercer.webp';

const Navbar = () => {
  return (
    <div className='Navbar'>
    <div className="container-fluid header sticky-top">
      <header className="d-flex flex-wrap align-items-center justify-content-center py-3 border-bottom border-dark">
        <a href="/" className="d-flex align-items-center justify-content-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src={Logo} alt="" className='w-15 h-15 mr-3' />
          <span className='header thefont'>MERCER <div> UNIVERSITY</div></span>
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg>
        </a>
      </header>
    </div>
  </div>
  
  );
}

export default Navbar;
