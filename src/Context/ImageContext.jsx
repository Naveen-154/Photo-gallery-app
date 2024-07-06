import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
 const [images, setImages] = useState([
  { url: 'https://via.placeholder.com/300?text=Subcarpathia+2016', title: 'Subcarpathia 2016', date: '25.02.2016' },
  { url: 'https://via.placeholder.com/300?text=Summer+2015', title: 'Summer 2015', date: '20.02.2016' },
  { url: 'https://via.placeholder.com/300?text=Aspen+2015', title: 'Aspen 2015', date: '15.02.2016' },
  { url: 'https://via.placeholder.com/300?text=Croatia+2015', title: 'Croatia 2015', date: '10.02.2016' },
  { url: 'https://via.placeholder.com/300?text=Winter+2014', title: 'Winter 2014', date: '05.02.2016' },
  { url: 'https://via.placeholder.com/300?text=Spring+2013', title: 'Spring 2013', date: '01.02.2016' },
  { url: 'https://via.placeholder.com/300?text=Fall+2012', title: 'Fall 2012', date: '25.01.2016' },
  { url: 'https://via.placeholder.com/300?text=Autumn+2011', title: 'Autumn 2011', date: '20.01.2016' },
  { url: 'https://via.placeholder.com/300?text=Winter+2010', title: 'Winter 2010', date: '15.01.2016' },
  { url: 'https://via.placeholder.com/300?text=Spring+2009', title: 'Spring 2009', date: '10.01.2016' },
  { url: 'https://via.placeholder.com/300?text=Summer+2008', title: 'Summer 2008', date: '05.01.2016' },
]);


  const addImage = (newImage) => {
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <ImageContext.Provider value={{ images, addImage }}>
      {children}
    </ImageContext.Provider>
  );
};
