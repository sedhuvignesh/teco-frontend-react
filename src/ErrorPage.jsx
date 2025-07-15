import React, { useEffect, useState } from 'react';
import { FaWifi, FaExclamationTriangle } from 'react-icons/fa';
import './ErrorPage.css';

export default function ErrorPage() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="error-page">
      {isOnline ? (
        <>
          <FaExclamationTriangle className="error-icon" />
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for doesn't exist or has been moved.</p>
        </>
      ) : (
        <>
          <FaWifi className="error-icon" />
          <h1>No Internet Connection</h1>
          <p>Please check your network and try again.</p>
        </>
      )}
    </div>
  );
}
