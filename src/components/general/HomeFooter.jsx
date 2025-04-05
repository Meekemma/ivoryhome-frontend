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
    twitter: 'https://twitter.com/your_handle',
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/service' },
    { name: 'Properties', path: '/properties' },
    { name: 'Estate', path: '/estate' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', path: '/Terms_&_conditions' },
    { name: 'Privacy Policy', path: '/Privacy_&_Policy' },
    { name: 'Cookie Policy', path: '/Cookie_Policy' },
  ];

  const contactDetails = {
    Tel : '+234 916 064 3000',
    email: 'info@Ivoryhomesng.com',
    address: [
      'HFP Eastline shopping complex',
      'Block A3 Office 471',
      'Abraham Adesaya',
      'Ajah, Lagos',
      'Nigeria',
    ],
  };

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <footer className="mx-auto px-8 py-8 mt-10 bg-black text-gray-100">
        <NewsLetter />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-700">Quick Links</h3>
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
            <h3 className="text-lg font-bold mb-4 text-red-700">Contact Us</h3>
            <p className="text-base flex items-center">
              <span className="mr-2">Tel:</span>
              <a
                href={`tel:${contactDetails.Tel.replace(/\s/g, '')}`}
                className="underline"
              >
                {contactDetails.Tel}
              </a>
            </p>
            <p className="text-base">
              Email:{' '}
              <a href={`mailto:${contactDetails.email}`} className="underline">
                {contactDetails.email}
              </a>
            </p>
            <div className="text-base">
              Address:
              {contactDetails.address.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-700">Legal Information</h3>
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
            <h3 className="text-lg font-bold mb-4 text-red-700">Follow Us</h3>
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
        <div className="text-sm text-center mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Ivory Homes Limited. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
