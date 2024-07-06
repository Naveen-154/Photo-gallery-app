import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import GalleryComponent from './Components/GalleryComponent/GalleryComponent';
import AlbumsPage from './Components/PageComponent/AlbumpageComponent/AlbumpageComponent';
import PhotosPage from './Components/PageComponent/PhotopageComponent/PhotopageComponent';
import ProfilePage from './Components/PageComponent/ProfilepageComponent/ProfilepageComponent';
import SettingsPage from './Components/PageComponent/SettingpageComponent/SettingpageComponent';
import VideosPage from './Components/PageComponent/VideopageComponent/VideopageComponent';
import SidebarComponent from './Components/SidebarComponent/SidebarComponent';
import { ImageProvider } from './Context/ImageContext';
import UploadFormComponent from './Components/UploadFormComponent/UploadFormComponent';

const App = () => {
  return (
    <ImageProvider>
      <Router>
        <div className="app-container">
          <SidebarComponent />
          <main className="main-content">
            <Routes>
              <Route path="/Gallery" element={<GalleryComponent />} />
              <Route path="/photos" element={<PhotosPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/albums" element={<AlbumsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/upload" element={<UploadFormComponent/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </ImageProvider>
  );
};

export default App;
