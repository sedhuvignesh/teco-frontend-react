import React, { useEffect, useState } from 'react';
import './PageLoader.css';
import {
  FaRocket,
  FaCogs,
  FaLightbulb,
  FaLaptopCode,
  FaHandshake
} from 'react-icons/fa';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="icon-row">
        <FaRocket className="loader-icon" />
        <FaCogs className="loader-icon" />
        <FaLightbulb className="loader-icon" />
        <FaLaptopCode className="loader-icon" />
        <FaHandshake className="loader-icon" />
      </div>
      <div className="loader-text">
        <h1>Example Tech Solutions</h1>
        <p>Innovating the Future, One Line at a Time</p>
      </div>
    </div>
  );
}
