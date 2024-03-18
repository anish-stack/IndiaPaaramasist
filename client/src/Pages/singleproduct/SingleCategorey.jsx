import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
// import { FaRupeeSign } from "react-icons/fa";
import imgss from './pngegg (5).png'
// import { add } from '../../redux/Slices/AddtoCartslice';
// import { useDispatch } from 'react-redux'
const CateSingleProduct = () => {
    const { name } = useParams()
    // const dispatch = useDispatch()
    // const [shippingVisible, setShippingVisible] = useState(false);
    // const [contactVisible, setContactVisible] = useState(false);
    const [Products, setProducts] = useState([]);
    const [loding, setLoding] = useState(false);
    useEffect(() => {
        // Scroll to the top of the window
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: smooth scrolling animation
        });
    }, []);

    const Fetchdata = async () => {
        setLoding(true)
        try {
            const response = await axios.get(`https://www.api.indiapharmassist.com/api/v1/Categorey-product/${name}`)
            console.log(response.data.data)
            setProducts(response.data.data)
            setLoding(false)
        } catch (error) {
            // console.log(error)
            setLoding(false)
        }
    }
    useEffect(() => {
        Fetchdata()
    }, [name])
    // const toggleShipping = () => {
    //     setShippingVisible(!shippingVisible);
    // };

    // const toggleContact = () => {
    //     setContactVisible(!contactVisible);
    // };
    // const [quantity, setQuantity] = useState(1);

    // const handleIncrease = () => {
    //     setQuantity(quantity + 1);
    // };

    // const handleDecrease = () => {
    //     if (quantity > 0) {
    //         setQuantity(quantity - 1);
    //     }
    // };
    // const handleAddToCart = ()=>{
    //     console.log(Products)

    //     const ProductsList = Products.map((item => ({
    //         id: item._id,
    //         name: item.productName,
    //         price: item.price,
    //         quantity: quantity,
    //         image: item.productImg,

    //     })))
    //     // console.log(ProductsList)
    //     sessionStorage.setItem('cartFinal', JSON.stringify(ProductsList))
    //     dispatch(add({ payload: { Products,  quantity } }));
    // }


    return (
        <>

            {loding ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div>
            ) : (
<div className="md:flex max-w-7xl min-h-screen gap-6 mx-auto items-start justify-start py-12 2xl:px-20 md:px-6 px-4">
    {Products && Products.length > 0 ? (
        Products.map((item, index) => (
            <Link to={`/Products-info/${item.productName}`} className='divs' key={index}>
                <div className='relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
                    <a className='relative md:mx-3 md:mt-3 flex h-[220px] md:h-60 overflow-hidden rounded-xl' href='#'>
                        {item.productImg && item.productImg.map((image, imageIndex) => (
                            <img
                                key={imageIndex}
                                className='w-full h-[200px] md:h-full object-cover'
                                src={image}
                                alt={`product image ${imageIndex + 1}`}
                            />
                        ))}
                        <span className='absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white'>
                            39% OFF
                        </span>
                    </a>
                    <div className='md:mt-4 mt-1 text-center md:px-5 md:pb-5'>
                        <a href='#'>
                            <h5 className=' text-sm md:text-xl tracking-tight text-slate-900'>{item.productName}</h5>
                        </a>
                    </div>
                </div>
            </Link>
        ))
    ) : (
        <div className="flex w-[1200px] min-h-screen items-center justify-center">
           <h2 className='md:text-5xl'>Sorry For inconvince <img src={imgss} className='w-32 m-4' alt="" /> </h2>
        </div>
    )}
</div>

            )}
        </>

    )
}

export default CateSingleProduct