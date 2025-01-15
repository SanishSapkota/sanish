import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import LifeCard from './LifeCard';
import Baby from '../assets/images/sanishchild.png';
import PrimaryEducation from '../assets/images/new vision.png';
import Highschool from '../assets/images/valmikislider.png';
import BYC from '../assets/images/byc.png'

import FirstWebsite from '../assets/images/firstwebsite.jpg'
import Guitar from '../assets/images/guitar.jpg'
import Astrology from '../assets/images/JHora.jpg'
import TTclub from '../assets/images/TTclub.jpg'
import qualitycomputers from '../assets/images/qualitycomputers.jpg'
import gradaution from '../assets/images/graduation.jpg'
import dad from '../assets/images/dad.jpg'
import reactandgit from '../assets/images/reactandgit.jpg'
import portfoilo from '../assets/images/leadingedgefinal.jpg'
import digitalsat from '../assets/images/dsat.jpg'
import mercer from '../assets/images/mercer.webp'
import savesoil from '../assets/images/savesoil.jpg'

const Lifeslider = () => {
  const linkElement1 = (
    <a href="https://en.wikipedia.org/wiki/January_7" target="_blank">
      January 7
    </a>
  );
  const linkElement2 = (
    <a href="https://school.united.edu.np/" target="_blank">
      United.edu.np
    </a>
  );
  const linkElement3 = (
    <a
      href="https://www.google.com/maps/place/Newton's+Education+Academy/@26.6392016,87.9954126,15z/data=!4m6!3m5!1s0x39e5ba8a457fe447:0x5e89ded8c443f58!8m2!3d26.6392016!4d87.9954126!16s%2Fg%2F1hc573hpb?entry=ttu"
      target="_blank"
    >
      On Google Maps
    </a>
  );
  const linkElement4 = (
    <a href="https://biramarsingh.edu.np/" target="_blank">
      Bir AmarSingh.edu.np
    </a>
  );
  const linkElement5 = (
    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9356123/" target="_blank">
      Article on typing speed i found interesting
    </a>
  );
  const linkElement6 = (
    <a href="https://en.wikipedia.org/wiki/Nepal_Scouts" target="_blank">
      What is Nepal Scouts?
    </a>
  );
  const linkElement7 = (
    <a href="https://en.wikipedia.org/wiki/Nepal_Scouts" target="_blank">
      Details on what club did
    </a>
  );
  const linkElement8 = (
    <a href="https://www.vedicastrologer.org/jh/" target="_blank">
      Jagganath Hora Software
    </a>
  );
  const linkElement9 = (
    <a href="https://www.vedicastrologer.org/jh/" target="_blank">
      On map
    </a>
  );
  const linkElement10 = (
    <a href="https://www.w3schools.com/" target="_blank">
      Learning Source: W3 Schools
    </a>
  );
  const linkElement11 = (
    <a href="https://github.com/Barsat-Khadka/barsat.github.io" target="_blank">
      Source Code
    </a>
  );
  const linkElement12 = (
    <a href="https://www.youtube.com/watch?v=33jFcagTHpc&t=452s" target='_blank'>
      What is the digital SAT?
    </a>
  )
  const linkElement13 = (
    <a href="https://consciousplanet.org/en/save-soil" target='_blank'>
      Save Soil
    </a>
  )
  const linkElement14 = (
    <a href="https://www.usm.edu/" target='_blank'>
      USM.edu
    </a>
  )
  const linkElement15 = (
    <a href="https://en.wikipedia.org/wiki/Barhadashi_Rural_Municipality" target='_blank'>
      Our Rural Municipality
    </a>
  )


  const cards = [
    {
      Image: Baby,
      Title: 'Birthday 0',
      Description:
        'The day i was born, according to my father, mother and some legal documents',
      Date: 'November 27,  2006',
      Extra: 'Mangsir 11, 2063',
    },
    {
      Image: PrimaryEducation,
      Title: 'Primary & Middle School Education',
      Description: 'New Vision Academy',
      Date: '2009-2020',
      Extra:
        'I vividly recall the moments when my school friends and I would come together to share the lunches we brought from home.',
    },
    {
      Image: Highschool,
      Title: 'High School',
      Description: 'Valmiki Shiksha Sadan',
      Date: '2020-2024',
      Extra:
        'Can Never Thank Valmiki Shiksha Sadan. The opportunities it provided me - from the internship to the exposure, i am always indebt of this valuable institution',
    },
    {
      Image: FirstWebsite,
      Title: 'Joined Various CS communities',
      Description: '',
      Date: "May 2019 - Present",
      Extra:
        'Got my first personal computer and made myself familiar with the world of computer science.',
    },
    {
      Image: BYC,
      Title: 'Bharatpur Youth Club',
      Description: 'Founder/President',
      Date: "June 2021 - Present",
      Extra:
        'Founded a club as a medium to give something back to the community.',
    },
    {
      Image: Guitar,
      Title: 'Mixture of Education and Music',
      Description: '',
      Date: "May 2023",
      Extra:"Won Rs 15k as a runner-up in the Expert Quiz and bought a guitar with the Rs 9k.",
    },
    {
      Image: digitalsat,
      Title: 'SAT',
      Description: 'Standarized Test',
      Date: "November 2024",
      Extra:"Travelled to Kathmandu valley to take the test ",
    },
    {
      Image: gradaution,
      Title: 'Graduation',
      Description: 'Thank you Valmiki Siksha Sadan!',
      Date: "August 2, 2024",
      Extra:"Graduation from high scool ",
    },
   
    {
      Image: mercer,
      Title: 'Stamps Scholar Program?',
      Description: 'Future.',
      Date: "Jan 2025",
      Extra:"Hello Mercer University.",
    },
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const [marqueeDirection, setMarqueeDirection] = useState('left'); 

  const handlePause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSlideReverse = () => {
    setMarqueeDirection(marqueeDirection === 'left' ? 'right' : 'left'); 
  };


  
    return (
      <div className="App" id="Lifeslider">
        <div className="title top-text-before">
          <h1>Life Slider</h1>
          <p>A look back at significant moments.</p>
        </div>
        <Marquee pauseOnHover={true} play={isPlaying} direction={marqueeDirection} speed="80">
          {cards.map((card, index) => (
            <div className="image-wrapper" key={index}>
              <LifeCard {...card} />
            </div>
          ))}
        </Marquee>
        <div className="info-section">
          <button className="info-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg>
          </button>
          <div className="info-text">
            <p>The slider stops when hovering on the card for PC/laptop users. For Mobile users, the slider stops when you press on the card. You can press anywhere except the cards to resume it</p>
          </div>
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={handleSlideReverse}>Slide Reverse</button>
        </div>
      </div>
    );
    
          }

  
  export default Lifeslider;




