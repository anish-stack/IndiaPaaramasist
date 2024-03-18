import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Address = () => {
  const { id } = useParams();
  const token = sessionStorage.getItem('token');
console.log(id)
  const [filteredOrders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://toyadmin.onrender.com/api/v1/get-Order', {
 
      });
      const filterOrder = response.data.data.filter((item)=> item._id === id)
      setOrders(filterOrder);
      console.log(response.data.data)
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  useEffect(()=>{
    fetchOrders() 
  },[id])

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Orders-Details</h2>
      {filteredOrders.map((order) => (
        <div key={order._id} className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h4>Order ID: {order._id}</h4>
                <p>Order Status: {order.orderStatus}</p>
                <p>Created At: {order.createdAt}</p>
              </div>
              <div className="col">
                <h4>Product Details:</h4>
                {order.product.map((product) => (
                  <div key={product._id}>
                    <p>Name: {product.name}</p>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    {/* Additional product details can be displayed here */}
                  </div>
                ))}
              </div>
              <div className="col">
                <h4>Address Details:</h4>
            
                  <div key={order._id}>
                  <p>Name: {order.Name}</p>
                    <p>Contact Number: {order.ContactNumber}</p>
                    <p>Email: {order.Email}</p>

                    <p>State: {order.State}</p>
                    
                    <p>Address: {order.Address}</p>
                    <p>Landmark: {order.Landmark}</p>
                  </div>
             
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Address;
