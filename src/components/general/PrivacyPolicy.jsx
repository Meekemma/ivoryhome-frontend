import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white text-gray-800 p-6 md:p-12 lg:p-16 ">
            <div className='flex justify-between'>
            <h1 className="text-3xl font-bold text-blue-700">Privacy Policy</h1>
            <h4 className='text-red-500'>Version 1</h4>
            </div>
            

            <p><strong>Effective Date:</strong> [Insert Date]</p>

            <p>Welcome to the Privacy Policy of Ivory Homes Limited. We value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data.</p>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
            <ul className="list-disc list-inside">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details.</li>
                <li><strong>Non-Personal Information:</strong> Browser type, IP address, and usage data.</li>
            </ul>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside">
                <li>To provide and improve our services.</li>
                <li>To process transactions securely.</li>
                <li>To communicate with you about updates and promotions.</li>
            </ul>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">3. Sharing of Information</h2>
            <p>We do not sell or rent your personal information to third parties. We may share information with:</p>
            <ul className="list-disc list-inside">
                <li>Service providers to facilitate our operations.</li>
                <li>Legal authorities, if required by law.</li>
            </ul>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">4. Cookies and Tracking Technologies</h2>
            <p>We use cookies to enhance your experience on our platform. You can manage cookie preferences through your browser settings.</p>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information. However, no online platform is completely secure, and you share information at your own risk.</p>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">6. Your Rights</h2>
            <ul className="list-disc list-inside">
                <li>Access your data.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data.</li>
            </ul>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">7. Third-Party Links</h2>
            <p>Our platform may contain links to third-party websites. We are not responsible for their privacy practices or content.</p>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">8. Updates to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be effective upon posting. We encourage you to review this policy regularly.</p>

            <hr className="border-gray-300" />

            <h2 className="text-2xl font-semibold text-gray-900">9. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us at <a href="mailto:ivoryhomes@gmail.com" className="text-blue-700 underline">ivoryhomes@gmail.com</a>.</p>

            <hr className="border-gray-300" />

            <p>Thank you for trusting Ivory Homes Limited with your personal information.</p>
        </div>
    );
};

export default PrivacyPolicy;
