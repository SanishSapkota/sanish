import React from 'react';
import Nepal from '../assets/images/sunrise.jpg';
import { Link } from 'react-scroll';
import Navbar from './Navbar'
import Hero from './Hero'
import Body from './Body'
import Body2 from './Body2'
import Lifeslider from './Lifeslider'
import Inspiration from './PhotoGallery'
import Honors from './Honors'

const Footer = () => {
  const footerStyle = {
    height: '700px',
    display: 'flex',
    flexDirection: 'column',
  };

  const halfBlackStyle = {
    flex: 1,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    
  };

  const halfWhiteStyle = {
    flex: 1,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px'
  };

  const imageStyle = {
    maxWidth: '50%',
    maxHeight: '50%',
  };

  return (
    <div style={footerStyle}>
      <div style={halfWhiteStyle}>
        <h2 className='thefont'>
          Namaste, Stamps Scholar Team.
          <br />
          Thank you for your review.
        </h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9yfZziPTzfw?si=FvKbM_iOW27I4N1B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        <div className='mt-3 top-text-before'>IT'S TIME FOR ME TO BE THE BEAR</div>
      </div>
      <div style={halfBlackStyle}>
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-md-3">
                <h5>General Navigation</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-warning">   <Link to="Navbar" smooth={true} duration={200}>
    Home
  </Link></a></li>
  
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-warning"> <Link to="Body2" smooth={true} duration={200}>
    Extracurriculars
  </Link></a></li>
              <li className="nav-item mb-2"><a href="#Lifeslider" className="nav-link p-0 text-warning"><Link to="Lifeslider" smooth={true} duration={200}>
    LifeSlider
  </Link></a></li>
             
              <li className="nav-item mb-2"><a href="#Stamps" className="nav-link p-0 text-warning"><Link to="Honors" smooth={true} duration={200}>
    Stamps Scholar
  </Link></a></li>
                </ul>
              </div>

              <div className="col-md-3">
                <h5>Inspiration Links</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://www.buddhanet.net/pdf_file/scrndhamma.pdf" target="_blank" className="nav-link p-0 text-warning">Dhammapada</a></li>
<li className="nav-item mb-2"><a href="https://www.youtube.com/@veritasium" target="_blank" className="nav-link p-0 text-warning">Veritassium</a></li>
<li className="nav-item mb-2"><a href="https://www.youtube.com/@veritasium" target="_blank" className="nav-link p-0 text-warning">Beau Carnes</a></li>
<li className="nav-item mb-2"><a href="https://selfdefinition.org/krishnamurti/Jiddu_Krishnamurti_Journal(1973-75).pdf" target="_blank" className="nav-link p-0 text-warning">Krishnamurti notebook</a></li>
<li className="nav-item mb-2"><a href="https://en.wikipedia.org/wiki/Ozymandias" target="_blank" className="nav-link p-0 text-warning">Ozymandias</a></li>

                </ul>
              </div>

              <div className="col-md-3">
                <h5>Contact</h5>
                <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="https://www.instagram.com/maxmodaus/" target = '_blank' className="nav-link p-0 text-warning">Instagram</a></li>
              <li className="nav-item mb-2"><a href="https://www.facebook.com/sanish.sapkota.71/" target = '_blank' className="nav-link p-0 text-warning">Facebook</a></li>
              <li className="nav-item mb-2"><a href="mailto:sanisspk@gmail.com" className="nav-link p-0 text-warning">sanisspk@gmail.com</a></li>
            </ul>
              </div>

         
            </div>

            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p>&copy; 2024 Sanish
                <br/> Languages Used: React JS , CSS , Bootstrap
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;


