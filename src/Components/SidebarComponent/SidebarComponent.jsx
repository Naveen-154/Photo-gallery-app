import React from 'react';
import { Link } from 'react-router-dom';
import ima from '../../assets/image/img2.jpeg';
import './SidebarComponent.css';

const SidebarComponent = () => {
  return (
    <div className="sidebar-container">
      <div className="profile-section">
        <img src={ima} alt="Profile" className="profile-pic" />
        <button className="upload-button">Upload Profile Picture</button>
      </div>
      <nav>
        <ul className="nav-links">
        <li>
            <Link to="/Gallery">Gallery</Link>        
         </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default SidebarComponent;
