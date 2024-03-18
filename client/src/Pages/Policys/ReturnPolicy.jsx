import { useEffect } from "react";

const ReturnPolicy = () => {
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
                <h6 className="text-lg font-bold mb-4">At India Pharm Assist, we take pride in providing you with high-quality products. We want you to be completely satisfied with your purchase, and we're here to assist you in case you need to initiate a return or request a refund. Please take a moment to read our Refund and Returns Policy to understand the process and your rights as a valued customer.</h6>
            </div>

            <div className="col-12 mt-5">
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">1. We accept returns for products that meet the following criteria:</h5>
                    <p className="mb-4">- The product is in its original packaging and unused condition.</p>
                    <p className="mb-4">- The return request is initiated within 30 days of the delivery date.</p>
                    <p className="mb-4">- Proof of purchase (order number and purchase receipt) is provided.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">2. Initiating a Return:</h5>
                    <p className="mb-4">To initiate a return, please follow these steps:</p>
                    <p className="mb-4">- Contact our customer service team at <a href="mailto:support@indiafarmassist.com" className="text-blue-500">support@indiafarmassist.com</a> with your order number, the reason for the return, and any relevant details.</p>
                    <p className="mb-4">- Our team will provide you with instructions on how to proceed and where to send the product.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">3. Return Process:</h5>
                    <p className="mb-4">Once your return is received and inspected, we will notify you via email regarding the approval or rejection of your return. If approved, your refund or exchange will be processed.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">4. Refund Policy:</h5>
                    <p className="mb-4">Refunds will be processed in the same method of payment used during the initial purchase.</p>
                    <p className="mb-4">Please note the following:</p>
                    <p className="mb-4">- Shipping and handling charges are non-refundable.</p>
                    <p className="mb-4">- The cost of return shipping is the responsibility of the customer unless the return is due to a mistake on our part.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">5. Exchange Policy:</h5>
                    <p className="mb-4">If you receive a damaged or defective product, please contact us within 7 days of receiving the product. We will arrange for a replacement to be sent to you. Please note that exchanges are subject to product availability.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">6. Non-Refundable Items:</h5>
                    <p className="mb-4">Certain items are not eligible for return or refund:</p>
                    <p className="mb-4">- Gift cards or promotional items.</p>
                    <p className="mb-4">- Products that have been used or are not in their original packaging.</p>
                    <p className="mb-4">- Items returned after the 30-day return window.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">7. Damaged or Incorrect Items:</h5>
                    <p className="mb-4">In the rare event that you receive a damaged or incorrect product, please contact us at <a href="mailto:support@indiafarmassist.com" className="text-blue-500">support@indiafarmassist.com</a> within 7 days of receiving the product. We will work with you to provide a suitable solution.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">8. Questions and Assistance:</h5>
                    <p className="mb-4">If you have any questions or need assistance with our Refund and Returns Policy, please don't hesitate to contact our customer service team at <a href="mailto:support@indiafarmassist.com" className="text-blue-500">support@indiafarmassist.com</a>.</p>
                </div>
                <p className="mb-4">Thank you for choosing India Pharm Assist. We value your trust and are dedicated to ensuring your satisfaction with our products. Your happiness is our priority.</p>
            </div>
        </div>
    );
};

export default ReturnPolicy;
