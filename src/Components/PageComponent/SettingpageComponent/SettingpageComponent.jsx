import React, { useState } from 'react';
import '../SettingpageComponent/SettingpageComponent.css';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('en');

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleNotificationsToggle = () => {
    setNotifications(!notifications);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting-item">
        <label>Dark Mode</label>
        <input type="checkbox" checked={darkMode} onChange={handleDarkModeToggle} />
      </div>
      <div className="setting-item">
        <label>Notifications</label>
        <input type="checkbox" checked={notifications} onChange={handleNotificationsToggle} />
      </div>
      <div className="setting-item">
        <label>Language</label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsPage;
