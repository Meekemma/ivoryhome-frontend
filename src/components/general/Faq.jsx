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
  {
    question: 'What is the best time to buy a property?',
    answer: 'The best time to buy depends on various factors such as market trends and personal circumstances. We can help you determine the optimal time to make your move.',
  },
  {
    question: 'How can I finance my home purchase?',
    answer: 'We offer guidance on securing financing options, including mortgages, home loans, and down payment assistance programs.',
  },
  {
    question: 'Can I negotiate the price of a property?',
    answer: 'Yes, we encourage negotiation. Our experienced agents will help you navigate price discussions to ensure you get the best deal.',
  },
  {
    question: 'What are closing costs?',
    answer: 'Closing costs are fees associated with the finalization of the property sale. They can include title fees, inspection costs, and taxes.',
  },
  {
    question: 'How long does the home-buying process take?',
    answer: 'The home-buying process typically takes a few weeks to a few months, depending on various factors like market conditions and loan approval times.',
  },
  {
    question: 'Do you offer property management services?',
    answer: 'Yes, we offer comprehensive property management services to help landlords manage their properties efficiently and maximize rental income.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
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
        {faqData.slice(0, showAll ? faqData.length : 4).map((faq, index) => (
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

      {/* See All / See Less button */}
      <div className="text-center mt-6">
        <button
          onClick={toggleShowAll}
          className="text-[#005fa3] font-semibold py-2 px-4 border-2 btn border-[#005fa3] rounded-full hover:bg-[#005fa3] hover:text-white transition-all"
        >
          {showAll ? 'See Less' : 'See All'}
        </button>
      </div>
    </div>
  );
};

export default Faq;
