import React, { useContext, useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useNavigate, useParams } from 'react-router-dom';
import { ImageContext } from '../../Context/ImageContext';
import './ImageEditorComponent.css';

const ImageEditorComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { images } = useContext(ImageContext);
  const [crop, setCrop] = useState({ aspect: 4 / 3 });
  const [image, setImage] = useState(images[id].url);
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const imageRef = useRef(null);
  const fileInputRef = useRef(null);

  const onCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const onImageLoaded = (img) => {
    imageRef.current = img;
  };

  const onCropComplete = () => {
    if (imageRef.current && crop.width && crop.height) {
      const croppedImageUrl = getCroppedImg(imageRef.current, crop);
      setCroppedImageUrl(croppedImageUrl);
    }
  };

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return canvas.toDataURL('image/jpeg');
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="editor-container">
      <h2>Image Editor</h2>
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInputRef.current.click()} className="upload-button">
        Upload New Image
      </button>
      <ReactCrop
        src={image}
        crop={crop}
        onChange={onCropChange}
        onImageLoaded={onImageLoaded}
        onComplete={onCropComplete}
        className="image-crop"
      />
      {croppedImageUrl && (
        <div>
          <img alt="Crop" src={croppedImageUrl} className="cropped-image" />
        </div>
      )}
      <button className="save-button" onClick={() => navigate('/')}>Save Changes</button>
    </div>
  );
};

export default ImageEditorComponent;
