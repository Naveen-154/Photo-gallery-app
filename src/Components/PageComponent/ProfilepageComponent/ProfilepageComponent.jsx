import React, { useState } from 'react';
import '../ProfilepageComponent/ProfilepageComponent.css';

const ProfilePage = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSaveChanges = () => {
    // Add logic to save changes
    alert('Changes saved successfully!');
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-item">
        <label>Name</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div className="profile-item">
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="profile-item">
        <label>Bio</label>
        <textarea value={bio} onChange={handleBioChange}></textarea>
      </div>
      <button className="save-button" onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default ProfilePage;
