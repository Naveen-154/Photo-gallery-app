import React, { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { ImageContext } from '../../Context/ImageContext';
import './UploadFormComponent.css';

const UploadFormComponent = () => {
  const { addImage } = useContext(ImageContext);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const date = new Date().toISOString().split('T')[0];
        addImage({ url: reader.result, title: file.name, date });
      };
      reader.readAsDataURL(file);
    });
  }, [addImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="upload-container">
      <h2>Upload Image</h2>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

export default UploadFormComponent;
