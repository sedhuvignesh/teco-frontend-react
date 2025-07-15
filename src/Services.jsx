import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import {
  FiGlobe,
  FiBox,
  FiFileText,
  FiTruck,
  FiClipboard,
  FiBarChart2,
  FiPackage,
} from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Cloud Infrastructure',
    description:
      'Enterprise-grade cloud deployment, migration, and scalability solutions tailored to your growth.',
    icon: <FiGlobe />,
  },
  {
    title: 'Custom Applications',
    description:
      'Full-cycle development of tailored web and mobile apps that deliver performance, security, and UX excellence.',
    icon: <FiBox />,
  },
  {
    title: 'System Integration',
    description:
      'Seamless integration between APIs, databases, and platforms — ensuring real-time, secure data flow.',
    icon: <FiFileText />,
  },
  {
    title: 'DevOps Automation',
    description:
      'CI/CD pipelines, containerization, and infrastructure-as-code — accelerating delivery with reliability.',
    icon: <FiTruck />,
  },
  {
    title: 'Tech Documentation',
    description:
      'Clear, structured technical docs and API references that accelerate onboarding and reduce support costs.',
    icon: <FiClipboard />,
  },
  {
    title: 'Data Intelligence',
    description:
      'Actionable insights through data visualization, analytics, and predictive modeling for smarter decisions.',
    icon: <FiBarChart2 />,
  },
  {
    title: 'Interface Design',
    description:
      'UI/UX design systems and responsive layouts crafted to engage users and boost product adoption.',
    icon: <FiPackage />,
  },
];

export default function Services() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="services-section">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Empowering businesses through reliable engineering, seamless experiences, and future-ready digital solutions.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`flip-card ${flippedIndex === index ? 'flipped' : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <div className="flip-card-back">
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="services-btn-wrapper">
        <Link to="/products" className="product-button">
          Our Products <FaArrowRight className="btn-icon" />
        </Link>
      </div>
    </section>
  );
}
