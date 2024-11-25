import React from 'react';
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import tiktok from '../../assets/images/tiktok.svg';
import whatsapp from '../../assets/images/whatsapp.svg';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import { useNavigate } from 'react-router-dom';

import '../../styles/footer.css';
import NewsLetter from './NewsLetter';

const HomeFooter = () => {
  const socialMediaLinks = {
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com/meeky007/',
    tiktok: 'https://www.tiktok.com',
    linkedin: 'https://www.linkedin.com',
    whatsapp: 'https://wa.me/+2349076309004',
    twitter: 'https://wa.me/+2349076309004',
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Properties', path: '/properties' },
    { name: 'Estate', path: '/estate' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  const contactDetails = {
    phone: '+123 456 7890',
    email: 'info@store.com',
    address: '123 Main Street, City, Country',
  };

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <footer className="mx-auto px-8 py-8 mt-10 bg-[#005fa3] text-gray-100">
        
            <NewsLetter />
    
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-base hover:underline cursor-pointer"
                  onClick={() => handleNavigate(link.path)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-400">Contact Us</h3>
            <p className="text-base">
              Phone:{' '}
              <a href={`tel:${contactDetails.phone}`} className="underline">
                {contactDetails.phone}
              </a>
            </p>
            <p className="text-base">
              Email:{' '}
              <a href={`mailto:${contactDetails.email}`} className="underline">
                {contactDetails.email}
              </a>
            </p>
            <p className="text-base">Address: {contactDetails.address}</p>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal Information</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-base hover:underline cursor-pointer"
                  onClick={() => handleNavigate(link.path)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-400">Follow Us</h3>
            <ul className="flex space-x-4">
              {Object.entries(socialMediaLinks).map(([name, url], index) => (
                <li key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={
                        name === 'facebook'
                          ? facebook
                          : name === 'instagram'
                          ? instagram
                          : name === 'tiktok'
                          ? tiktok
                          : name === 'whatsapp'
                          ? whatsapp
                          : name === 'twitter'
                          ? twitter
                          : linkedin
                      }
                      alt={`${name} icon`}
                      className="w-6 h-6"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm border-t border-white/20 pt-4">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
