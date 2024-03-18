import React, { useEffect } from 'react';

const TermsAndConditions = () => {
    useEffect(() => {
        // Scroll to the top of the window
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: smooth scrolling animation
        });
    }, []);
    return (
        <div className="max-w-7xl mx-auto mt-5">
            <div className="col-12">
                <h6 className="text-lg font-bold mb-4">Welcome to the home of India Pharm Assist. Please take a moment to read and understand our Terms & Conditions, as they govern your use of our website and the purchase of our products. By accessing our website and making a purchase, you agree to comply with and be bound by these terms. If you have any questions or concerns, please feel free to contact us at <a href="mailto:support@indiafarmassist.com" className="text-blue-500">support@indiafarmassist.com</a>.</h6>
            </div>

            <div className="col-12 mt-5">
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">1. Use of the Website:</h5>
                    <p className="mb-4">1.1. The content on this website is for informational purposes and general use only. It is subject to change without notice.</p>
                    <p className="mb-4">1.2. Your use of any information or materials on this website is entirely at your own risk, and we shall not be liable. It is your responsibility to ensure that any products, services, or information meet your specific requirements.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">2. Product Purchases:</h5>
                    <p className="mb-4">2.1. By purchasing through our website, you confirm that you are at least 18 years of age or are making the purchase under the supervision of a parent or legal guardian.</p>
                    <p className="mb-4">2.2. All orders are subject to availability and confirmation of the order price.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">3. Payment:</h5>
                    <p className="mb-4">3.1. All payments made on our website are secure and processed through trusted payment gateways.</p>
                    <p className="mb-4">3.2. By providing your payment information, you represent that you have the legal right to use the payment method you provide.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">4. Intellectual Property:</h5>
                    <p className="mb-4">4.1. This website contains material that is owned by or licensed to us. This material includes but is not limited to, the design, layout, look, appearance, and graphics.</p>
                    <p className="mb-4">4.2. Reproduction of any material is prohibited without prior written consent from us.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">5. Limitation of Liability:</h5>
                    <p className="mb-4">5.1. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">6. Indemnification:</h5>
                    <p className="mb-4">6.1. You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms & Conditions or your violation of any law or the rights of a third party.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">7. Governing Law:</h5>
                    <p className="mb-4">7.1. These Terms & Conditions are governed by and construed in accordance with the laws of the jurisdiction in which our company is registered.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">8. Changes to Terms & Conditions:</h5>
                    <p className="mb-4">8.1. We reserve the right to modify or replace these Terms & Conditions at any time. Any changes will be effective upon posting on this website.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">9. Contact Us:</h5>
                    <p className="mb-4">9.1. If you have any questions, concerns, or feedback regarding these Terms & Conditions, please contact us at <a href="mailto:support@indiafarmassist.com" className="text-blue-500">support@indiafarmassist.com</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
