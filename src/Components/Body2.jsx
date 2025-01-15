import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import ClipLoader from "react-spinners/ClipLoader";
import Card1 from '../assets/images/childhood.png';
import Card2 from '../assets/images/family.png';
import Card3 from '../assets/images/cricket.png';
import Card4 from '../assets/images/basketball.png';
import Card5 from '../assets/images/robotics.png';
import Card6 from '../assets/images/astranix.png';
import Card7 from '../assets/images/coding.png';
import Card8 from '../assets/images/interact.png';
import Card9 from '../assets/images/Journal.jpg';

const cardsData = [
  {
    id: 6,
    title: 'Let the kids grow',
    subtitle: 'Organization Name: Bharatpur Youth Club',
    description:
      'LKG was designed to bridge the educational gap for marginalized children of the eastern city. I worked with government officials to secure around $1,210 for installing two fully functioning computer setups in a community school; an additional $500 was raised from club members to provide essential computer literacy training and stationery for 50+ students. We partnered with local internet providers to offer low-cost access to the community.',
    time: 'June 2023 - August 2023',
    image: Card1,
  },
  {
    id: 4,
    title: 'Position Held: Vice-Captain',
    subtitle: 'Organization Name: High school Varsity Basketball team',
    description: 'Served as shooting guard; recognized as top scorer, best shooter, and Player of the Match; 1x MVP in Basketball 3v3 blitz',
    time: 'April 2021 - February 2024',
    image: Card4,
  },
  
  {
    id: 3,
    title: 'Position Held: Captain/ Skipper',
    subtitle: 'Organization Name: High School Varsity Cricket Team',
    description:
      'Handled the captaincy of the varsity cricket team for 4 years; won 2x Best Batsman, 3x Emerging Player awards, and Men&apos;s U19 Provincial East Zone Cup',
    time: 'August 2020 - February 2024',
    image: Card3,
  },
  {
    id: 1,
    title: 'Family Responsibilities',
    subtitle: '',
    description:
      'Operated family cattle farm (8 buffaloes, 8 calves) during father&apos;s hernia surgery & after grandfather&apos;s demise, and managed Rs 100k+ finance',
    time: 'March 2021 - Present',
    image: Card2,
  },
  
  {
    id: 5,
    title: 'Position Held: Technical Advisor',
    subtitle: 'Organization Name: Robotics Club of Valmiki',
    description: 'Mentored 8 students in robotics & guided them to state-level tournaments; handled robotics logistics department & organized Robo Battle events (with 20+ teams participating)',
    time: 'May 2022- December 2023',
    image: Card5,
  },
  {
    id: 10,
    title: 'Position Held: Intern — Web Developer & Designer',
    subtitle: 'Organization Name: Astranix Technologies Pvt. Ltd.',
    description: 'Attended WordPress seminars; handled 3 front-end & back-end developments; participated in QA testing & successfully revamped 2+ business websites',
    time: 'May 2024 - July 2024',
    image: Card6,
  },
  {
    id: 25,
    title: 'Position Held: General Member (RY 2022/23)',
    subtitle: 'Organization Name: Interact Club of Valmiki',
    description: 'Conducted Board of Directors & regular meetings; won Best Int’l Collaboration Event (District 4480); selected as OC, and managed video prod. Department',
    time: '2022 - 2023',
    image: Card8,
  },
  {
    id: 267,
    title: 'Coding',
    subtitle: '',
    description: 'Engaged in coding for 4+ years; compiled an OS project in collaboration with a friend; contributed to testing/ design; leveraged GitHub for project mgmt.',
    time: '2020 - Present',
    image: Card7,
  },
  
];

const Body2 = () => {
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cardLoading, setCardLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCardLoading(new Array(cardsData.length).fill(true));
  }, [cardsData]);

  const handleImageLoad = (index) => {
    setCardLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  const visibleCards = showAll ? cardsData : cardsData.slice(0, 3);

  return (
    <div className="Body2" id="ECS" style={{ border: '2px solid black' }}>
      <div className="container px-4 py-5">
        <h2 className="pb-5 display-5 fw-bold text-center top-text-before">Extracurriculars</h2>
        {loading && (
          <div className="text-center stylish-loader-container">
            <div className="stylish-loader"></div>
          </div>
        )}
        {!loading && (
          <div className="row">
            {visibleCards.map((card, index) => (
              <div className="col-md-4" key={card.id}>
                <div className="card mb-4 box-shadow flex flex-col h-full">
                  {cardLoading[index] && (
                    <div className="card-img-loading">
                      <div className="stylish-loader"></div>
                    </div>
                  )}
                  <img
                    className={`card-img-top ${cardLoading[index] ? 'hidden' : ''}`}
                    src={card.image}
                    alt="Card image cap"
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="card-body flex-grow">
                    <p className="card-text fw-bold thefont">{card.title}</p>
                    <p className="card-text fw-bold">{card.subtitle}</p>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: card.description }} />
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">{card.time}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-3">
          {showAll ? (
            <button
              type="button"
              className="btn btn-outline-primary btn-lg"
              onClick={() => {
                setShowAll(false);
                document.getElementById("ECS").scrollIntoView({ behavior: "smooth" });
              }}>
              <BsArrowLeft /> View Less <BsArrowRight />
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-dark btn-lg"
              onClick={() => setShowAll(true)}
            >
              <BsArrowRight /> View More <BsArrowLeft />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body2;
