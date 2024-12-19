import React from 'react';

const CookiePolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white text-gray-800 p-6 md:p-12 lg:p-16">

            <div className='flex justify-between'>
                <h1 className="text-3xl font-bold text-blue-700">Cookie Policy</h1>
                <h4 className='text-red-500'>Version 1</h4>
            </div>
            

            <p><strong>Effective Date:</strong> [Insert Date]</p>

            <p>This Cookie Policy explains how Ivory Homes Limited uses cookies and similar tracking technologies on our platform. By using our platform, you consent to the use of cookies as described in this policy.</p>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">1. What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help us improve your experience by remembering your preferences and enabling certain functionalities.</p>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">2. Types of Cookies We Use</h2>
            <ul className="list-disc list-inside">
                <li><strong>Essential Cookies:</strong> Necessary for the platform to function correctly, such as maintaining your login session.</li>
                <li><strong>Analytical Cookies:</strong> Help us understand how users interact with the platform to improve its performance.</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and enhance your experience.</li>
                <li><strong>Advertising Cookies:</strong> Used to deliver relevant ads and measure their effectiveness.</li>
            </ul>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">3. How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc list-inside">
                <li>Ensure the platform operates efficiently.</li>
                <li>Understand user behavior and improve our services.</li>
                <li>Personalize content and advertisements.</li>
            </ul>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">4. Managing Cookies</h2>
            <p>You can manage or disable cookies through your browser settings. However, disabling cookies may affect the functionality of the platform.</p>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">5. Third-Party Cookies</h2>
            <p>We may use third-party cookies for analytics and advertising purposes. These cookies are governed by the third parties' privacy policies.</p>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">6. Updates to This Policy</h2>
            <p>We may update this Cookie Policy periodically. Changes will be effective upon posting. We encourage you to review this policy regularly.</p>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">7. Contact Us</h2>
            <p>If you have questions or concerns about this Cookie Policy, please contact us at <a href="mailto:ivoryhomes@gmail.com" className="text-blue-700 underline">ivoryhomes@gmail.com</a>.</p>

            <hr className="border-gray-300" />

            <p>Thank you for trusting Ivory Homes Limited. Your privacy is important to us.</p>
        </div>
    );
};

export default CookiePolicy;
