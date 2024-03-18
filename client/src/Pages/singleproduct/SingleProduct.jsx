import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { FaRupeeSign } from "react-icons/fa";
import { add } from '../../redux/Slices/AddtoCartslice';
import {useDispatch} from 'react-redux'
const SingleProduct = () => {
    const { name } = useParams()
    const dispatch = useDispatch()
    const [shippingVisible, setShippingVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);
    const [Products, setProducts] = useState([]);
    const [loding, setLoding] = useState(false);


    const Fetchdata = async () => {
        setLoding(true)
        try {
            const response = await axios.get(`https://www.api.indiapharmassist.com/api/v1/single-product/${name}`)
            console.log(response.data.data)
            setProducts([response.data.data])
            setLoding(false)
        } catch (error) {
            console.log(error)
            setLoding(false)
        }
    }
    useEffect(() => {
        Fetchdata()
    }, [name])
    const toggleShipping = () => {
        setShippingVisible(!shippingVisible);
    };

    const toggleContact = () => {
        setContactVisible(!contactVisible);
    };
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const handleAddToCart = ()=>{
        console.log(Products)
       
        const ProductsList = Products.map((item => ({
            id: item._id,
            name: item.productName,
            price: item.price,
            quantity: quantity,
            image: item.productImg,

        })))
        // console.log(ProductsList)
        sessionStorage.setItem('cartFinal', JSON.stringify(ProductsList))
        dispatch(add({ payload: { Products,  quantity } }));
    }

    useEffect(() => {
        // Scroll to the top of the window
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: smooth scrolling animation
        });
    }, [name]);
    return (
        <>

            {loding ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            ) : (
                <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                    {Products.map(product => (
                        <>
                            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                                <img className="w-full" alt="image of a girl posing" src={product.productImg[0]} />
                            </div>
                            <div className="md:hidden">
                                <img className="w-full" alt="image of a girl posing" src={product.productImg[0]} />

                            </div>
                            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                                <div className="border-b border-gray-200 pb-6">
                                    <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">{product.Categorey}</p>
                                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{product.productName}</h1>
                                </div>
                                <div>
                                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">{product.Description}</p>
                                    <p className=" text-2xl leading-4 mt-7 font-bold flex items-center gap-2 text-orange-600 dark:text-gray-300"> <FaRupeeSign/> {product.DiscountPrice} <del className='text-slate-700'>{product.price}</del> </p>


                                </div>
                                <div className="flex mt-4 items-start justify-start">
                                         {/* Minus Icon */}
                                         <div onClick={handleDecrease} className="w-8 h-8 border border-gray-400 flex items-center justify-center cursor-pointer rounded-full">
                                        <span className="text-orange-600 text-xl font-bold">-</span>
                                    </div>
                              

                                    {/* Zero */}
                                    <div className="w-8 h-8 border border-gray-400 flex items-center justify-center cursor-pointer rounded-full mr-2">
                                        <span className="text-gray-600 text-xl font-bold">{quantity}</span>
                                    </div>
      {/* Plus Icon */}
      <div onClick={handleIncrease} className="w-8 h-8 border border-gray-400 flex items-center justify-center cursor-pointer rounded-full mr-2">
                                        <span className="text-orange-600 text-xl font-bold">+</span>
                                    </div>
                               
                                </div>
                                <button
                                  onClick={() =>
                                    handleAddToCart({
                                        ...Products,
                                      
                                        quantity: quantity,
                                    })
                                }
                                className="bg-orange-600 mt-4 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                                    Add to Cart
                                </button>


                                <div>
                                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                                        <div data-menu className="flex justify-between items-center cursor-pointer" onClick={toggleShipping}>
                                            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Shipping and returns</p>
                                            <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                                                <svg className={`transform text-gray-300 dark:text-white ${shippingVisible && 'rotate-180'}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 1L5 5L1 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className={`pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300 ${shippingVisible ? '' : 'hidden'}`} id="sect">
                                            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="border-b py-4 border-gray-200">
                                        <div data-menu className="flex justify-between items-center cursor-pointer" onClick={toggleContact}>
                                            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Contact us</p>
                                            <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                                                <svg className={`transform text-gray-300 dark:text-white ${contactVisible && 'rotate-180'}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 1L5 5L1 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className={`pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300 ${contactVisible ? '' : 'hidden'}`} id="sect">
                                            If you have any questions on how to return your item to us, contact us.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    ))}


                </div>
            )}
        </>

    )
}

export default SingleProduct