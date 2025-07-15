import React from "react";
import backgroundVideo from "../../assets/Landing_page.mp4";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <>
     
      <section className="landing-hero">
        <div className="video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="background-video"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="background-overlay" />

          <div className="landing-content">
            <div className="landing-intro">
              <h1 className="landing-title">
                <span className="typewriter-text">
                  <Typewriter
                    words={["Your Company Name"]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              <p className="landing-subtitle">
                We specialize in delivering exceptional solutions with a focus on quality, creativity, and customer satisfaction.
              </p>
              <Link to="/aboutus" className="landing-button">
                Get Started <FaArrowRight className="btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mini-sections">
        <div className="mini-section">
          <h2>About Us</h2>
          <p>We are passionate about innovation and committed to creating impactful experiences. Learn more about who we are.</p>
          <Link to="/aboutus" className="mini-link">Read More</Link>
        </div>

        <div className="mini-section">
          <h2>Services</h2>
          <p>Explore a wide range of services tailored to drive business growth and streamline operations.</p>
          <Link to="/services" className="mini-link">Explore Services</Link>
        </div>

        <div className="mini-section">
          <h2>Products</h2>
          <p>Discover premium products crafted to meet diverse needs with precision and quality assurance.</p>
          <Link to="/products" className="mini-link">View Products</Link>
        </div>

        <div className="mini-section">
          <h2>Contact</h2>
          <p>Want to connect or collaborate? Reach out to our team and let's start the conversation.</p>
          <Link to="/contact" className="mini-link">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
