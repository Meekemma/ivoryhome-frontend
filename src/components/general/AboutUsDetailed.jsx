import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import kindelmedia from '../../assets/images/kindelmedia.jpg';
import rocket from '../../assets/images/rocket.svg';
import shield from '../../assets/images/shield.svg';
import success from '../../assets/images/success.svg';
import telescope from '../../assets/images/telescope.svg';
import timeline from '../../assets/images/timeline.svg';
import trophy from '../../assets/images/trophy.svg';
import handshake from '../../assets/images/handshake.svg';
import Executive from './Executive';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const AboutUsDetailed = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    return () => AOS.refresh();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto py-12 px-6 bg-[#FFF5EE]">
        {/* Meta Tags for SEO */}
        <Helmet>
          <title>About Ivory Home Limited | Transparent Real Estate Solutions</title>
          <meta
            name="description"
            content="Learn about Ivory Home Limited, your trusted real estate partner offering transparent solutions for buying, selling, and renting properties. Discover our mission, vision, and core values."
          />
          <meta name="keywords" content="real estate, properties, Ivory Home, buy, rent, sell" />
        </Helmet>

        {/* Introduction Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#005fa3] mb-6 leading-tight">
                About Ivory Homes Limited
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                Welcome to <span className="font-bold">Ivory Homes Limited</span>, your trusted partner in real estate. Whether
                you’re buying, selling, or renting, we strive to simplify the property market with confidence and ease.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                Experience real estate solutions that are transparent, professional, and efficient. Let us guide you to
                finding your dream home or securing your next investment.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                At Ivory Home Limited, We take pride in our personalised approach to Real Estate business. With a dedicated team of
                experts, we ensure every client's needs are understood and fulfilled. Our deep understanding of the market,
                combined with our innovative strategies, has helped us bridge the gap between clients and their ideal properties.
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                Join countless satisfied customers who have found their perfect homes through us. Your journey with
                Ivory Home Limited promises unparalleled service and a seamless real estate experience.
              </p>
            </div>
            <div className="flex justify-center">
              <LazyLoadImage
                src={kindelmedia}
                alt="Modern home exterior showcasing real estate services"
                effect="blur"
                className="rounded-lg shadow-lg max-w-full h-auto"
                wrapperProps={{
                  style: {
                    transition: 'opacity 1s ease-in-out',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                  },
                }}
              />
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="mb-12" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center">
              <img src={telescope} alt="Vision icon" className="w-16 h-16 mb-4" />
              <h3 className="text-3xl font-bold text-[#005fa3] mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To redefine the real estate experience by providing unparalleled value, transparency, and innovation to
                every client.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={rocket} alt="Mission icon" className="w-16 h-16 mb-4" />
              <h3 className="text-3xl font-bold text-[#005fa3] mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To connect individuals and families with their dream properties while delivering exceptional service
                tailored to their unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-[#005fa3] mb-6 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <img src={shield} alt="Integrity icon" className="w-16 h-16 mb-4" />
              <h4 className="text-xl font-bold text-[#005fa3]">Integrity</h4>
              <p className="text-gray-700">We uphold honesty and transparency in all our dealings.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={rocket} alt="Innovation icon" className="w-16 h-16 mb-4" />
              <h4 className="text-xl font-bold text-[#005fa3]">Innovation</h4>
              <p className="text-gray-700">Constantly seeking new ways to enhance our services.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={success} alt="Excellence icon" className="w-16 h-16 mb-4" />
              <h4 className="text-xl font-bold text-[#005fa3]">Excellence</h4>
              <p className="text-gray-700">Delivering quality service in every interaction.</p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-12" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-[#005fa3] mb-4">Our Story</h3>
            <p className="text-gray-700 text-lg mb-4">
              Ivory Home Limited was founded with a passion for real estate and a vision to simplify
              the property-buying and selling process. Over the years, we’ve grown to become a trusted
              name in the industry, known for our commitment to excellence and customer satisfaction.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our journey began with a simple goal: to create a seamless experience for individuals and
              families navigating the complexities of the real estate market. Starting from humble beginnings, 
              we have expanded our reach, offering a wide range of services that cater to both local and 
              international clients.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              With a team of experienced professionals, cutting-edge technology, and an unwavering 
              dedication to customer service, we have successfully bridged the gap between our clients 
              and their dream properties. From first-time homebuyers to seasoned investors, our clients 
              trust us to deliver results that exceed expectations.
            </p>
            <p className="text-gray-700 text-lg">
              Today, Ivory Home Limited is not just a real estate company but a community where trust, 
              innovation, and relationships are at the heart of everything we do. We are proud of our 
              legacy and excited about the future as we continue to transform the real estate experience 
              for our clients.
            </p>
        </section>


        {/* Achievements Section */}
        <section className="mb-12" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-[#005fa3] mb-4">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center" data-aos="fade-up">
              <img src={trophy} alt="Trophy icon" className="w-16 h-16 mb-4" />
              <p className="text-gray-700 text-center">
                Over 1,000 properties successfully listed and sold.
              </p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-up">
              <img src={timeline} alt="Timeline icon" className="w-16 h-16 mb-4" />
              <p className="text-gray-700 text-center">
                Years of excellence in the real estate industry.
              </p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-up">
              <img src={handshake} alt="Handshake icon" className="w-16 h-16 mb-4" />
              <p className="text-gray-700 text-center">
                A growing community of satisfied clients and partners.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-[#005fa3] mb-4">Ready to Start Your Real Estate Journey?</h3>
          <p className="text-gray-700 text-lg mb-6">
            Browse our wide range of properties or get in touch with our team for personalized
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate('/properties')}
              className="bg-[#005fa3] text-white py-2 px-6 rounded-md hover:bg-[#003d66] transition duration-300"
            >
              View Properties
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-[#005fa3] py-2 px-6 rounded-md border border-[#005fa3] hover:bg-[#005fa3] hover:text-white transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </section>

        {/* Executive Component */}
        <Executive />
      </div>
    </>
  );
};

export default AboutUsDetailed;
