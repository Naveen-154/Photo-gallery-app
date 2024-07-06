import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImageContext } from '../../Context/ImageContext';
import './GalleryComponent.css';

const GalleryComponent = () => {
  const { images } = useContext(ImageContext);

  return (
    <div className="gallery-container">
      <h2>Photo Gallery</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.url} alt={image.title} className="image" />
            <div className="image-info">
              <p className="image-title">{image.title}</p>
              <p className="image-date">{image.date}</p>
            </div>
            <div className="image-actions">
              <Link to={`/edit/${index}`} className="edit-link">Edit</Link>
              <button className="delete-button">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
