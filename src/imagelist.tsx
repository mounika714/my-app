import React, { useState, useEffect } from 'react';
import Image from './image';

type ImageData = {
    id: number;
    filename: string;
    url: string;
    size: string;
  };

const ImagesList: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  useEffect(() => {
    fetch('https://agencyanalytics-api.vercel.app/images.json')
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <Image key={image.id} image={image} onClick={() => handleImageClick(image)} />
        ))}
      </div>
      <div style={{ flex: '1' }}>
        {selectedImage && (
          <div>
            <div>
                <img src={selectedImage.url} alt={selectedImage.filename} />
                <div>{selectedImage.filename}</div>
                <div>{selectedImage.size}</div>
            </div>
            <div>
                
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagesList;
