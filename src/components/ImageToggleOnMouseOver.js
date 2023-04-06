import React, { useRef } from 'react';

const ImageToggleOnMouseOver = ({ imageIndex, primaryImg, secondaryImg, alt, className, updateImageSrc }) => {
    const imageRef = useRef();
  
    return (
      <img
        src={primaryImg}
        alt={alt}
        className={className}
        ref={imageRef}
        onMouseOver={() => {
          imageRef.current.src = secondaryImg;
        }}
        onMouseOut={() => {
          imageRef.current.src = primaryImg;
        }}
      />
    );
  };
  
export default ImageToggleOnMouseOver;