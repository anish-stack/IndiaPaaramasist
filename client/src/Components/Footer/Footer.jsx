import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white">Company</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="#" className="hover:text-white"><img src="https://i.ibb.co/7X720P5/image.png" className='w-25' alt="" /></Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:text-white">India Pharm Assist is happy to serve all men and women by letting them shop for high-quality toys and accessories from anywhere in India. Pick your dream toy from our store and take your sexual bliss to the zenith,</Link>
                            </li>
   
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white">OUR CATEGORIES</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="#" className="hover:text-white">For Her</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:text-white">For Him</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:text-white">For Couple</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:text-white">Party</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link to="/Privacy-Policy" className="hover:text-white">Privacy Policy</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/ShippingPolicy" className="hover:text-white">Shipping & Delivery</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/TermsAndConditions" className="hover:text-white">Terms &amp; Conditions</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/ReturnPolicy" className="hover:text-white">Return &amp; Refund Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white">CITIES WE DELIVER TO</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="#" className="hover:text-white">Delhi | Bangkok | Pattaya | Phuket | Samut Prakan | Mueang Nonthaburi | Udon Thani | Chon Buri | Nakhon Ratchasima | Chiang Mai | Hat Yai | Pak Kret</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="tel:9876543210" className="hover:text-white">Tel: +91 9876543210</Link>
                            </li>
                            <li className="mb-4">
                                <Link href="#" className="hover:text-white">Email: abc@gmail.com</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                        © 2024 <a href="https://flowbite.com/">India Pahrma Assit</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <Link href="https://digiindiasolutions.com/" className='font-bold text-xl'>Design By  | Digi India Solutions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
