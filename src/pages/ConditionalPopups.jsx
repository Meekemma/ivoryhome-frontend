import React from 'react';
import { useLocation } from 'react-router-dom';
import PropertyPopup from '../components/general/PropertyPopup';
import NewsletterPopup from '../components/general/NewsletterPopup';

const ConditionalPopups = () => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  // Function to check if a popup should be shown
  const shouldShowPopup = (excludedRoutes) => {
    return !excludedRoutes.some((route) => {
      if (route.includes(":")) {
        // Handle dynamic routes like /property/:id
        const routeRegex = new RegExp(`^${route.replace(":id", "\\w+")}$`, "i");
        return routeRegex.test(currentPath);
      }
      return route === currentPath;
    });
  };

  // Excluded routes
  const excludedPropertyRoutes = [
    "/login",
    "/signup",
    "/reset_password",
    "/change_password",
    "/verification",
    "/profile",
    "/reset_password_confirm",
    "/properties",
    "/checkout/summary",
    "/property/:id",
    "/request",
    "/payment",
    "/success",
    "/privacy_&_policy",
    "/cookie_policy",
    "/terms_&_conditions",
  ];

  const excludedNewsletterRoutes = [
    "/login",
    "/signup",
    "/reset_password",
    "/change_password",
    "/verification",
    "/profile",
    "/reset_password_confirm",
    "/privacy_&_policy",
    "/cookie_policy",
    "/terms_&_conditions",
  ];

  const shouldShowPropertyPopup = shouldShowPopup(excludedPropertyRoutes);
  const shouldShowNewsletterPopup = shouldShowPopup(excludedNewsletterRoutes);

  return (
    <>
      {shouldShowPropertyPopup && <PropertyPopup />}
      {shouldShowNewsletterPopup && <NewsletterPopup />}
    </>
  );
};

export default ConditionalPopups;
