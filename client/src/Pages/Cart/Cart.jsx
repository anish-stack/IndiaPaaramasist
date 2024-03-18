import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../redux/Slices/AddtoCartslice';
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import toast from 'react-hot-toast'
const Cart = () => {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cartReducers)
    const length = cartState.length
    const [products, setProducts] = useState([]);


    // Function to store product information and quantity in state
    const storeProductInfo = () => {
        const productsData = cartState.map(item => ({
            product: item.payload.Products[0],
            quantity: item.payload.quantity
        }));
        setProducts(productsData);
    };

    useEffect(() => {
        storeProductInfo();
    }, [cartState])



    const handleRemove = (id, index) => {
        dispatch(remove({ id, index }));
    };
    const calculateTotal = () => {
        return products.reduce((total, item) => {
            return total + item.quantity * item.product.DiscountPrice
                ;
        }, 0);
    };
    const totalAmount = calculateTotal();
    const cartItems = sessionStorage.getItem('cartFinal')
    const final = JSON.parse(cartItems)
    // console.log(final)
    const [formdata, setFormdata] = useState({
        cartItems: final,
        Name: "",
        ContactNumber: "",
        Email: "",
        State: "",
        Address: "",
        Landmark: "",
        TotalCost: totalAmount
    })

    const HandleChange = (event) => {
        const { name, value } = event.target;
        let newValue = value;
    
        // Validate Contact Number: Allow only numbers and limit to 10 digits
        if (name === "ContactNumber") {
            // Remove non-numeric characters
            newValue = newValue.replace(/\D/g, '');
            // Limit to 10 digits
            newValue = newValue.slice(0, 10);
    
          
        }
    
        setFormdata((prevData) => {
            return { ...prevData, [name]: newValue };
        });
    };
    
    

    const MakeCheckOut = async () => {
        if (!formdata.Name || !formdata.ContactNumber || !formdata.Email || !formdata.State || !formdata.Address || !formdata.Landmark) {
            toast.error("Please fill out all fields.");
            return;
        }
        if(formdata.ContactNumber.length !==10){
            toast.error("Contact Numbers Is Not Valid");
            return;
        }
        try {
            const res = await axios.post('https://www.api.indiapharmassist.com/api/v1/Make-Order', formdata)
            console.log(res.data)
            toast.success('Order Placed SuccessFull')
            setTimeout(() => {
                window.location.href = "/Success"
                sessionStorage.clear()
            }, 2000);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="sm:flex shadow-md my-10">
                <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{length} Items</h2>
                    </div>
                    {products && products.map((product, index) => (
                        <div key={index} className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div className="md:w-4/12 2xl:w-1/4 w-full">
                                <img src={product.product.productImg[0]} alt="Black Leather Purse" className="h-full object-center object-cover md:block hidden" />
                                <img src={product.product.productImg[0]} alt="Black Leather Purse" className="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{product.product.Categorey}</p>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-base font-black leading-none text-gray-800">{product.product.productName}</p>

                                </div>
                                <p className="text-xl mt-2 leading-3 text-gray-600 pt-2">Quantity: {product.quantity}</p>

                                <div className="flex items-center justify-between pt-5">
                                    <div className="flex itemms-center">

                                        <p onClick={() => handleRemove(product.product._id, index)} className="text-xl leading-3 underline text-red-500 pl-5 cursor-pointer"><MdDelete /></p>
                                    </div>
                                    <p className="text-base font-black leading-none text-gray-800">{product.product.DiscountPrice}</p>
                                </div>
                            </div>
                        </div>

                    ))}



                    <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                            <path
                                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                        </svg>
                        Continue Shopping
                    </a>
                </div>
                <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {length}</span>
                        <span className="font-semibold text-sm">{totalAmount}</span>
                    </div>

                    <form className="py-2">
                        <label
                            htmlFor="Name"
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="Name"
                            value={formdata.Name}
                            onChange={HandleChange}
                            required={true}
                            name='Name'
                            placeholder="Enter your Name"
                            className="p-2 text-sm w-full"
                        />
                    </form>
                    <div className="py-2">
                        <label
                            htmlFor="Contact-Number"
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            Contact-Number
                        </label>
                        <input
                            type="text"
                            id="promo"
                            value={formdata.ContactNumber}
                            onChange={HandleChange}
                            required={true}
                            name='ContactNumber'
                            placeholder="Enter your Contact-Number"
                            className="p-2 text-sm w-full"
                        />
                    </div>
                    <div className="py-2">
                        <label
                            htmlFor="Email"
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="Email"
                            value={formdata.Email}
                            onChange={HandleChange}
                            required={true}
                            name='Email'
                            placeholder="Enter your Email"
                            className="p-2 text-sm w-full"
                        />
                    </div>
                    <div className="py-2">
                        <label
                            htmlFor="State"
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            State
                        </label>
                        <input
                            type="text"
                            id="State"
                            value={formdata.State}
                            onChange={HandleChange}
                            required={true}
                            name='State'
                            placeholder="Enter your State"
                            className="p-2 text-sm w-full"
                        />
                    </div>
                    <div className="py-2">
                        <label
                            htmlFor="Address"
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            Address
                        </label>
                        <input
                            type="text"
                            id="Address"
                            value={formdata.Address}
                            onChange={HandleChange}
                            required={true}
                            name='Address'
                            placeholder="Enter your Address"
                            className="p-2 text-sm w-full"
                        />
                    </div>
                    <div className="py-2">
                        <label
                            htmlFor="Landmark"
                            className="font-semibold inline-block mb-3 text-sm uppercase"
                        >
                            Landmark
                        </label>
                        <input
                            type="text"
                            id="Landmark"
                            value={formdata.Landmark}
                            onChange={HandleChange}
                            required={true}
                            name='Landmark'
                            placeholder="Enter your Landmark"
                            className="p-2 text-sm w-full"
                        />
                    </div>

                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span className='text-xl'>Rs: {totalAmount}</span>
                        </div>
                        <button onClick={MakeCheckOut} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                            Checkout
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart