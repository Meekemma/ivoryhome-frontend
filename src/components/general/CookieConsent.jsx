import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import '../../styles/consent.css';

const CookieConsent = () => {
  const [cookies, setCookies] = useCookies(["CookieConsent"]);
  const location = useLocation();

  const THIRTY_DAYS_IN_SECONDS = 30 * 24 * 60 * 60;

  useEffect(() => {
    if (cookies.CookieConsent === "accepted") {
      
      // Initialize analytics or other cookie-dependent features
    } else if (cookies.CookieConsent === "rejected") {
      
      // Disable analytics or other features
    }
  }, [cookies]);

  const handleAccept = () => {
    setCookies("CookieConsent", "accepted", {
      path: "/",
      maxAge: THIRTY_DAYS_IN_SECONDS,
    });
    alert("Thank you! Your preferences have been saved.");
  };

  const handleReject = () => {
    setCookies("CookieConsent", "rejected", {
      path: "/",
      maxAge: THIRTY_DAYS_IN_SECONDS,
    });
    alert("You have rejected cookies. Optional features are disabled.");
  };

  // Hide banner if consent exists or on specific routes
  const shouldHideBanner =
    cookies.CookieConsent || ["/login", "/signup", "/verification"].includes(location.pathname);

  if (shouldHideBanner) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <p>
        We use cookies to enhance your browsing experience, provide personalized
        content, and analyze site traffic. By clicking 'Accept', you consent to
        our use of cookies. You can manage your preferences or reject cookies
        at any time. For more details, please refer to our{" "}
        <a className="text-red-500" href="/privacy-policy">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a className="text-red-500" href="/cookie-policy">
          Cookie Policy
        </a>.
      </p>
      <div className="cookie-consent-actions">
        <button className="accept-button" onClick={handleAccept}>
          Accept
        </button>
        <button className="reject-button" onClick={handleReject}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
