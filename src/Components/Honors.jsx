import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SchoolLogo from '../assets/images/schoollogo.png';
import interact from '../assets/images/interact_award.png';
import biramar from '../assets/images/sanishtopper.png'
import biramar2 from '../assets/images/sanish_topper.png'
import hackathon from '../assets/images/hackathonwinner.png'

import quizz from '../assets/images/quizwinner.png'

const Honors = () => {
  return (
    <>
      <h1 className="thefont text-center pt-5 pb-3">
        Some honored moments
      </h1>

      <div
        className="p-5 mb-4 rounded-3"
        style={{
          backgroundImage: 'linear-gradient(to right, #000, #000), url("your-background-image.jpg")',
          color: '#ffd046',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-fluid py-5" id='Stamps'>
          <img src={SchoolLogo} alt="School Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />

          <h1 className="display-5 fw-bold ">National Examination Board Topper</h1>
          <p className="col-md-8 fs-4 top-text">
          Among the 5 lakh students appearing for the SEE (Class 10) Board examination, only 42 students around Nepal, and two students from Chitwan secured perfect 4.0 GPA. I was one of them.          </p>
          <div className="class-info stylish-font">
            <p>Class 10</p>
            <p>Valmiki Siksha Sadan</p>
        <div style={{ marginLeft: 'auto' }}>
      <img
        src={biramar}
        alt="Bir Amar Singh"
        style={{
          width: '500px',
          height: 'auto',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          border: '4px solid #fff',
          marginTop: '20px', // Add margin top as needed
        }}
      />
       <img
        src={biramar2}
        alt="Bir Amar Singh"
        style={{
          width: '500px',
          height: 'auto',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          border: '4px solid #fff',
          marginTop: '20px', // Add margin top as needed
        }}
      />
    </div>

    </div>
    </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white rounded-3" style={{ backgroundColor: 'black' }}>
            <h2>Silver medal in Interact Int’l Video Award, and  Gold medal in Interact Natl. Video Award (2022/23)</h2>
            <p className='top-text'>
            I managed the video production department for Interact Club of Valmiki in RY 2022/23, and in my tenure, ICV won both awards. 
            </p>           <div className='stylish-font'>
              <div style={{ marginLeft: 'auto', maxWidth: '500px' }}>
                <img
                  src={interact}
                  alt="Interact"
                  style={{
                    width: '100%',
                    height: 'auto',
                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    border: '4px solid #fff',
                  }}
                />
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 rounded-3" style={{ backgroundColor: '#ffd046', border: '2px solid black' }}>
            <h2>General, Alchemy, Science/Maths & Health Quizzes
            </h2>
            <p className='top-text'>
            I actively participated in quiz competitions since 8th grade. I competed in various national and state-level tournaments and won in different categories.
            </p>
            <div className='stylish-font' style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                
              </div>
              <div style={{ marginLeft: 'auto', maxWidth: '500px' }}>
                <img
                  src={quizz}
                  alt="Inter-school Cricket, Birtamod"
                  style={{
                    width: '100%',
                    height: 'auto',
                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    border: '4px solid #fff',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 rounded-3" style={{ backgroundColor: '#ffd046', border: '2px solid black' }}>
            <h2>National hackathon finalist and Robowarzz champion
            </h2>
            <p className='top-text'>
            I created and presented a Hotel Finder website in front of the judging panel within the three-day time limit to be selected as a finalist in the Hackathon, and won Robot Battle to become Robowarzz Champion in the event organized by Om Shanti Academy.
            </p>
            <div className='stylish-font' style={{ display: 'flex', alignItems: 'center' }}>
              <div>
           
              </div>
              <div style={{ marginLeft: 'auto', maxWidth: '500px' }}>
                <img
                  src={hackathon}
                  alt="Inter-school Cricket, Birtamod"
                  style={{
                    width: '100%',
                    height: 'auto',
                   boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    border: '4px solid #fff',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Honors;



