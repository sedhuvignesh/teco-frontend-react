import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PageLoader from './components/PageLoader/PageLoader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import LandingPage from './pages/LandingPage/LandingPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import WhyChooseUs from './pages/WhyChooseUs/WhyChooseUs';
import ContactUs from './pages/ContactUs/ContactUs';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <>
      <PageLoader />
      <Router>
        <ScrollToTop />
        <div className="app-wrapper">
          <Navbar />
          <main className="content-wrapper">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/whychooseus" element={<WhyChooseUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
