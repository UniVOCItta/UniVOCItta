import React from 'react';
import { HashLink } from 'react-router-hash-link';

function CarouselCard({k,src,alt,copyright,title,link,linkText}) {
  return (
    <div key={k} className='card' style={{objectFit: "contain"}}>
    <img
      style={{objectFit: "contain"}}
      src={src}
      alt={alt}
      copyright={copyright}
    ></img>
    <h4 className='body-card-h'>{title}</h4>
    <p>
      <HashLink to={link}><button className='body-slider-button'>{linkText}</button></HashLink>
    </p>
  </div>
  );
}

export default CarouselCard;