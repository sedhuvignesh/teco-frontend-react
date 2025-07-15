import React from 'react';
import './Products.css';

const products = [
  {
    name: 'AI & Machine Learning Models',
    description:
      'Custom-trained models for image recognition, NLP, recommendation engines, and predictive analytics.',
  },
  {
    name: 'IoT Devices & Integrations',
    description:
      'Secure smart device connectivity solutions for industries like agriculture, logistics, and manufacturing.',
  },
  {
    name: 'Enterprise Software Solutions',
    description:
      'Scalable CRM, ERP, and internal workflow tools tailored to your business logic and goals.',
  },
  {
    name: 'SaaS Platforms',
    description:
      'Cloud-native multi-tenant platforms for B2B/B2C users, with built-in billing, auth, and analytics.',
  },
  {
    name: 'Cybersecurity Products',
    description:
      'Authentication systems, intrusion detection, and data encryption tools to secure your infrastructure.',
  },
  {
    name: 'Cloud Deployment Tools',
    description:
      'Kubernetes setups, serverless functions, and CI/CD automation for scalable app infrastructure.',
  },
  {
    name: 'Web & Mobile Apps',
    description:
      'Cross-platform apps built with modern stacks like React, Flutter, and Next.js for high performance.',
  },
  {
    name: 'DevOps & Monitoring Kits',
    description:
      'Logging, metrics, and alerting tools for full observability — Grafana, Prometheus, ELK and more.',
  },
  {
    name: 'Digital Twin & Simulation',
    description:
      'Virtual replicas of systems and environments for predictive modeling, remote diagnostics, and control.',
  },
  {
    name: 'Blockchain Applications',
    description:
      'Smart contracts, NFT systems, and decentralized apps (dApps) for finance, supply chain, and identity.',
  },
  {
    name: 'Embedded Tech Solutions',
    description:
      'Microcontroller programming, firmware development, and real-time systems for industrial use.',
  },
  {
    name: 'AI Chatbots & Assistants',
    description:
      'Conversational agents with GPT/NLP integration for websites, support, HR, and sales workflows.',
  },
  {
    name: '3D/AR/VR Experiences',
    description:
      'Immersive interfaces and spatial computing solutions for training, education, and product demos.',
  },
];

export default function Products() {
  return (
    <section className="products-section">
      <h1 className="products-title">Products</h1>
      <p className="products-description">
        Explore our suite of next-gen software and hardware tech products designed to elevate your digital infrastructure.
      </p>

      <div className="products-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <div className="product-overlay">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
