import React from 'react';
import './WhyChooseUs.css';
import {
  FaCode,
  FaCloud,
  FaLock,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaHeadset,
  FaRocket
} from 'react-icons/fa';

const features = [
  {
    icon: <FaCode />,
    title: 'Full-Stack Expertise',
    description: 'From frontend interfaces to backend infrastructure—we deliver robust, scalable, and maintainable tech systems.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud-Native Solutions',
    description: 'We design and deploy efficient, secure, and cost-effective applications using the latest in cloud technologies.',
  },
  {
    icon: <FaLock />,
    title: 'Security First Approach',
    description: 'Every product we build integrates industry-standard encryption, authentication, and secure development practices.',
  },
  {
    icon: <FaCogs />,
    title: 'DevOps & Automation',
    description: 'CI/CD pipelines, versioning, testing, and deployment — all automated to accelerate your release cycles.',
  },
  {
    icon: <FaUsers />,
    title: 'User-Centric Design',
    description: 'We create intuitive, responsive user experiences that engage your audience and drive conversions.',
  },
  {
    icon: <FaChartLine />,
    title: 'Scalable Architecture',
    description: 'Our systems are designed to grow with your business, capable of handling real-world data and user loads.',
  },
  {
    icon: <FaHeadset />,
    title: '24/7 Technical Support',
    description: 'We provide proactive monitoring, support, and maintenance — so your operations stay online and secure.',
  },
  {
    icon: <FaRocket />,
    title: 'Agile & Adaptive Delivery',
    description: 'Quick iterations, transparent process, and continuous feedback help us deliver what your business truly needs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="whychoose-modern">
      <div className="why-content">
        <h1>Why <span>Choose Us</span></h1>
        <p className="why-intro">
          We don’t just write code—we solve business problems with tech. Our services are engineered for performance,
          security, and long-term growth.
        </p>

        <div className="feature-timeline">
          {features.map((feat, idx) => (
            <div className={`feature-row ${idx % 2 === 0 ? 'left' : 'right'}`} key={idx}>
              <div className="feature-icon">{feat.icon}</div>
              <div className="feature-content">
                <h3>{feat.title}</h3>
                <p>{feat.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>
    </section>
  );
}
