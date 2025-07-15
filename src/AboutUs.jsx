import React from "react";
import {
  FaUsers,
  FaBullseye,
  FaEye,
  FaMicrochip,
  FaNetworkWired,
  FaRocket,
  FaGlobe,
  FaCogs,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-section">
      {/* Floating background icons */}
      <div className="about-floating-icons">
        <FaMicrochip className="floating-icon chip" />
        <FaNetworkWired className="floating-icon network" />
        <FaRocket className="floating-icon rocket" />
        <FaGlobe className="floating-icon globe" />
        <FaCogs className="floating-icon gear" />
      </div>

      <div className="about-container">
        <h1>
          About <span>Our Company</span>
        </h1>

        <p className="about-intro">
          We are a forward-thinking technology company committed to delivering cutting-edge, scalable, and secure digital solutions. Through innovation, collaboration, and reliability, we enable businesses to thrive in a connected world.
        </p>

        <div className="about-cards">
          <div className="about-card fade-in">
            <FaUsers className="card-icon" />
            <h2>Who We Are</h2>
            <p>
              A team of passionate engineers, designers, and strategists united to craft meaningful digital solutions for global impact.
            </p>
          </div>

          <div className="about-card fade-in delay-1">
            <FaBullseye className="card-icon" />
            <h2>Our Mission</h2>
            <p>
              To empower organizations with intelligent and user-centric technologies that drive measurable success.
            </p>
          </div>

          <div className="about-card fade-in delay-2">
            <FaEye className="card-icon" />
            <h2>Our Vision</h2>
            <p>
              To be recognized as a world-class provider of innovative digital solutions that shape the future of industries.
            </p>
          </div>

          <div className="about-card fade-in delay-1">
            <FaGlobe className="card-icon" />
            <h2>Global Reach</h2>
            <p>
              Operating across continents, we bring local expertise and global strategies to every project we build.
            </p>
          </div>

          <div className="about-card fade-in delay-2">
            <FaShieldAlt className="card-icon" />
            <h2>Secure by Design</h2>
            <p>
              Security is our foundation — we build robust, privacy-respecting systems with enterprise-grade protection.
            </p>
          </div>

          <div className="about-card fade-in delay-1">
            <FaHandshake className="card-icon" />
            <h2>Trusted Partner</h2>
            <p>
              We build long-term relationships with transparency, support, and a deep understanding of client needs.
            </p>
          </div>
        </div>

        <blockquote>
          “Where technology meets excellence — we don’t just build apps; we build trust, impact, and the future.”
        </blockquote>
      </div>
    </section>
  );
}
