import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import '../styles/main.css';
import Footer from './Footer';

const CustomVerification = () => {
  const [codes, setCodes] = useState(Array(5).fill('')); // Updated to 5 boxes
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const refs = Array(5) // Updated to 5 refs
    .fill()
    .map(() => useRef(null));

  const handleChange = (index, value) => {
    if (value.length === 1 && index < 4) {
      refs[index + 1].current.focus(); // Move focus forward
    }
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && !codes[index]) {
      refs[index - 1].current.focus(); // Move focus backward
    }
  };

  const handleResendCode = async () => {
    const email = localStorage.getItem('email');
    if (!email) {
      alert('Email not found. Please try again.');
      return;
    }
    try {
      // Uncomment this when backend is connected
      // await axios.post('http://127.0.0.1:8000/resend_otp/', { email });
      alert('Verification code resent to your email');
    } catch (error) {
      console.error('Error resending verification code:', error);
      alert('Error resending verification code');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const code = codes.join('');
    if (code.length !== 5) {
      setError('Please enter a complete 5-digit code'); // Updated to 5 digits
      return;
    }
    setIsLoading(true);
    try {
      // Uncomment this when backend is connected
      // const response = await axios.post('http://127.0.0.1:8000/verify_code/', { code });
      const response = { status: 200 }; // Mock response for testing
      if (response.status === 200) {
        alert('Code verified successfully');
        navigate('/login');
      } else {
        setError('Invalid verification code');
      }
    } catch (error) {
      setError('Error verifying code');
      console.error('Error verifying code:', error);
      alert('Error verifying code');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <>
      <div className="container px-4 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="p-5 border-2 border-[#0077c0] rounded-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Confirmation Code</h2>
            <p className="text-center text-gray-600 mb-6">
              Please enter the verification code sent to your email
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center mb-6 gap-2">
                {codes.map((code, index) => (
                  <input
                    key={index}
                    ref={refs[index]}
                    type="text"
                    className="otp-input border border-gray-300 rounded-md px-4 py-2 text-center text-lg font-bold focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={code}
                    maxLength={1}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <div className="flex justify-center mb-6">
                <button
                  className="w-full btn text-white py-2 rounded-md"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Continue'}
                </button>
              </div>
              <p className="text-center text-gray-600">
                Didn't receive a verification code?{' '}
                <button
                  type="button"
                  className="text-purple-600 hover:underline"
                  onClick={handleResendCode}
                >
                  Resend
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomVerification;