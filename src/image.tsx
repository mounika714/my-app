import React, { useState, useEffect } from 'react';

type ImageData = {
  id: number;
  filename: string;
  url: string;
  size: string;
};

type ImageProps = {
  image: ImageData;
  onClick: () => void;
};

const Image: React.FC<ImageProps> = ({ image, onClick }) => {
  return (
    <div className="image" onClick={onClick}>
      <div className="image-wrapper">
        <img src={image.url} alt={image.filename} />
      </div>
      <div className="image-title">{image.filename}</div>
      <div className="image-size">{image.size}</div>
    </div>
  );
};

export default Image;
