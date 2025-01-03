import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-white text-gray-800 p-6 md:p-12 lg:p-16">
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold text-blue-700">Terms and Conditions</h1>
                <h5 className="text-red-500">Version 1</h5>
            </div>

            <p><strong>Effective Date:</strong> January 10, 2025</p>

            <p>Welcome to Ivory Homes Limited! These Terms and Conditions ("Terms") govern your access to and use of our platform. By using our services, you agree to comply with these Terms. Please read them carefully before proceeding.</p>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">1. Acceptance of Terms</h2>
            <p>By accessing or using our platform, you confirm that you have read, understood, and agree to these Terms. If you do not agree, you must discontinue use immediately.</p>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">2. Eligibility</h2>
            <ul className="list-disc list-inside">
                <li>Be at least 18 years old.</li>
                <li>Provide accurate and complete registration information.</li>
                <li>Comply with all applicable laws and regulations.</li>
            </ul>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">3. User Accounts</h2>
            <h3 className="text-xl font-medium text-blue-700 mt-4">3.1 Registration</h3>
            <ul className="list-disc list-inside">
                <li>You must create an account to access certain features.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            </ul>

            <h3 className="text-xl font-medium text-blue-700 mt-4">3.2 Account Responsibilities</h3>
            <ul className="list-disc list-inside">
                <li>You are responsible for all activities conducted through your account.</li>
                <li>Notify us immediately if you suspect unauthorized use of your account.</li>
            </ul>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">4. Services Provided</h2>
            <p>We offer services related to buying, selling, and renting real estate properties, including:</p>
            <ul className="list-disc list-inside">
                <li>Property listings.</li>
                <li>Payment processing (via Paystack).</li>
                <li>Communication tools.</li>
            </ul>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">5. User Obligations</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside">
                <li>Post false, misleading, or fraudulent information.</li>
                <li>Use the platform for illegal purposes.</li>
                <li>Interfere with or disrupt the platform's functionality.</li>
            </ul>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">6. Payments and Fees</h2>
            <h3 className="text-xl font-medium text-blue-700 mt-4">6.1 Payment Processing</h3>
            <p>Payments are facilitated through Paystack. By using these services, you agree to their respective terms and policies.</p>

            <h3 className="text-xl font-medium text-blue-700 mt-4">6.2 Refund Policy</h3>
            <p>Refunds, if applicable, will be processed as per our refund policy. For refund inquiries, please contact <a href="mailto:hr@ivoryhomesng.com" className="text-blue-700 underline">hr@ivoryhomesng.com</a>.</p>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">7. Content and Intellectual Property</h2>
            <h3 className="text-xl font-medium text-blue-700 mt-4">7.1 User-Generated Content</h3>
            <p>You retain ownership of any content you submit but grant us a license to use it as needed.</p>

            <h3 className="text-xl font-medium text-blue-700 mt-4">7.2 Platform Content</h3>
            <p>All content on the platform is our intellectual property and protected under applicable laws.</p>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">8. Privacy Policy</h2>
            <p>Your use of the platform is also governed by our Privacy Policy, which can be found <a href="#" className="text-blue-700 underline">here</a>.</p>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">9. Disclaimers and Limitation of Liability</h2>
            <h3 className="text-xl font-medium text-red-700 mt-4">9.1 Disclaimers</h3>
            <p>We do not guarantee the accuracy or reliability of property listings. The platform is provided "as is" without warranties of any kind.</p>

            <h3 className="text-xl font-medium text-blue-700 mt-4">9.2 Limitation of Liability</h3>
            <p>To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the platform.</p>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">10. Termination</h2>
            <p>We may suspend or terminate your access to the platform if you violate these Terms or engage in fraudulent activities.</p>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">11. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be effective upon posting. Continued use signifies acceptance of updated Terms.</p>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">12. Governing Law</h2>
            <p>These Terms are governed by the laws of Nigeria. Disputes will be resolved in the courts of Lagos.</p>

            <hr className="border-gray-300 my-4" />

            <h2 className="text-2xl font-semibold text-gray-900 mt-6">13. Contact Information</h2>
            <p>For questions or concerns about these Terms, please contact us at <a href="mailto:hr@ivoryhomesng.com" className="text-blue-700 underline">hr@ivoryhomesng.com</a>.</p>

            <hr className="border-gray-300 my-4" />

            <p>By using our platform, you agree to these Terms and Conditions. Thank you for choosing Ivory Homes Limited!</p>
        </div>
    );
};

export default TermsAndConditions;
