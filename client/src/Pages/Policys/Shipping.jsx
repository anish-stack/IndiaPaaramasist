import { useEffect } from "react";

const ShippingPolicy = () => {
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
                <h6 className="text-lg font-bold mb-4">Welcome to the home of India Pharm Assist. We are dedicated to providing you with a seamless and reliable shopping experience, including a transparent and efficient delivery and shipping process. Please take a moment to read our Delivery and Shipping Policy to understand how we fulfill your orders and bring the magic of India Pharm Assist products to your doorstep.</h6>
            </div>

            <div className="col-12 mt-5">
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">Order Processing</h5>
                    <p className="mb-4">Upon placing your order on our website, our team initiates the order processing procedure. Orders are typically processed within 1-2 business days. You will receive an email confirmation once your order has been successfully processed.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">Shipping Options</h5>
                    <p className="mb-4">We offer a range of shipping options to cater to your needs:</p>
                    <ul className="mb-4 list-disc list-inside">
                        <li className="mb-2">Standard Shipping: Our standard shipping option ensures safe delivery within 5-7 business days from the date of order processing.</li>
                        <li className="mb-2">Express Shipping: For those who can't wait to experience India Pharm Assist, we offer an express shipping option that delivers your order within 2-3 business days.</li>
                    </ul>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">Shipping Charges</h5>
                    <p className="mb-4">Shipping charges are calculated based on your location and the chosen shipping method. The total shipping cost will be displayed at checkout before you finalize your order.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">Order Tracking</h5>
                    <p className="mb-4">To keep you informed about your order's journey, we provide tracking information via email once your order has been dispatched. You can easily monitor the progress of your shipment and anticipate its arrival.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">Delivery Times</h5>
                    <p className="mb-4">Delivery times are estimates and can vary based on factors such as your location, weather conditions, and any unforeseen circumstances that may arise during transit. While we make every effort to ensure timely deliveries, please understand that occasional delays may occur.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">International Shipping</h5>
                    <p className="mb-4">We're thrilled to bring India Pharm Assist products to customers around the world. International shipping options are available, with delivery times varying depending on the destination country. Please note that any customs duties, taxes, or fees imposed by the recipient's country are the responsibility of the customer.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">Shipping Address</h5>
                    <p className="mb-4">Kindly ensure that you provide accurate and complete shipping information during checkout. Any errors or omissions in the shipping address can lead to delivery delays or issues.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">Order Changes and Cancellations</h5>
                    <p className="mb-4">If you need to make changes to your order or cancel it after it has been placed, please reach out to our customer service team as soon as possible. We'll do our best to accommodate your request, but please note that changes or cancellations may not be possible once the order has been dispatched.</p>
                </div>
                <div className="single">
                    <h5 className="text-lg font-bold mb-2">Questions and Assistance</h5>
                    <p className="mb-4">If you have any questions, concerns, or need assistance regarding our Delivery and Shipping Policy, please don't hesitate to contact our customer service team at <a href="mailto:support@indiafarmassist.com" className="text-blue-500">support@indiafarmassist.com</a>.</p>
                </div>
                <div className="single">
                    <p className="mb-4">Thank you for choosing India Pharm Assist. We are committed to delivering quality products to your doorstep, and we appreciate your trust in our brand.</p>
                </div>
            </div>
        </div>
    );
};

export default ShippingPolicy;
