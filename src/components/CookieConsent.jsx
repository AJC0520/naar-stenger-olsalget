import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    } else {

      initializeGoogleAds(consent === "accepted");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    initializeGoogleAds(true);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    initializeGoogleAds(false);
  };

  const initializeGoogleAds = (hasConsent) => {
    if (hasConsent) {
      
      window.gtag && window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    } else {
      
      window.gtag && window.gtag('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>🍪 Vi bruker cookies</h3>
          <p>
            Denne nettsiden bruker cookies og Google Ads for å forbedre din opplevelse. 
            Vi deler også informasjon om din bruk av nettstedet med våre annonsepartnere.
          </p>
        </div>
        <div className="cookie-buttons">
          <button onClick={handleReject} className="cookie-btn cookie-btn-reject">
            Avvis
          </button>
          <button onClick={handleAccept} className="cookie-btn cookie-btn-accept">
            Godta
          </button>
        </div>
      </div>
    </div>
  );
}
