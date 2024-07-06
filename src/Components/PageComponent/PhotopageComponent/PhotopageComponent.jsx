import React, { useContext } from 'react';
import { ImageContext } from '../../../Context/ImageContext';
import '../../GalleryComponent/GalleryComponent.css';
import image from '../../../assets/image/img4.jpeg'

const PhotosPage = () => {
  const { images, addImage } = useContext(ImageContext);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const newImage = {
        url,
        title: file.name,
        date: new Date().toLocaleDateString()
      };
      addImage(newImage);
    }
  };

  return (
    <div className="gallery-container">
      <h2>Photos</h2>
      <input type="file" onChange={handleImageUpload} />
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.url} alt={image.title} className="image" />
            <div className="image-info">
              <div className="image-title">{image.title}</div>
              <div className="image-date">{image.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;
