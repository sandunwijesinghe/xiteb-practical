import React, { useState, useEffect } from 'react';
import HeaderSearch from './HeaderSearch';
import './slider.css'
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/0/B/%7B20B18195-50BE-4993-9CAE-0A141AFD3747%7D201126_slcb_homepage1.jpg",
    "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/F/A/5/%7BFA599018-DA27-4904-8585-D0B858639D94%7DSEAA%20We%20Are%20Vaccinated_website-home-banner.jpeg",
    "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/B/4/D/%7BB4DC25D4-2F83-4133-BE8A-B139CBAD061B%7D200710_slcb_slcares.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, [currentSlide, images.length]);

  return (
    <div className='slider-banner'>
      <img  src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
      <HeaderSearch/>
    </div>
  );
};

export default Slider;
