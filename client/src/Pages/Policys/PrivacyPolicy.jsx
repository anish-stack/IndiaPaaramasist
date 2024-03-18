import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        // Scroll to the top of the window
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: smooth scrolling animation
        });
    }, []);
    return (
        <div className="max-w-7xl mx-auto mt-5">
            <div className="single">
                <h5 className="text-lg font-bold mb-2">1. Information We Collect:</h5>
                <p className="mb-4">1.1. Personal Information- We may collect personal information such as your name, contact information, email address, and billing information when you place an order or sign up for our newsletter.</p>
                <p className="mb-4">1.2. Automatically Collected Information- Our website may automatically collect certain information, including your IP address, browser type, and operating system, to enhance your browsing experience.</p>
            </div>
            <div className="single">
                <h5 className="text-lg font-bold mb-2">2. How We Use Your Information:</h5>
                <p className="mb-4">2.1. We use your personal information to process your orders, send order confirmations, respond to your inquiries, and provide you with updates about our products and promotions.</p>
                <p className="mb-4">2.2. We may use the information automatically collected to improve our website's functionality and tailor our content to better suit your preferences.</p>
            </div>
            <div className="single">
                <h5 className="text-lg font-bold mb-2">3. Information Sharing:</h5>
                <p className="mb-4">3.1. We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                <p className="mb-4">3.2. We may share your information with trusted service providers who assist us in operating our website and conducting our business, such as payment processors and shipping companies.</p>
            </div>
            <div className="single">
                <h5 className="text-lg font-bold mb-2">4. Cookies and Tracking Technologies:</h5>
                <p className="mb-4">4.1. We use cookies and similar tracking technologies to enhance your experience on our website and gather information about how you use it. You can choose to disable cookies through your browser settings.</p>
            </div>
            <div className="single">
                <h5 className="text-lg font-bold mb-2">5. Security:</h5>
                <p className="mb-4">5.1. We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the Internet is entirely secure, and we cannot guarantee the security of your information.</p>
            </div>
            <div className="single">
                <h5 className="text-lg font-bold mb-2">6. Children's Privacy:</h5>
                <p className="mb-4">6.1. Our website is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us to have it removed.</p>
            </div>
            <div className="single">
                <h5 className="text-lg font-bold mb-2">7. Your Choices:</h5>
                <p className="mb-4">7.1. You can opt out of receiving promotional emails from us by following the unsubscribe instructions provided in the email.</p>
                <p className="mb-4">7.2. You can update or correct your personal information by contacting us at <a href="mailto:support@indiafarmassist.com" className="text-blue-500">support@indiafarmassist.com</a>.</p>
            </div>
            <div className="single">
                <h5 className="text-lg font-bold mb-2">8. Changes to Privacy Policy:</h5>
                <p className="mb-4">8.1. We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective upon posting on this website.</p>
            </div>
            <div className="single">
                <h5 className="text-lg font-bold mb-2">9. Contact Us:</h5>
                <p className="mb-4">9.1. If you have any questions, concerns, or feedback regarding this Privacy Policy, please contact us at <a href="mailto:support@indiafarmassist.com" className="text-blue-500">support@indiafarmassist.com</a>.</p>
            </div>
            <p className="mb-4">Thank you for choosing India Pharm Assist. Your privacy is of utmost importance to us, and we are committed to ensuring the security and confidentiality of your personal information.</p>
        </div>
    );
};

export default PrivacyPolicy;
