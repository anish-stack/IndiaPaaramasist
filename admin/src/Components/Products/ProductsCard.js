import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Productcard = ({ Product }) => {
  const token = sessionStorage.getItem('token');
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    if (Product) {
      setProducts(Product);
    }
  }, [Product]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products && products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://toysbackend.onrender.com/api/v1/delete-product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(response.data);
      toast.success('Product Deleted');

      // Update the state after successful deletion
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container mt-5'>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Image</th>
            <th scope='col'>Product Name</th>
            <th scope='col'>Category</th>
            <th scope='col'>Discount Price</th>
            <th scope='col'>Stock Status</th>
            <th scope='col'>Actions</th>
            <th scope='col'>Tag</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts &&
            currentProducts.map((item, index) => (
              <tr key={index}>
                <td className='w'>
                  <img src={item.productImg[0] || 'No-image'} alt={item.productName} className='  h ' />
                </td>
                <td>{item.productName}</td>
                <td>{item.Categorey}</td>
                <td>
                  <p>
                    <del>{item.price}</del> {item.DiscountPrice}
                  </p>
                </td>
                
           
                <td>
                  <div className='mt-3'>
                    <Link to={`/Edit-Product/${item._id}/${item.productName}`} className='btn btn-warning me-2'>
                      Edit Product
                    </Link>
                    <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>
                      Delete Product
                    </button>
                  </div>
                </td>
                <td>
                  <div className='badge bg-primary'>{item.Tag}</div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ul className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
          <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
            <button onClick={() => paginate(i + 1)} className="page-link">{i + 1}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productcard;
