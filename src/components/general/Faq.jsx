import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const faqData = [
  {
    question: 'How do I get started with buying a home?',
    answer: 'To begin the home-buying process, contact us for a consultation. We will help you find suitable properties, negotiate prices, and guide you through the paperwork.',
  },
  {
    question: 'What is the best way to sell my property?',
    answer: 'We offer professional services to help you sell your property quickly and at the best price. Our team provides marketing strategies, pricing advice, and expert negotiation skills.',
  },
  {
    question: 'What fees are involved in real estate transactions?',
    answer: 'Fees vary depending on the property and type of transaction, but we provide clear details upfront, including agent fees, closing costs, and other necessary charges.',
  },
  {
    question: 'Do you offer rental properties?',
    answer: 'Yes, we offer a range of rental properties, including residential and commercial options. We can help you find the perfect rental to meet your needs.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh(); // Ensures animations refresh if components re-render
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 bg-[#FFF5EE]" data-aos="fade-up">
      <h2 className="text-4xl sm:text-5xl font-bold text-[#005fa3] mb-8 text-center" data-aos="fade-up">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-300" data-aos="fade-up">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left text-lg font-semibold text-[#005fa3] py-3 focus:outline-none"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="text-gray-700 text-base mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
