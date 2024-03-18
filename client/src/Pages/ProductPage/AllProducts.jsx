import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from '../../redux/Slices/ProductSlices';
import { Link } from 'react-router-dom';
import Heading from '../../Components/Heading/Heading';
const AllProducts = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.Products)

    useEffect(() => {
        dispatch(fetchData())
    }, [])
    useEffect(() => {
        // Scroll to the top of the window
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: smooth scrolling animation
        });
    }, []);
  return (
    <div className='w-full p-2'>
    <Heading title={"All"} subtitle={"Products"} />

    <div className='w-full md:px-5 md:py-2 gap-2 grid grid-cols-2 md:grid-cols-5'>
        {productList && productList.data.map((item, index) => (
            <Link to={`/Products-info/${item.productName}`} key={index}>
                <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <a className="relative md:mx-3 md:mt-3 flex h-[220px] md:h-60 overflow-hidden rounded-xl" href="#">
                        {item.productImg.map((image, imageIndex) => (
                            <img key={imageIndex} className=" w-full  md:h-full h-[200px] object-contain" src={image} alt={`product image ${imageIndex + 1}`} />
                        ))}
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                            {item.Tag}
                        </span>
                    </a>
                    <div className="md:mt-4 mt-1 text-center md:px-5 md:pb-5">
                        <a href="#">
                            <h5 className="text-sm md:text-xl tracking-tight text-slate-900">{item.productName}</h5>
                        </a>
                        <h5 className='text-md mb-1 sm:mb-1 md:text-xl tracking-tight font-bold text-[#D19E66]'>Rs {item.DiscountPrice}</h5>
                    </div>
                </div>
            </Link>
        ))}


    </div>
   
</div>
  )
}

export default AllProducts