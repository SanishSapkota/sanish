import React, { useState } from 'react';
import Dhammapada from '../assets/images/dhammapada.jpg';
import Chatgpt from '../assets/images/chatgpt-ai.jpeg';
import Veritassium from '../assets/images/Veritasium.jpg';
import Sigmund from '../assets/images/Sigmund.jpg';
import BeauCarnes from '../assets/images/beau-carnes.png';
import dad from '../assets/images/parents.jpg'
import Halflife from '../assets/images/Half-life2.jpg'
import knotebook from '../assets/images/krishnamurtinotebook.jpg'
import sonnet from '../assets/images/Ozymandias.jpg'
import interstellar from '../assets/images/interstellar.jpg'
import hcverma from '../assets/images/HC_verma.png'

const PhotoGallery = () => {
  const imageList = [Dhammapada, Chatgpt, Veritassium, Sigmund,  knotebook,
  dad,
  hcverma,
  Halflife,
  sonnet,
  interstellar,
  BeauCarnes,
];

  const captions = [
    'Verse 290: If by giving up small pleasures great happiness is to be found, the wise should give up small pleasures seeing (the prospect of) great happiness.',
    'There is a certain feeling that happens when a new technology adjusts your thinking about computing.',
    'Veritassium - Youtube. (click to redirect)',
    'Freud introduced the concept of defense mechanisms, which are psychological strategies the mind employs to cope with anxiety and protect the ego. This has assisted me in gaining clarity when navigating challenging situations.',
    'Krishnamurti writings vividly capture the intricate beauty of nature portraying it as a mirror reflecting the essence of life. His writing has made me reflect on the nature and i started a practice of observing sunset and sunrise.',
    'My parents',
    'My fascination with physics bloosomed as a result of engaging with the works of Harish Chandra Verma. His simple and practical explanations are really helpful.',
    'The game features immersive narrative that unfolds without the use of cutscenes. It made me pereceive the beauty of narration and story-telling.',
    'This work of P. B. Shelley holds a special place in my heart , it is such an creative elaboration on  "Time possesses inherent strength, surpassing any individual or force in its power."',
    'This film holds a unique place in my heart because of the way it mirrors the innate human drive to surpass limitations and explore uncharted territories.',
    'His tutorials and github repos never fail to rescue a man who is in midst of debugging code. (click to redirect)'

    
  ];

  const links = [
    '#', 
    '#', 
    'https://www.youtube.com/@veritasium', 
    '#', 
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    '#',
    'https://github.com/beaucarnes'

    
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageClick = (index) => {
    const link = links[index];
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="new-container mt-3">
      <div className="new-container thefont" style={{ padding: '20px' }}>
        Inspirational Elements that have Influenced Me
      </div>
      <div className="container-down">
        {imageList.map((imageUrl, index) => (
          <div
            key={index}
            className="responsive-image-container"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleImageClick(index)}
            style={{ cursor: 'pointer' }}
          >
            <div className="image-overlay">
              <img
                src={imageUrl}
                alt={`Inspiration ${index + 1}`}
                className="image-gallery"
              />
              {hoveredIndex === index && (
                <div className="image-caption">{captions[index]}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;




