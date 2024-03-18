import { useEffect, useState } from 'react';
import Heading from '../Heading/Heading';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
  const [collection, setCollection] = useState([])
  const fetchCollection = async () => {
    try {
      const response = await axios.get('https://www.api.indiapharmassist.com/api/v1/AllCategoreys');
      // console.log(response.data.data)
      setCollection(response.data.data);
    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    fetchCollection()
  }, []);

  return (
    <div className='w-full p-2'>
      <Heading title={'Our'} subtitle={'Collection'} />

      <div className='w-full  gap-2 grid grid-cols-2 md:grid-cols-5'>
        {collection &&
          collection.slice(0, 10).map((item, index) => (
            <Link to={`/Cat-Prodcuts-Products-info/${item.categoryName}`} className='divs' key={index}>
              <div className='relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'>
                <a className='relative md:mx-3 md:mt-3 flex h-[220px] md:h-60 overflow-hidden rounded-xl' href='#'>
                  {item.image.map((image, imageIndex) => (
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
                    <h5 className=' text-sm md:text-xl tracking-tight text-slate-900'>{item.categoryName}</h5>
                  </a>
                  <h5 className='text-md mb-1 sm:mb-1 md:text-xl tracking-tight text-slate-500'>{item.productCount} items</h5>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {collection && collection.length >= 10 && (
        <div className=" text-center mt-4">
          <butLton className="bg-[#D19E66] text-black px-4 py-2 rounded-md hover:bg-[#d19d66cf]">
            View More
          </butLton>
        </div>
      )}
    </div>
  );
};

export default Products;
