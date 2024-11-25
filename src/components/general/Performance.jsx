import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const metrics = [
  { value: '95%', description: 'Customer Satisfaction Rate' },
  { value: '1,500+', description: 'Successful Projects Delivered' },
  { value: '₦20M+', description: 'Average Monthly Revenue' },
  { value: '85%', description: 'Repeat Client Rate' },
];

const Performance = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, []);

  return (
    <div className="container test mx-auto py-12 px-6 mt-12 bg-[#FFF5EE]">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border-2 border-[#005fa3] rounded-lg shadow-lg bg-white transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Staggered animation for each metric
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-[#005fa3] whitespace-nowrap">{metric.value}</h1>
            <h2 className="text-sm sm:text-base text-gray-600 mt-2">{metric.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
